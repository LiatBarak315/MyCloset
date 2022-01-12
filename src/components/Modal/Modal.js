import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { ReactComponent as CloseIcon } from '../../assets/times-circle-solid.svg';

const Modal = ({ children, isOpen, closeModal }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-container">
            <CloseIcon
              onClick={closeModal}
              className="close-btn"
              width={25}
              height={25}
            />
            <div className="modal-children">{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
