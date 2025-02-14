import { Widget } from "@/interfaces/user.interface";
import { ProfileWidgetType } from "./ProfileWidgetType";

export function ProfileWidget({ widget }: { widget: Widget }) {
    //TODO en funcion de los widget.enviroment dibujar los widgets de tamaño distinto para mobile o desktp
  return (
    <div className="h-full min-h-12 w-full flex flex-col items-center col-span-2 bg-green-600">
      <ProfileWidgetType widgetType={widget.type} data={widget.data}/>
    </div>
  );
}
