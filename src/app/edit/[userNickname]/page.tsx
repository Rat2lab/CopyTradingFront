"use client";

import { useUserContext } from "@/app/hooks/useUser";
import LoginButton from "@/components/loginButton";
import { MyBarChart } from "@/components/MyBarChart";
import { MyPieChart } from "@/components/MyPieChart";
import { MyRadarChart } from "@/components/MyRadarChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  UploadIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { userNickame: string } }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setActualUser, actualUser } = useUserContext();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/${params.userNickame}`
        );
        if (!response.ok) {
          setError("Error loading profile");
          return;
        }
        const data = await response.json();
        setActualUser(data);
        setLoading(false);
      } catch (error) {
        setError("Error loading profile");
      }
    };
    //fetchUserInfo();
    console.log("use Effect edit page, session:", session);
    setLoading(false);
  }, [session]);

  if (loading) {
    return (
      <div className="h-full w-full flex justify-center content-center">
        {"Loading your page"}
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
    <div
      className={`max-h-screen grid grid-cols-12 items-start 
    justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]
    ${mobileMode ? "bg-slate-400" : ""}
    `}
    >
      <div className="flex flex-col min-w-full gap-6 items-center col-span-3 col-start-2 justify-start pt-20 h-full">
        {!mobileMode && (
          <div className="flex flex-col gap-6 items-center">
            <Avatar className="w-44 h-44">
              <AvatarImage src="https://github.com/shadcn.png" alt={"avatar"} />
              <AvatarFallback>user</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold">/{session?.user?.nickName}</h1>
          </div>
        )}
        {mobileMode && (
          <h1 className="text-6xl font-bold text-center">
            {"This is how your portfolio will looks like -> "}
          </h1>
        )}
        <div className="flex flex-col gap-2">
          <Button variant="default">
            <Share1Icon className="mr-2 h-4 w-4" />
            Share this profile
          </Button>
          <Button variant="outline">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            <Link href="/explore"> Explore</Link>
          </Button>
        </div>
        <hr className="w-full" />
        <div className="flex flex-col gap-2 pt-5">
          <div className="flex mb-2 items-center gap-2">
            <Switch
              checked={mobileMode}
              onCheckedChange={(
                checked: boolean | ((prevState: boolean) => boolean)
              ) => {
                setMobileMode(checked);
              }}
            />
            <span>Mobile mode</span>
          </div>
          <Button variant="default">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add chart
          </Button>
          <Button variant="default">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add text
          </Button>
          <Button variant="default">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload image
          </Button>
          {/* <Button variant="secondary">
            <PlusIcon className="mr-2 h-4 w-4" />
            New section
          </Button> */}
          <Button
            className="mt-20 bg-white text-black md:bg-black md:text-white text-lg"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </Button>{" "}
        </div>
      </div>

      <main
        className={`w-full col-span-7 max-h-[90vh] overflow-auto flex gap-8 justify-between${
          mobileMode
            ? "border-r-gray-800 border-4 max-h-[720px] max-w-80 bg-white flex-col"
            : ""
        }`}
      >
        {mobileMode && (
          <div className="flex flex-col gap-6 items-center">
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://github.com/shadcn.png" alt={"avatar"} />
              <AvatarFallback>user</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">/{session?.user?.nickName}</h1>
          </div>
        )}
        <div className={`w-full flex flex-col gap-6 items-center `}>
          <h2 className="text-3xl">My basic statistics</h2>
          <MyBarChart />
          <MyPieChart />
          <MyRadarChart />
          <MyPieChart />
        </div>
      </main>
    </div>
  );
}
