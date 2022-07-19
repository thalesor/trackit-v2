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
      {message && <Message type={message.type || 'error'} message={message.message || ''} confirmHandler={message.confirmHandler} cancelHandler={message.cancelHandler} closeHandler={message.closeHandler || handleClose}/>}
    </MessageContext.Provider>
  );
}