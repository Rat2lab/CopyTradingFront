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
        onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
      >
        <img src="/google.png" className="h-6"></img>
        {textLogin}
      </Button>
      
    </div>
  );
}
