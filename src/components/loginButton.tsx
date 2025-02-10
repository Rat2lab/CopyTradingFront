"use client";

import { HomeIcon } from "@radix-ui/react-icons";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginButton({ textLogin }: { textLogin: string }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col gap-2 items-center">
        <Link href="/onboarding">Complete your profile</Link>
        or <br />
        <Button
          className="bg-white text-black md:bg-black md:text-white text-lg"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2 items-center">
      <Button
        className="bg-white text-black md:bg-black md:text-white text-lg"
        onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
      >
        <HomeIcon className="mr-2 h-4 w-4" />
        {textLogin}
      </Button>
      <span className="md:text-black">Login with Google</span>
    </div>
  );
}
