import React from "react";

const ErrorBlockOverlay = ({ message, onConfirm }) => {
  return (
    <div className="error-block-overlay">
      <div className="error-message">
        <p>{message}</p>
        <button onClick={onConfirm}>OK</button>
      </div>
    </div>
  );
};

export default ErrorBlockOverlay;
