import { Widget } from "@/interfaces/user.interface";
import { ProfileWidgetType } from "./ProfileWidgetType";

export function ProfileWidget({ widget }: { widget: Widget }) {
  //TODO en funcion de los widget.enviroment dibujar los widgets de tamaño distinto para mobile o desktp
  if (widget.environments[0]?.type === "desktop")
    console.log("desktop size: ", widget.environments[0]?.size);
  return (
    (widget.environments[0]?.type === "desktop" ||
      widget.environments[0]?.size) && (
      <div
        className={`h-full min-h-12 w-full flex flex-col items-center col-span-${widget.environments[1]?.size.column} md:col-span-${widget.environments[0]?.size.column} border-4 border-double border-green-800`}
      >
        <ProfileWidgetType widgetType={widget.type} data={widget.data} />
      </div>
    )
  );
}
