import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop: React.FC<{ closeModal: () => void }> = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay: React.FC = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal: React.FC<{ onClickBackdrop: () => void }> = (props) => {
  const portalElement = document.getElementById("overlays")!;

  return (
    <>
      {createPortal(
        <Backdrop closeModal={props.onClickBackdrop} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
