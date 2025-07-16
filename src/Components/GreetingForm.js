import React, { useState } from "react";

function GreetingForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid = name.trim().length > 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card p-3">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Enter your name:</label>
        <input
          type="text"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Greet Me
        </button>
      </form>

      {submitted && (
        <div className={`alert mt-3 ${isValid ? "alert-success" : "alert-danger"}`}>
          {isValid ? `Hello, ${name} 👋` : "Name must be at least 4 characters long."}
        </div>
      )}
    </div>
  );
}

export default GreetingForm;
