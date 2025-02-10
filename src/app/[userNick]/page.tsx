"use client";

import { Loading } from "@/components/Loading";
import LoginButton from "@/components/loginButton";
import { ProfileView } from "@/components/ProfileView";
import { SideBar } from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Profile } from "@/interfaces/user.interface";
import { getProfileByNickname } from "@/pages/api/auth/user.api";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "../hooks/useUser";
import { NotFound } from "@/components/NotFound";

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
    return <Loading />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <div className="max-h-screen grid grid-cols-12 items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col min-w-full gap-6 items-center col-span-3 col-start-2 justify-start pt-20 h-full">
        <SideBar mobileMode={false} nickName={params.userNick} />
        {status != "authenticated" ? (
          <div className="w-full row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <LoginButton textLogin="Create your portfolio"></LoginButton>
          </div>
        ) : (
          <div>
            <Button variant="default">
              <Link href="/onboarding">Complete your profile</Link>
            </Button>
          </div>
        )}
      </div>
      <ProfileView mobileMode={false} />
    </div>
  );
}
