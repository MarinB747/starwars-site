import React from "react";
import { Modal, Button } from "react-bootstrap";
export default function ModalPop(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      variant="dark"
    >
      <Modal.Body>
        <h4>{props.tittle}</h4>
        <p>{props.txt}</p>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Body>
    </Modal>
  );
}
