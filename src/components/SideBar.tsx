import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ShareButton } from "./shareButton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function SideBar({
  mobileMode,
  nickName,
}: {
  mobileMode: boolean;
  nickName: string;
}) {
  const { data: session, status } = useSession();

  return (
    <>
      {!mobileMode && (
        <div className="flex flex-col gap-6 items-center">
          <Avatar className="w-44 h-44">
            <AvatarImage src="https://github.com/shadcn.png" alt={"avatar"} />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold">/{nickName}</h1>
        </div>
      )}
      {mobileMode && (
        <h1 className="text-6xl font-bold text-center">
          {"This is how your portfolio will looks like -> "}
        </h1>
      )}
      <div className="flex flex-col gap-2">
        <ShareButton text={`https://trade.rats2lab.com/${nickName}`} />

        <Button variant="outline">
          <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
          <Link href={"/explore"}> Explore</Link>
        </Button>
      </div>
      <hr className="w-full" />
    </>
  );
}
