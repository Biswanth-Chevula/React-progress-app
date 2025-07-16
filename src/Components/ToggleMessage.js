import React, { useState } from "react";

function ToggleMessage() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card p-3 ">
      <button
        className={`btn ${visible ? "btn-danger" : "btn-success"} mb-2 `}
        onClick={() => setVisible(!visible)}
      >
        {visible ? "Hide" : "Show"} Message
      </button>

      {visible && (
        <div className="alert alert-info mb-0">
          This is a toggled message ✨
        </div>
      )}
    </div>
  );
}

export default ToggleMessage;
