"use client";

import { Loading } from "@/components/Loading";
import { ProfileView } from "@/components/ProfileView";
import { SideBar } from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { PlusIcon, UploadIcon } from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { userNickname: string } }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("use Effect edit page, session:", session);
    setLoading(false);
  }, [session]);

  if (loading) {
    return <Loading />;
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
        <SideBar mobileMode={mobileMode} nickName={params.userNickname} />
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

      <ProfileView mobileMode={mobileMode} />
    </div>
  );
}
