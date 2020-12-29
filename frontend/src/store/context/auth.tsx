import React, { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../../services/auth";
import createHistory from "history/createBrowserHistory";

interface User {
  name: string;
  email: string;
}
interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const history = createHistory();

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem("@ToDo:user");
      const storagedToken = await localStorage.getItem("@ToDo:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn() {
    setLoading(true);

    const response = await auth.signIn();

    setUser(response.user);

    localStorage.setItem("@ToDo:user", JSON.stringify(response.user));
    localStorage.setItem("@ToDo:token", response.token);

    setLoading(false);
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);
    history.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
