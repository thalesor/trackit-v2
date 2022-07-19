import { createContext, useState } from "react";

interface IAuthContext {
  signIn: (authData: IAuthData) => void;
  signOut: () => void;
  authData: IAuthData | null;
}

interface IAuthData {
    id: number;
    image: string;
    name: string;
    token: string;
}

export const AuthContext = createContext<IAuthContext | null>(null);

interface Props {
  children: React.ReactNode;
}

const LOCAL_STORAGE_KEY = "trackitv2-token";
let persistedToken: any = null;
if (typeof window !== 'undefined') {
  persistedToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string);
}


export function AuthProvider({ children }: Props) {
  const [authData, setAuthData] = useState<IAuthData | null>(persistedToken);

  function signIn(authData: IAuthData) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authData));
    setAuthData(authData);
  }

  function signOut() {
    setAuthData(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}