import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useApp() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("useApp must be used inside a AppContext Provider");
  }

  return appContext;
}