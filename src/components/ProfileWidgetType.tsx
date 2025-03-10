import {
  WidgetData,
  WidgetType,
  WidgetTypeType,
} from "@/interfaces/user.interface";
import { MyBarChart } from "./MyBarChart";
import { MyPieChart } from "./MyPieChart";
import { MyRadarChart } from "./MyRadarChart";

// TODO apply bg-img
//  <div className={`h-full w-full flex flex-col items-center bg-[url("${ data.image.url}")]`}>

export function ProfileWidgetType({
  widgetType,
  data,
}: {
  widgetType: WidgetType;
  data: WidgetData;
}) {
  switch (widgetType.type) {
    case WidgetTypeType.TEXT:
      return (
        data?.text && (
          <div className="h-full w-full flex flex-col items-center">
            {data.text}
          </div>
        )
      );
    case WidgetTypeType.IMAGE:
      return (
        data?.image?.url && (
          <div className={`h-full w-full flex flex-col items-center`}>
            <img src={data.image.url} alt={data.image.alt} />
          </div>
        )
      );
    case WidgetTypeType.BAR_CHART:
      <MyBarChart />;
    case WidgetTypeType.PIE_CHART:
      <MyPieChart />;
    case WidgetTypeType.RADAR_CHART:
      <MyRadarChart />;

    default:
      return (
        <div className="h-full min-h-12 w-full flex flex-col items-center bg-green-600">
          {"No element"}
        </div>
      );
  }
}
