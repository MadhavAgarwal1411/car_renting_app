import { AuthContextProps, User } from "@/types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  setUser: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const email = await AsyncStorage.getItem("email");
        const name = await AsyncStorage.getItem("name");
        const phone = await AsyncStorage.getItem("phone");
        const id = await AsyncStorage.getItem("id");
        const type = await AsyncStorage.getItem("__typename");

        setUser({
          id: id,
          name: name,
          email: email,
          phone: phone,
          __typename: type,
        });
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
  const useUser = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useUser must be used within an AuthProvider");
    }
    return context;
  };
export { AuthProvider, useUser };
