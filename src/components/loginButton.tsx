"use client";

import { useUserContext } from "@/app/hooks/useUser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginButton({ textLogin }: { textLogin: string }) {
  // const { data: session } = useSession();
  const { accessToken, setSessionAccessToken, setUserLogged } =
    useUserContext();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const googleAuth = () => {
    setLoading(true);
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/google`;
  };

  useEffect(() => {
    // TODO What if login fails

    const urlParams = new URLSearchParams(window.location.search);
    const accessTokenParam = urlParams.get("accessToken");

    if (accessTokenParam && !accessToken) {
      setSessionAccessToken(accessTokenParam);
      // TODO Loading status and call getUser
      setUserLogged({ id: "123", email: "test@gmail.com" });

      router.push("/onboarding");
      setLoading(false);
    }
  }, [router, accessToken]);

  if (loading) {
    return (
      <img
        src="/favicon1024x1024.ico"
        alt="Loading..."
        className="w-8 h-8 animate-spin"
      />
    );
  }
  if (accessToken) {
    return (
      <div className="flex flex-col gap-2 items-center">
        <Link href="/onboarding">Complete your profile</Link>
        or <br />
        <Button
          className="bg-green-900 text-lg"
          onClick={() => setSessionAccessToken(undefined)}
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
