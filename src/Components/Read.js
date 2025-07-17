import React from "react";

const Read = ({ data, onDelete, onEdit }) => {
  return (
    <div>
      <h3>Items List</h3>
      {data.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Read;
