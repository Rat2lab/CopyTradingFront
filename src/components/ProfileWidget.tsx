import { Widget } from "@/interfaces/user.interface";
import { ProfileWidgetType } from "./ProfileWidgetType";
import { useMediaQuery } from "react-responsive";
import { MoveIcon } from "@radix-ui/react-icons";

export function ProfileWidget({ widget, index }: { widget: Widget, index: number }) {
  const desktopEnv = widget.environments.find((env) => env.type === "desktop");
  const mobileEnv = widget.environments.find((env) => env.type === "mobile");

  // if (desktopEnv) console.log("desktop env" + widget.type.type, desktopEnv);

  // if (mobileEnv) console.log("mobile env: ", mobileEnv);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const dataGrid = {
    x: 0,
    // TODO send size of the previous element? 
    y: index,
    w: isDesktopOrLaptop ? desktopEnv?.size.column : mobileEnv?.size.column,
    h: isDesktopOrLaptop ? desktopEnv?.size.row : mobileEnv?.size.row,
  };

  return (
    desktopEnv &&
    mobileEnv && (
      <div
        className={`w-full flex flex-col items-center
        border-4 border-double border-green-800 
        `}
        // md:max-h-${mobileEnv.size.row} md:max-h-${desktopEnv.size.row} h-${mobileEnv.size.row} md:h-${desktopEnv.size.row}
        // style={{
        //   gridColumn: `span ${
        //     isDesktopOrLaptop ? desktopEnv.size.column : mobileEnv.size.column
        //   } / span ${
        //     isDesktopOrLaptop ? desktopEnv.size.column : mobileEnv.size.column
        //   }`,
        // }}
      >
        <MoveIcon className="react-grid-dragHandleExample" />
        <ProfileWidgetType widgetType={widget.type} data={widget.data} />
      </div>
    )
  );
}
