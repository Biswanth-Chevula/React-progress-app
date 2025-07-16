import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-3">
      <h5 className="mb-3">
         Count: <strong>{count}</strong>
      </h5>
      <div className="d-flex gap-2 flex-wrap">
        <button
          className="btn btn-outline-danger"
          onClick={() => setCount(count - 1)}
        >
          -
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
          +
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCount(count * 2)}
        >
          Double
        </button>
      </div>
    </div>
  );
}

export default Counter;
