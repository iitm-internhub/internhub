"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextValue {
  userId: string | undefined;
}
export const AuthContext = createContext<AuthContextValue | undefined>({
  userId: "",
});

interface AuthProviderInterface {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderInterface> = ({ children }) => {
  const [userId, setUserId] = useState<string | undefined>();

  useEffect(() => {
    const getAuthTokenFromLocalStorage = () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        setUserId(token);
      }
    };

    getAuthTokenFromLocalStorage();
  }, [userId]);

  return (
    <AuthContext.Provider value={{ userId }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }

  return authContextValue;
};
