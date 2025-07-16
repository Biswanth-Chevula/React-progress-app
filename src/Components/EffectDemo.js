import React, { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]);

  return (
    <div className="card p-3">
      <h5 className="mb-3">
         Count with useEffect: <strong>{count}</strong>
      </h5>
      <div className="d-flex gap-2 flex-wrap">
        <button
          className="btn btn-outline-danger"
          onClick={() => setCount(count - 1)}
        >
          Subtract
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default EffectDemo;
