import { useSession } from "next-auth/react";
import { MyBarChart } from "./MyBarChart";
import { MyPieChart } from "./MyPieChart";
import { MyRadarChart } from "./MyRadarChart";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ProfileView({ mobileMode }: { mobileMode: boolean }) {
  const { data: session, status } = useSession();

  return (
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
  );
}
