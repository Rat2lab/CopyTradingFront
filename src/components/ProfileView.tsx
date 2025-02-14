import { Profile, Widget, WidgetType } from "@/interfaces/user.interface";
import { useSession } from "next-auth/react";
import { ProfileWidget } from "./ProfileWidget";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ProfileView({
  mobileMode,
  profile,
}: {
  mobileMode: boolean;
  profile?: Profile;
}) {
  const { data: session, status } = useSession();
  const fakeWidgets: Widget[] = [];

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
        <h2 className="text-3xl">My profile</h2>
        <div
          className={`w-full grid grid-cols-${fakeWidgets.length} gap-6 items-center `}
        >
          {/* {profile?.widgets?.map((widget) => { */}
          {fakeWidgets.map((widget) => {
            return <ProfileWidget widget={widget} />;
          })}
        </div>
      </div>
    </main>
  );
}
