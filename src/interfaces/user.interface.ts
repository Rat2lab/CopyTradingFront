
export interface Timestamp {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface User {
  id: string;
  nickName?: string;
  email: string;
  apiExchangeToken?: string;
  timestampable?: {
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
  };
}
export interface Profile {
  id: string;
  userId: string;
  path: string;
  timestamp: Timestamp;
  widgets: Widget[];
}

export type UserContextType = {
  loggedUser?: User;
  actualProfile?: Profile;
  setUserLogged: (newUser: User) => void;
  setActualProfile: (newUser: Profile) => void;
};

export interface Widget {
  id: string;
  type: WidgetType;
  environments: WidgetEnvironment[];
  profileId: string;
  position: number;
  data: WidgetData;
  timestamp: Timestamp;
}
export interface WidgetType {
  id: string;
  type: WidgetTypeType;
  defaultData: any;
  timestamp: Timestamp;
}
export interface WidgetEnvironment {
  id: string;
  widgetId: string;
  type: WidgetEnvironmentType;
  size: any;
  timestamp: Timestamp;
}


export interface WidgetData {
  [WidgetTypeType.TEXT]: string;
  [WidgetTypeType.IMAGE]: WidgetTypeImage;
  // [WidgetTypeType.BAR_CHART]: Widget...;
  // [WidgetTypeType.GIF]: WidgetGifData;
}


export interface WidgetTypeImage {
  alt: string;
  url: string;
}

export enum WidgetEnvironmentType {
  MOBILE = "mobile",
  DESKTOP = "desktop",
}

export enum WidgetTypeType {
  TEXT = "text",
  LINK = "link",
  BAR_CHART = "bar_chart",
  LINE_CHART = "line_chart",
  PIE_CHART = "pie_chart",
  RADAR_CHART = "radar_chart",
  IMAGE = "image",
  VIDEO = "video",
  GIF = "gif",
}
