import React, { useState } from "react";
import "../styles/Modal.css";


export default function Modal(props) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <h1>{props.title}</h1>
              <button className="modal-close" onClick={toggleModal}>Close</button>
            </div>
            <div className="modal-body">
              <div className="modal-left">
                <img
                  src={props.image}
                  alt="Modal Image"
                  className="modal-img"
                  id={props.image_id}
                />
              </div>
              <div className="modal-right">
                <p className="modal-text">{props.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
