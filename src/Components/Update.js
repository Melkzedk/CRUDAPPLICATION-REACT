import React, { useState } from "react";

const Update = ({ item, onUpdate }) => {
  const [name, setName] = useState(item.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...item, name });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-3 border rounded shadow-sm bg-light"
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Update
        </button>
      </div>
    </form>
  );
};

export default Update;
