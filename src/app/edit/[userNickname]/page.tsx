"use client";

import { useUserContext } from "@/app/hooks/useUser";
import { Loading } from "@/components/Loading";
import { ProfileView } from "@/components/ProfileView";
import { SideBar } from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Profile } from "@/interfaces/user.interface";
import { getProfileByNickname } from "@/pages/api/auth/user.api";
import { PlusIcon, UploadIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { userNickname: string } }) {
  const { setUserLogged, loggedUser, actualProfile, setActualProfile } =
    useUserContext();

  const [loading, setLoading] = useState<boolean>(true);
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize user info

    if (!actualProfile && params.userNickname) {
      getProfileByNickname(params.userNickname)
        .then((profile: Profile) => {
          setActualProfile(profile);
          setLoading(false);
          // checkProfileEditable();
        })
        .catch((error) => {
          setLoading(false);
          // console.error("Error loading profile", error);
          // setError(error);
          const fakeProfile = {
            id: "918e48bc-442f-4d54-af89-65fa2da51390",
            userId: "412aa65b-572d-4b93-adb9-7e7f2101ac05",
            path: "ale",
            widgets: [
              {
                id: "ebb49a8e-3667-4d9f-a952-67b7ad032698",
                type: {
                  id: "eab7a0e7-b920-4b3e-b977-c3e0ae5b69c3",
                  type: "text",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:35:39.000Z",
                    updatedAt: "2025-02-14T13:35:39.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                data: {
                  text: "Hola caracola!",
                },
                environments: [
                  {
                    id: "e215648f-f4e2-4133-a37a-8c502ac57728",
                    widgetId: "ebb49a8e-3667-4d9f-a952-67a7ad032698",
                    type: "desktop",
                    size: {
                      row: 1,
                      column: 3,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:27:55.000Z",
                      updatedAt: "2025-02-28T09:27:55.000Z",
                      deletedAt: null,
                    },
                  },
                  {
                    id: "040924f0-1c14-4d50-ab63-e85897f498a2",
                    widgetId: "ebb49a8e-3667-4d9f-a952-67a7ad032698",
                    type: "mobile",
                    size: {
                      row: 8,
                      column: 2,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:27:58.000Z",
                      updatedAt: "2025-02-28T09:27:58.000Z",
                      deletedAt: null,
                    },
                  },
                ],
                position: 0,
                timestamp: {
                  createdAt: "2025-02-14T13:38:49.000Z",
                  updatedAt: "2025-02-14T13:38:49.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "a677ac3e-b4dd-460a-9f48-c1440e4b72cf",
                type: {
                  id: "545a3e7b-0f9b-4399-a493-a01106d26bbf",
                  type: "image",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:12.000Z",
                    updatedAt: "2025-02-14T13:36:12.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                data: {
                  image: {
                    alt: "Alt text",
                    url: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
                  },
                },
                environments: [
                  {
                    id: "875e420d-385c-4fb6-b920-572cbb3fc796",
                    widgetId: "a677ac3e-b4dd-460a-9f48-c9440e4b72cf",
                    type: "desktop",
                    size: {
                      row: 2,
                      column: 4,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:29:58.000Z",
                      updatedAt: "2025-02-28T09:29:58.000Z",
                      deletedAt: null,
                    },
                  },
                  {
                    id: "627b7117-8f9b-43a2-b660-13662f1c07fa",
                    widgetId: "a677ac3e-b4dd-460a-9f48-c9440e4b72cf",
                    type: "mobile",
                    size: {
                      row: 3,
                      column: 3,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:29:59.000Z",
                      updatedAt: "2025-02-28T09:29:59.000Z",
                      deletedAt: null,
                    },
                  },
                ],
                position: 6,
                timestamp: {
                  createdAt: "2025-02-14T13:38:53.000Z",
                  updatedAt: "2025-02-14T13:38:53.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "a677ac3e-b4dd-460a-9f48-c9440e4b72cf",
                type: {
                  id: "545a3e7b-0f9b-4399-a493-a01106d26bbf",
                  type: "image",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:12.000Z",
                    updatedAt: "2025-02-14T13:36:12.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                data: {
                  image: {
                    alt: "Alt text",
                    url: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
                  },
                },
                environments: [
                  {
                    id: "875e420d-385c-4fb6-b920-572cbb3fc796",
                    widgetId: "a677ac3e-b4dd-460a-9f48-c9440e4b72cf",
                    type: "desktop",
                    size: {
                      row: 3,
                      column: 1,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:29:58.000Z",
                      updatedAt: "2025-02-28T09:29:58.000Z",
                      deletedAt: null,
                    },
                  },
                  {
                    id: "627b7117-8f9b-43a2-b660-13662f1c07fa",
                    widgetId: "a677ac3e-b4dd-460a-9f48-c9440e4b72cf",
                    type: "mobile",
                    size: {
                      row: 3,
                      column: 3,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:29:59.000Z",
                      updatedAt: "2025-02-28T09:29:59.000Z",
                      deletedAt: null,
                    },
                  },
                ],
                position: 6,
                timestamp: {
                  createdAt: "2025-02-14T13:38:53.000Z",
                  updatedAt: "2025-02-14T13:38:53.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "d90f1908-dbc1-4d8a-8554-c89a25f93f48",
                type: {
                  id: "83b03a2b-a7c1-4b6d-9d5c-1db5efaa9576",
                  type: "video",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:13.000Z",
                    updatedAt: "2025-02-14T13:36:13.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                environments: [],
                position: 7,
                timestamp: {
                  createdAt: "2025-02-14T13:38:53.000Z",
                  updatedAt: "2025-02-14T13:38:53.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "ebb49a8e-3667-4d9f-a952-67a7ad032698",
                type: {
                  id: "eab7a0e7-b920-4b3e-b977-c3e0ae5b69c3",
                  type: "text",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:35:39.000Z",
                    updatedAt: "2025-02-14T13:35:39.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                data: {
                  text: "Texto título x1",
                },
                environments: [
                  {
                    id: "e215648f-f4e2-4133-a37a-8c502ac57128",
                    widgetId: "ebb49a8e-3667-4d9f-a952-67a7ad032698",
                    type: "desktop",
                    size: {
                      row: 1,
                      column: 1,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:27:55.000Z",
                      updatedAt: "2025-02-28T09:27:55.000Z",
                      deletedAt: null,
                    },
                  },
                  {
                    id: "040924f0-1c14-4d50-ab63-e85897f498a2",
                    widgetId: "ebb49a8e-3667-4d9f-a952-67a7ad032698",
                    type: "mobile",
                    size: {
                      row: 2,
                      column: 2,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:27:58.000Z",
                      updatedAt: "2025-02-28T09:27:58.000Z",
                      deletedAt: null,
                    },
                  },
                ],
                position: 0,
                timestamp: {
                  createdAt: "2025-02-14T13:38:49.000Z",
                  updatedAt: "2025-02-14T13:38:49.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "ebb49a8e-3667-4d9f-a952-67a7ad032691",
                type: {
                  id: "eab7a0e7-b920-4b3e-b977-c3e0ae5b69c3",
                  type: "text",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:35:39.000Z",
                    updatedAt: "2025-02-14T13:35:39.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                data: {
                  text: "Texto titulo al lado x3",
                },
                environments: [
                  {
                    id: "e215648f-f4e2-4133-a37a-8c502ac57728",
                    widgetId: "ebb49a8e-3667-4d9f-a952-67a7ad032698",
                    type: "desktop",
                    size: {
                      row: 1,
                      column: 3,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:27:55.000Z",
                      updatedAt: "2025-02-28T09:27:55.000Z",
                      deletedAt: null,
                    },
                  },
                  {
                    id: "040924f0-1c14-4d50-ab63-e85897f498a2",
                    widgetId: "ebb49a8e-3667-4d9f-a952-67a7ad032698",
                    type: "mobile",
                    size: {
                      row: 2,
                      column: 2,
                    },
                    timestamp: {
                      createdAt: "2025-02-28T09:27:58.000Z",
                      updatedAt: "2025-02-28T09:27:58.000Z",
                      deletedAt: null,
                    },
                  },
                ],
                position: 0,
                timestamp: {
                  createdAt: "2025-02-14T13:38:49.000Z",
                  updatedAt: "2025-02-14T13:38:49.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "2c98c99e-e4b7-4bed-a9d1-7d0e9cab6478",
                type: {
                  id: "6a90ba25-e2b8-48ef-8c0b-17621a61b4f8",
                  type: "bar_chart",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:11.000Z",
                    updatedAt: "2025-02-14T13:36:11.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                environments: [],
                position: 2,
                timestamp: {
                  createdAt: "2025-02-14T13:38:51.000Z",
                  updatedAt: "2025-02-14T13:38:51.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "65971cad-5734-4d6d-aa31-330bb9f48019",
                type: {
                  id: "59297ae9-0c0c-40c4-9a5d-8ef111334353",
                  type: "link",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:10.000Z",
                    updatedAt: "2025-02-14T13:36:10.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                environments: [],
                position: 1,
                timestamp: {
                  createdAt: "2025-02-14T13:38:50.000Z",
                  updatedAt: "2025-02-14T13:38:50.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "a9ba15be-7e4c-43fd-a817-57f737dfd8fa",
                type: {
                  id: "261f8e06-06aa-494b-b945-dbc76bb677b2",
                  type: "pie_chart",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:12.000Z",
                    updatedAt: "2025-02-14T13:36:12.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                environments: [],
                position: 4,
                timestamp: {
                  createdAt: "2025-02-14T13:38:52.000Z",
                  updatedAt: "2025-02-14T13:38:52.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "989cea5e-1efb-4b37-bdd6-bb6f3d4adc78",
                type: {
                  id: "cea3de62-1101-4567-923e-38446c0a0b1a",
                  type: "radar_chart",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:12.000Z",
                    updatedAt: "2025-02-14T13:36:12.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                environments: [],
                position: 5,
                timestamp: {
                  createdAt: "2025-02-14T13:38:52.000Z",
                  updatedAt: "2025-02-14T13:38:52.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "037fbb31-c9eb-4111-a4b7-ed1eede01e3d",
                type: {
                  id: "bbb4c569-eb5f-4d88-9ede-316513f402cd",
                  type: "gif",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:13.000Z",
                    updatedAt: "2025-02-14T13:36:13.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                environments: [],
                position: 8,
                timestamp: {
                  createdAt: "2025-02-14T13:38:54.000Z",
                  updatedAt: "2025-02-14T13:38:54.000Z",
                  deletedAt: null,
                },
              },
              {
                id: "15a52622-076f-4e1a-bf1d-b70afcfb66b9",
                type: {
                  id: "443a1a9b-daa8-486f-a6e1-59802f7a5d17",
                  type: "line_chart",
                  defaultData: {},
                  timestamp: {
                    createdAt: "2025-02-14T13:36:11.000Z",
                    updatedAt: "2025-02-14T13:36:11.000Z",
                    deletedAt: null,
                  },
                },
                profileId: "918e48bc-442f-4d54-af89-65fa2da51390",
                environments: [],
                position: 3,
                timestamp: {
                  createdAt: "2025-02-14T13:38:51.000Z",
                  updatedAt: "2025-02-14T13:38:51.000Z",
                  deletedAt: null,
                },
              },
            ],
            timestamp: {
              createdAt: "2025-02-14T13:35:08.000Z",
              updatedAt: "2025-02-14T13:35:08.000Z",
              deletedAt: null,
            },
          };
          setActualProfile(fakeProfile);
        });
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="h-full w-full flex justify-center content-center">
        {"Error loading profile"}
      </div>
    );
  }

  return (
    <div
      className={`max-h-screen grid grid-cols-12 items-start 
    justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]
    ${mobileMode ? "bg-slate-400" : ""}
    `}
    >
      <div className="flex flex-col min-w-full gap-6 items-center col-span-3 col-start-2 justify-start pt-20 h-full">
        <SideBar mobileMode={mobileMode} nickName={params.userNickname} />
        <div className="flex flex-col gap-2 pt-5">
          <div className="flex mb-2 items-center gap-2">
            <Switch
              checked={mobileMode}
              onCheckedChange={(
                checked: boolean | ((prevState: boolean) => boolean)
              ) => {
                setMobileMode(checked);
              }}
            />
            <span>Mobile mode</span>
          </div>
          <Button variant="default">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add chart
          </Button>
          <Button variant="default">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add text
          </Button>
          <Button variant="default">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload image
          </Button>
          {/* <Button variant="secondary">
            <PlusIcon className="mr-2 h-4 w-4" />
            New section
          </Button> */}
          <Button
            className="mt-20 bg-white text-black md:bg-black md:text-white text-lg"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </Button>{" "}
        </div>
      </div>
      {/* TODO actual profile is always userContext? send as param?  */}
      <ProfileView mobileMode={mobileMode} profile={actualProfile} />
    </div>
  );
}
