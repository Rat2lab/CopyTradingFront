import { Widget } from "@/interfaces/user.interface";
import { ProfileWidgetType } from "./ProfileWidgetType";

export function ProfileWidget({ widget }: { widget: Widget }) {
  return (
    <div className="h-full min-h-12 w-full flex flex-col items-center col-span-2 bg-green-600">
      <ProfileWidgetType widgetType={widget.type} />
    </div>
  );
}
