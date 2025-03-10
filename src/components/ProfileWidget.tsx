import { Widget } from "@/interfaces/user.interface";
import { ProfileWidgetType } from "./ProfileWidgetType";
import { useMediaQuery } from "react-responsive";

export function ProfileWidget({ widget }: { widget: Widget }) {
  const desktopEnv = widget.environments.find((env) => env.type === "desktop");
  const mobileEnv = widget.environments.find((env) => env.type === "mobile");

  // if (desktopEnv) console.log("desktop env" + widget.type.type, desktopEnv);

  // if (mobileEnv) console.log("mobile env: ", mobileEnv);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    desktopEnv &&
    mobileEnv && (
      <div
        className={`w-full flex flex-col items-center
        border-4 border-double border-green-800 max-h-${mobileEnv.size.row} md:max-h-${desktopEnv.size.row} h-${mobileEnv.size.row} md:h-${desktopEnv.size.row}`}
        style={{
          gridColumn: `span ${
            isDesktopOrLaptop ? desktopEnv.size.column : mobileEnv.size.column
          } / span ${
            isDesktopOrLaptop ? desktopEnv.size.column : mobileEnv.size.column
          }`,
        }}
      >
        <ProfileWidgetType widgetType={widget.type} data={widget.data} />
      </div>
    )
  );
}
