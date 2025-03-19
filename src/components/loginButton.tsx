"use client";

import { useUserContext } from "@/app/hooks/useUser";
import { Button } from "@/components/ui/button";
import { deleteCookie, getCookie } from "@/lib/utils";
import { getUser } from "@/pages/api/auth/user.api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoginButton({ textLogin }: { textLogin: string }) {
  // const { data: session } = useSession();
  const { setUserLogged } = useUserContext();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const googleAuth = () => {
    setLoading(true);
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/google`;
  };

  useEffect(() => {
    if (typeof window === "undefined") return; // Evitar ejecución en SSR

    const urlParams = new URLSearchParams(window.location.search);
    const accessTokenParam = urlParams.get("accessToken");

    if (!accessTokenParam) return;

    if (accessTokenParam) {
      //TODO REMOVE
      console.log("setting cookie with value: ", accessTokenParam);
      //Faking setting cookie
      document.cookie = `accessToken=${accessTokenParam}; Secure; Path=/`;

      const accessTokenInCookie = getCookie("accessToken");
      if (accessTokenInCookie) {
        console.log("accessTpoken in cookie", accessTokenInCookie);
        getUser(accessTokenInCookie)
          .then((user) => {
            setUserLogged(user);
          })
          .catch((error) => {
            //SET user fake
            setUserLogged({ id: "123", email: "test@gmail.com" });
          });
      }

      router.push("/onboarding");
    }

    setLoading(false);
  });

  if (loading) {
    return (
      <Image
        src="/favicon1024x1024.ico"
        alt="Loading..."
        width={32}
        height={32}
        className="animate-spin"
      />
    );
  }
  if (getCookie("accessToken")) {
    return (
      <div className="flex flex-col gap-2 items-center">
        <Link href="/onboarding">Complete your profile</Link>
        or <br />
        <Button
          className="bg-green-900 text-lg"
          onClick={() => {
            deleteCookie("accessToken");
            router.refresh();
          }}
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
        <Image src="/google.png" height={24} width={24} alt="Google_login"></Image>
        {textLogin}
      </Button>
    </div>
  );
}
