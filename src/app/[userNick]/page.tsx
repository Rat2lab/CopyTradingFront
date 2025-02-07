"use client";

import LoginButton from "@/components/loginButton";
import { ProfileView } from "@/components/profileView";
import { SideBar } from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Profile } from "@/interfaces/user.interface";
import { getProfileByNickname } from "@/pages/api/auth/user.api";
import { PlusIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
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
    <div className="max-h-screen grid grid-cols-12 items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col min-w-full gap-6 items-center col-span-3 col-start-2 justify-start pt-20 h-full">
        <SideBar mobileMode={false} nickName={params.userNick} />
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
