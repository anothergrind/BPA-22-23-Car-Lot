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
              <h2>{props.title}</h2>
              <button onClick={toggleModal}>Close</button>
            </div>
            <div className="modal-body">
              <div className="modal-left">
                <img
                  src={props.image}
                  alt="Modal Image"
                  className="img"
                />
              </div>
              <div className="modal-right">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
