import React from "react";

const Read = ({ data, onDelete, onEdit }) => {
  return (
    <div className="mt-4">
      <h3 className="mb-3">Items List</h3>
      {data.length === 0 ? (
        <div className="alert alert-info">No items found</div>
      ) : (
        <ul className="list-group">
          {data.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{item.name}</span>
              <div>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Read;
