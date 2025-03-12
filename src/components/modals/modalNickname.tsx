"use client";

import { useUserContext } from "@/app/hooks/useUser";
import { Button } from "@/components/ui/button";
import { patchUser } from "@/pages/api/auth/user.api";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function ModalNickname() {
  // const { data: session, update } = useSession();
  const { accessToken, setUserLogged, loggedUser } = useUserContext();

  const [nick, setNick] = useState<string | undefined>();

  async function handleEditNick() {
    if (accessToken) {
      const response = await patchUser(accessToken, loggedUser?.id, {
        nickName: nick,
      });
      if (!response.ok) {
        // update the session
        setUserLogged({
          id: loggedUser?.id ? loggedUser.id : "",
          email: loggedUser?.email ? loggedUser.email : "",
          nickName: nick,
        });
      }
    }
  }

  return (
    <Dialog open={(loggedUser && !loggedUser.nickName) ?? false}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Claim your unique page</DialogTitle>
          <DialogDescription>
            {`Your unique page will be cryptofolio.me/@${nick}`}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <span>@</span>
          <div className="grid flex-1 gap-2">
            <input
              placeholder="alex"
              onChange={(e) => setNick(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleEditNick()}
            type="submit"
            size="sm"
            className="px-3 bg-white text-black md:bg-black md:text-white text-lg"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
