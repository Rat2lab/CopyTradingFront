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
import { getCookie } from "@/lib/utils";

export default function ModalApiToken() {
    const { setUserLogged, loggedUser } = useUserContext();
  const [apiExchangeToken, setApiExchangeToken] = useState<string | undefined>();

  async function handleEditApiToken() {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      const response = await patchUser(accessToken, loggedUser?.id, {
        apiExchangeToken: apiExchangeToken,
      });
      if (!response.ok) {
        // update the session
        setUserLogged({
          id: loggedUser?.id ? loggedUser.id : "",
          email: loggedUser?.email ? loggedUser.email : "",
          apiExchangeToken: apiExchangeToken
        });
      }
    }
  }
  return (
    <Dialog
      open={
        !!(loggedUser && loggedUser.nickName && !loggedUser.apiExchangeToken)
      }
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Link to your favorite exchange</DialogTitle>
          <DialogDescription>Connect with Bit2Me</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="flex gap-2">
            <input
              placeholder="FpCD1srjBT0flxgf..."
              onChange={(e) => setApiExchangeToken(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleEditApiToken()}
            type="submit"
            size="sm"
            className="px-3 bg-white text-black md:bg-black md:text-white text-lg"
          >
            Done
          </Button>
        </div>
        <span>
          Enter your API KEY.
          <ul>
            <li>1. Login in your Bit2Me account.</li>
            <li>2. Create an ONLY READ API KEY. </li>
            <li>3. Copy and paste here.</li>
            <li>
              <br />
              ⚠️ Never share an API key, if you suspect that an API key was
              compromised revoke it immediately.
            </li>
          </ul>
        </span>
      </DialogContent>
    </Dialog>
  );
}
