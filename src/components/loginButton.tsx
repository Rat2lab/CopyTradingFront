"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function LoginButton({ textLogin }: { textLogin: string }) {
  const { data: session } = useSession();

  const googleAuth = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/google`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    console.log("accessToken", accessToken);
    // TODO save access token to session storage
    // TODO redirect to onboarding
  });

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
      <Button
        className="bg-white text-green-900 text-lg gap-1 border-2 border-green-800"
        onClick={() => googleAuth()}
      >
        <img src="/google.png" className="h-6"></img>
        {textLogin}
      </Button>
    </div>
  );
}
