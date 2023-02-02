import React, { useState } from "react";

const Modal = ({title, text, image, alt}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={image}
        alt={alt}
        onClick={() => setIsOpen(true)}
        className="image-button"
      />
      {isOpen && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title"> {title} </h2>
              <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <div className="modal-body">
              <p> {text} </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
