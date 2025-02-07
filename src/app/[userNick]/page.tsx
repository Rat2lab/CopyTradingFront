"use client";

import LoginButton from "@/components/loginButton";
import { ProfileView } from "@/components/profileView";
import { ShareButton } from "@/components/shareButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Profile } from "@/interfaces/user.interface";
import { getProfileByNickname } from "@/pages/api/auth/user.api";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "../hooks/useUser";

export default function Home({ params }: { params: { userNick: string } }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { setActualProfile, actualProfile } = useUserContext();

  //TODO infinite loop

  // Initialize user info
  useEffect(() => {
    // const checkProfileEditable = () => {
    //   if (session && actualUser) {
    // show suggestion to go to edit page?
    // };

    if (!actualProfile && params.userNick) {
      getProfileByNickname(params.userNick)
        .then((profile: Profile) => {
          setActualProfile(profile);
          setLoading(false);
          // checkProfileEditable();
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error loading profile", error);
          setError(error);
        });
    }
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full flex justify-center content-center">
        {"cargando"}
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full w-full flex justify-center content-center">
        {"Error loading profile"}
      </div>
    );
  }

  return (
    <div className="max-h-screen grid grid-cols-12 grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-6 items-center col-span-3 col-start-2">
        <Avatar className="w-44 h-44">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt={"" + actualProfile?.nickName}
          />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">{actualProfile?.nickName}</h1>
        <ShareButton
          text={`https://trade.rats2lab.com/${actualProfile?.nickName}`}
        />
        <Button variant="outline">
          <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
          <Link href="/explore"> Explore</Link>
        </Button>
        {status != "authenticated" && (
          <footer className="w-full row-start-3 flex gap-6 flex-wrap items-center justify-start">
            <Button variant="default">
              <PlusIcon className="mr-2 h-4 w-4" />
              Create your portfolio
            </Button>
            <LoginButton></LoginButton>
          </footer>
        )}
      </div>
      <ProfileView mobileMode={false} />
    </div>
  );
}
