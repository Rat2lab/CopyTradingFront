"use client";
import { Profile, User, UserContextType } from "@/interfaces/user.interface";
import { createContext, useState } from "react";
export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentProfile, setCurrentProfile] = useState<Profile | undefined>();
  const [loggedUser, setLoggedUser] = useState<User | undefined>();
  const [accessToken, setAccessToken] = useState<string | undefined>();

  const setUserLogged = (user: User) => {
    setLoggedUser(user);
  };

  const setActualProfile = (profile: Profile) => {
    setCurrentProfile(profile);
  };
  const setSessionAccessToken = (token: string | undefined) => {
    setAccessToken(token);
  };

  return (
    <UserContext.Provider
      value={{
        actualProfile: currentProfile,
        loggedUser: loggedUser,
        setActualProfile,
        setUserLogged,
        accessToken: accessToken,
        setSessionAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
export default UserProvider;
