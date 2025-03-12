"use client";

import ModalApiToken from "@/components/modals/modalApiToken";
import ModalNickname from "@/components/modals/modalNickname";
import { redirect } from "next/navigation";
import { useUserContext } from "../hooks/useUser";

export default function Home({ params }: { params: { userNick: string } }) {
  //TODO use acesstoken from userContext
  // const { data: session, status } = useSession();
  const { accessToken, loggedUser } = useUserContext();

  console.log("render onboarding page, loggedUser", loggedUser);

  if (accessToken) {
    // console.log("session", session);
    if (loggedUser?.nickName && loggedUser.apiExchangeToken)
    redirect("/edit/" + loggedUser.nickName);
  }

  return (
    <div className="max-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full overflow-auto flex gap-8 row-start-2 justify-between">
        <ModalNickname />
        <ModalApiToken />
      </main>
    </div>
  );
}
