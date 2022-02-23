import * as React from "react";

export interface IFunctionalComponentPageProps {
  initState?: user;
  children: React.ReactNode;
}
export type user = {
  name: string;
  email: string;
};
type userContextType = {
  user: user;
  handleChangeName: (name: string) => void;
  handleChangeEmail: (email: string) => void;
};
const UserContext = React.createContext<userContextType | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside of UserProvider component");
  }
  return context;
};

export default function UserProvider({
  initState,
  children,
}: IFunctionalComponentPageProps) {
  const [user, setUser] = React.useState<user>(initState || ({} as user));

  const handleChangeName = (name: string) => {
    setUser({ ...user, name: name });
  };
  const handleChangeEmail = (email: string) => {
    setUser({ ...user, email: email });
  };
  return (
    <UserContext.Provider value={{ user, handleChangeName, handleChangeEmail }}>
      {children}
    </UserContext.Provider>
  );
}
