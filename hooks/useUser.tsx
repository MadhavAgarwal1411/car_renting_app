import { AuthContextProps, User } from "@/types/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext);
