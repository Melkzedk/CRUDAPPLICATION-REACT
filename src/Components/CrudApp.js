import React, { useState } from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";

const CrudApp = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  // CREATE
  const handleCreate = (item) => {
    setData([...data, { id: Date.now(), ...item }]);
  };

  // DELETE
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // UPDATE
  const handleUpdate = (updatedItem) => {
    setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditItem(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React CRUD Application</h1>
      <Create onCreate={handleCreate} />
      <Read data={data} onDelete={handleDelete} onEdit={setEditItem} />
      {editItem && <Update item={editItem} onUpdate={handleUpdate} />}
    </div>
  );
};

export default CrudApp;
