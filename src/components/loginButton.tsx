"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function LoginButton({ textLogin }: { textLogin: string }) {
  const { data: session } = useSession();

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      console.log("Mensaje recibido:", event.data);
      if (event.origin !== "http://localhost:3000") return;

      const { accessToken } = event.data;
      if (accessToken) {
        // localStorage.setItem("token", token);
        console.log("Token recibido:", accessToken);
      }
    };

    window.addEventListener("message", receiveMessage);
    return () => window.removeEventListener("message", receiveMessage);
  }, []);

 
  const openPopup = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const authWindow = window.open(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/google`, // URL del backend de NestJS
      "Login",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const checkPopup = setInterval(() => {
      if (!authWindow || authWindow.closed) {
        clearInterval(checkPopup);
        // Aquí podríamos verificar si el usuario ya tiene un token
        console.log("Popup cerrado");
      }
    }, 500);
  };

  if (session) {
    return (
      <div className="flex flex-col gap-2 items-center">
        <Link href="/onboarding">Complete your profile</Link>
        or <br />
        <Button
          className="bg-green-900 text-lg"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1 items-center">
      {/* <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/google`}>login </a> */}

      <Button
        className="bg-white text-green-900 text-lg gap-1 border-2 border-green-800"
        onClick={() => openPopup()}

        // () => signIn("google", { callbackUrl: "/onboarding" })}
      >
        <img src="/google.png" className="h-6"></img>
        {textLogin}
      </Button>
    </div>
  );
}
