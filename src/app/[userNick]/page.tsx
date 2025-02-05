"use client";

import { MyBarChart } from "@/components/MyBarChart";
import { MyPieChart } from "@/components/MyPieChart";
import { MyRadarChart } from "@/components/MyRadarChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlassIcon,
  Share1Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useUserContext } from "../hooks/useUser";
import { act, useEffect, useState } from "react";
import LoginButton from "@/components/loginButton";
import { Profile } from "@/interfaces/user.interface";
import { getProfileByNickname } from "@/pages/api/auth/user.api";


export default function Home({ params }: { params: { userNick: string } }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { setActualProfile, actualProfile } = useUserContext();
  console.log("render home page");

  //TODO infinite loop

  // Initialize user info
  useEffect(() => {
    // const checkProfileEditable = () => {
    //   if (session && actualUser) {
        // show suggestion to go to edit page? 
    // };

    console.log("actualuser", actualProfile);

    if (!actualProfile && params.userNick) {
      getProfileByNickname(params.userNick).then((profile: Profile) => {
        setActualProfile(profile);
        setLoading(false);
        // checkProfileEditable();
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
    <div className="max-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full overflow-auto flex gap-8 row-start-2 justify-between">
        <div className="flex flex-col gap-6 items-center">
          <Avatar className="w-44 h-44">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt={"" + actualProfile?.nickName}
            />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold">{actualProfile?.nickName}</h1>
          <Button variant="default">
            <Share1Icon className="mr-2 h-4 w-4" />
            Share this profile
          </Button>
          <Button variant="outline">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            <Link href="/explore"> Explore</Link>
          </Button>
        </div>
        <div className="w-full flex flex-col gap-6 items-center">
          <h2 className="text-3xl">My basic statistics</h2>
          <MyBarChart />
          <MyPieChart />
          <MyRadarChart />
        </div>
      </main>
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
  );
}