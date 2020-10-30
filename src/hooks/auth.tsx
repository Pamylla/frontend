import React, { createContext, useCallback, useState, useContext } from "react";

import api from "../services/api";

interface Company {
  name: string;
  email: string;
  avatar: string;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  company: Company;
  token: string;
}

interface AuthContextData {
  company: Company;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: Company): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Kiwi:token");
    const company = localStorage.getItem("@Kiwi:company");

    if (token && company) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, company: JSON.parse(company) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("session", {
      email,
      password,
    });

    const { company, token } = response.data;

    localStorage.setItem("@Kiwi:token", token);
    localStorage.setItem("@Kiwi:company", JSON.stringify(company));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({
      company,
      token,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Kiwi:token");
    localStorage.removeItem("@Kiwi:company");

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (company: Company) => {
      localStorage.setItem("@Kiwi:company", JSON.stringify(company));

      setData({
        token: data.token,
        company,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ company: data.company, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
