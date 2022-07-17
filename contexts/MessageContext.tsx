import { createContext, useState } from "react";
import Message, { IMessageProps } from "components/Message";

interface IMessageContext {
    message: IMessageProps | null;
    setMessage: (newMessage: IMessageProps | null) => void;
}

export const MessageContext = createContext<IMessageContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function MessageProvider({ children }: Props) {
  const [message, setMessage] = useState<IMessageProps | null>(null);

  function handleClose() {
    setMessage(null);
  }

  return (
    <MessageContext.Provider value={{message, setMessage}}>
      {children}
      {message && <Message confirmHandler={message.confirmHandler} cancelHandler={message.cancelHandler} closeHandler={handleClose}/>}
    </MessageContext.Provider>
  );
}