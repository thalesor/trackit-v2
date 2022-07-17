import { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";

export default function useMessage() {
  const messageContext = useContext(MessageContext);
  if (!messageContext) {
    throw new Error("useMessage must be used inside a MessageContext Provider");
  }

  return messageContext;
}