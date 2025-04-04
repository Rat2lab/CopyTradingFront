import { Profile } from "@/interfaces/user.interface";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUserContext } from "@/app/hooks/useUser";

import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useMediaQuery } from "react-responsive";
import { MoveIcon } from "@radix-ui/react-icons";
import { ProfileWidgetType } from "./ProfileWidgetType";
import { Textfit } from "react-textfit";

const ReactGridLayout = WidthProvider(RGL);

export function ProfileView({
  mobileMode,
  profile,
  editable,
}: {
  mobileMode: boolean;
  profile?: Profile;
  editable?: boolean;
}) {
  const { setUserLogged, loggedUser } = useUserContext();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

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

        <ReactGridLayout
          className="layout bg-white w-full"
          width={1000}
          cols={4}
          isDraggable={editable}
          isResizable={editable}
          draggableHandle=".react-grid-dragHandleExample"
          autoSize
          compactType={"vertical"}
          // TODO compact vertical AND horizontal is posible? https://github.com/react-grid-layout/react-grid-layout/issues/1100#issuecomment-583741129 
          // use x y w h ?
        >
          {profile?.widgets.map((widget, index) => {
            const desktopEnv = widget.environments.find(
              (env) => env.type === "desktop"
            );
            const mobileEnv = widget.environments.find(
              (env) => env.type === "mobile"
            );

            const dataGrid = {
              x: 0,
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
              <div
                key={widget.id}
                data-grid={dataGrid}
                className="w-full flex flex-col items-center
        border-2 rounded-md border-grey-800 h-full relative p-4"
              >
                {editable && (
                  <MoveIcon className="react-grid-dragHandleExample absolute top-2 right-2" />
                )}
                <ProfileWidgetType
                  key={widget.id}
                  widgetType={widget.type}
                  data={widget.data}
                />
              </div>
            );
          })}
        </ReactGridLayout>
      </div>
    </main>
  );
}
