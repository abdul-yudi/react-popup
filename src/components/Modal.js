import React, { useRef } from "react";
import ReactDom from "react-dom";

export const Modal = ({ setShowModal, contentModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal-header">
          Modal Header
          <button className="button close" onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className="modal-body">
          {contentModal}
        </div>
        <div className="modal-footer">
          <button className="button" onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
