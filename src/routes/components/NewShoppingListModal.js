import React, { useState } from "react";

function NewShoppingListModal({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    onAdd(name);
    setName("");
  };

  return (
    <div
      className="modal fade"
      id="newListModal"
      tabIndex="-1"
      aria-labelledby="newListModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newListModalLabel">
              Přidat nový seznam
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Název seznamu"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Zavřít
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleAdd}
            >
              Přidat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewShoppingListModal;
