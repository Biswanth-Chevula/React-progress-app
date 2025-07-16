import React from "react";

function Welcome({ name, age }) {
  return (
    <div>
      <h5 className="mb-0 px-2 py-3">
        Welcome, <strong>{name}</strong>! Your age is <strong>{age}</strong>.
      </h5>
    </div>
  );
}

export default Welcome;
