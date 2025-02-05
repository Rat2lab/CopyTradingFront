export interface User {
  id: string;
  nickName: string | null;
  email: string;
  apiExchangeToken?: string;
  timestampable: {
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
  };
}
export interface Profile {
  id: string;
  nickName: string | null;
}

export type UserContextType = {
  loggedUser: User | null;
  actualProfile: Profile | null;
  setUserLogged: (newUser: User) => void;
  setActualProfile: (newUser: Profile) => void;
};
