import { Widget } from "@/interfaces/user.interface";
import { MoveIcon } from "@radix-ui/react-icons";
import { ProfileWidgetType } from "./ProfileWidgetType";

export function ProfileWidget({
  widget,
}: {
  widget: Widget;
}) {
  return (
    <div
      className={`w-full flex flex-col items-center
        border-2 rounded-md border-grey-800 h-full relative p-4`}
    >
      <MoveIcon className="react-grid-dragHandleExample absolute top-2 right-2" />
      <ProfileWidgetType widgetType={widget.type} data={widget.data} />
    </div>
  );
}
