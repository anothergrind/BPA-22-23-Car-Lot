import React, { useState } from "react";
import "../styles/Modal.css";

  export default function Modal() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleModal = () => setIsOpen(!isOpen);
    return (
    <>
      {isOpen && (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <h2>Modal Title</h2>
              <button onClick={toggleModal}>Close</button>
            </div>
            <div className="modal-body">
              <div className="modal-left">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Modal Image"
                  className="img"
                />
              </div>
              <div className="modal-right">
                <p>Modal Content Here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
