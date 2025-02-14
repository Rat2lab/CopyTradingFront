import {
  WidgetType,
  WidgetTypeType
} from "@/interfaces/user.interface";
import { MyBarChart } from "./MyBarChart";
import { MyPieChart } from "./MyPieChart";
import { MyRadarChart } from "./MyRadarChart";

export function ProfileWidgetType({ widgetType }: { widgetType: WidgetType }) {
  switch (widgetType.type) {
    case WidgetTypeType.TEXT:
      return (
        <div className="h-full min-h-12 w-full flex flex-col items-center col-span-2 bg-green-600">
          {"HEY TEXT"}
        </div>
      );
    case WidgetTypeType.IMAGE:
      return (
        <div className="h-full min-h-12 w-full flex flex-col items-center col-span-2 bg-green-600">
          <img
            src={
              "https://lh6.googleusercontent.com/-47_HcdolAr0/AAAAAAAAAAI/AAAAAAAAB30/lD6xAXOWlu4/photo.jpg"
            }
          />
        </div>
      );
    case WidgetTypeType.BAR_CHART:
      <MyBarChart />;
    case WidgetTypeType.PIE_CHART:
      <MyPieChart />;
    case WidgetTypeType.RADAR_CHART:
      <MyRadarChart />;

    default:
      return (
        <div className="h-full min-h-12 w-full flex flex-col items-center col-span-2 bg-green-600">
          {"No element"}
        </div>
      );
  }
}
