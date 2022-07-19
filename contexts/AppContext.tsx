import { createContext, useState } from "react";

interface IAppContext {
    appLoaded: boolean;
    setAppLoaded: (appState: boolean) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function AppProvider({ children }: Props) {
  const [appLoaded, setAppLoaded] = useState(false);

  return (
    <AppContext.Provider value={{appLoaded, setAppLoaded}}>
      {children}
    </AppContext.Provider>
  );
}