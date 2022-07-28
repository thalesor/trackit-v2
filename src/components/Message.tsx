import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";

export interface IMessageProps {
    type: messageTypes;
    message: string;
    closeHandler?: () => void;
    cancelHandler?: () => void;
    confirmHandler?: () => void;
}

type messageTypes = 'success' | 'error' | 'warning' | 'confirm';

function getTitle(type: messageTypes)
{
  if(type === 'error')
    return "Ocorreu um erro!";
  else if(type === 'success')
    return "Tudo certo!";
  
    return "Aviso!";
}

export default function Message({type, message, closeHandler, cancelHandler, confirmHandler}: IMessageProps) {
  return (
      <Modal
        closeButton
        blur
        open={true}
        onClose={closeHandler}
        aria-labelledby="modal-title"
      >
        <Modal.Header>
          <Text b size={18} id="modal-title">
            {getTitle(type)}
          </Text>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
        <Modal.Footer>
          {
            type === 'confirm' ?
            <Grid.Container css={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <Button auto color={type} onClick={() => {
                closeHandler && closeHandler();
                confirmHandler && confirmHandler();
              }}>
                Sim, tenho certeza
              </Button>
              <Button auto color={'error'} onClick={closeHandler}>
                Não, por favor cancele
              </Button>
            </Grid.Container>
            :
            <Button auto color={type} onClick={closeHandler}>
            OK
          </Button>
          }
        </Modal.Footer>
      </Modal>
  );
}