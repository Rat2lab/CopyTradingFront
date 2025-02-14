"use client";
import { Profile, User, UserContextType } from "@/interfaces/user.interface";
import { createContext, useState } from "react";
export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentProfile, setCurrentProfile] = useState<Profile | undefined>();
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const setUserLogged = (user: User) => {
    setLoggedUser(user);
  };

  const setActualProfile = (profile: Profile) => {
    setCurrentProfile(profile);
  };

  return (
    <UserContext.Provider
      value={{
        actualProfile: currentProfile,
        loggedUser: undefined,
        setActualProfile,
        setUserLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
export default UserProvider;
