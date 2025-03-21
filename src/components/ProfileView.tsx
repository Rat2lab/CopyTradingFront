import { Profile } from "@/interfaces/user.interface";
import { ProfileWidget } from "./ProfileWidget";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUserContext } from "@/app/hooks/useUser";

import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useMediaQuery } from "react-responsive";

const ReactGridLayout = WidthProvider(RGL);

export function ProfileView({
  mobileMode,
  profile,
}: {
  mobileMode: boolean;
  profile?: Profile;
}) {
  const { setUserLogged, loggedUser } = useUserContext();

  // TODO Check if profile is editable or send as param?
  // If logged user is profile owner, show "edit profile" button

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
          <h1 className="text-3xl font-bold">/{loggedUser?.nickName}</h1>
        </div>
      )}

      <div className={`w-full flex flex-col gap-6 items-center `}>
        <h2 className="text-3xl">My profile</h2>
        {/* <div className={`w-full grid grid-cols-4 gap-6 items-center `}> */}

        <ReactGridLayout
          className="layout bg-white w-full"
          width={1000}
          cols={4}
          draggableHandle=".react-grid-dragHandleExample"
          autoSize
          compactType={"vertical"}
        >
          {profile?.widgets.map((widget, index) => {
            const desktopEnv = widget.environments.find(
              (env) => env.type === "desktop"
            );
            const mobileEnv = widget.environments.find(
              (env) => env.type === "mobile"
            );
            const isDesktopOrLaptop = useMediaQuery({
              query: "(min-width: 768px)",
            });
            const dataGrid = {
              x: 0,
              // TODO define X and Y of every element
              y: 0,
              w: isDesktopOrLaptop
                ? desktopEnv
                  ? desktopEnv.size.column
                  : 0
                : mobileEnv
                ? mobileEnv.size.column
                : 0,
              h: isDesktopOrLaptop
                ? desktopEnv
                  ? desktopEnv.size.row
                  : 0
                : mobileEnv
                ? mobileEnv.size.row
                : 0,
            };
            return (
              <div key={widget.id} data-grid={dataGrid}>
                <ProfileWidget widget={widget} key={widget.id} index={index} />
              </div>
            );
          })}
        </ReactGridLayout>

        {/* </div> */}
      </div>
    </main>
  );
}
