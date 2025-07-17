import React, { useState } from "react";

const Create = ({ onCreate }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onCreate({ name });
    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-3 p-3 border rounded shadow-sm bg-light"
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Create;
