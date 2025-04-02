import {
  WidgetData,
  WidgetType,
  WidgetTypeType,
} from "@/interfaces/user.interface";
import { MyBarChart } from "./MyBarChart";
import { MyPieChart } from "./MyPieChart";
import { MyRadarChart } from "./MyRadarChart";
import { Textfit } from "react-textfit";

export function ProfileWidgetType({
  widgetType,
  data,
}: {
  widgetType: WidgetType;
  data: WidgetData;
}) {
  if (!data)
    return (
      <div className="h-full min-h-12 w-full flex flex-col items-center">
        {"Unable to load element"}
      </div>
    );
  else {
    switch (widgetType.type) {
      case WidgetTypeType.TEXT:
        return (
          data?.text && (
            <div className="h-full w-full flex flex-col items-center">
              {/* TODO text fit not fitea  */}
              <Textfit mode="single" forceSingleModeWidth={false}>
                {data.text}
              </Textfit>
            </div>
          )
        );
      case WidgetTypeType.IMAGE:
        return (
          data?.image?.url && (
            <div className={`h-full w-full flex flex-col items-center`}>
              <img
                src={data.image.url}
                alt={data.image.alt}
                style={{ height: "inherit" }}
              />
            </div>
          )
        );
      case WidgetTypeType.BAR_CHART:
        return <MyBarChart data={data} />;
      case WidgetTypeType.PIE_CHART:
        return <MyPieChart data={data} />;
      case WidgetTypeType.RADAR_CHART:
        return <MyRadarChart data={data}/>;

      default:
        return (
          <div className="h-full min-h-12 w-full flex flex-col items-center">
            {"Unable to load element"}
          </div>
        );
    }
  }
}
