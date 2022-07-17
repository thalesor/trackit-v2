import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

export interface IMessageProps {
    closeHandler?: () => void,
    cancelHandler?: () => void,
    confirmHandler?: () => void
}

export default function Message({closeHandler, cancelHandler, confirmHandler}: IMessageProps) {
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
            Ocorreu um erro!
          </Text>
        </Modal.Header>
        <Modal.Body>
          Usuário e/ou senha estão inválidos
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="error" onClick={closeHandler}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
  );
}