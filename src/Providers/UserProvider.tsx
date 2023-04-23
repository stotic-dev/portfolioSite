import { Children, FC, ReactNode, createContext, useState } from "react";

export interface userInfo{
    email: string;
}

interface Props{
    children: ReactNode
}

interface ContextType{
    userInfo: userInfo | null,
    setInfo: React.Dispatch<userInfo | null>
}

export const UserContext = createContext({} as ContextType);

export const UserProvider = ({ children }: Props) => {
    const [useInfo, setInfo] = useState<userInfo | null>(null);
    const value: ContextType = {
        userInfo: useInfo,
        setInfo: setInfo,
    }

  return (
    <UserContext.Provider value={value}>
        { children }
    </UserContext.Provider>
  )
}