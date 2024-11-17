import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewShoppingListModal from "../components/NewShoppingListModal";
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog";

function ShoppingListOverview() {
  const [lists, setLists] = useState([{ id: 1, name: "Seznam pro obchod" }]);

  const addList = (name) => {
    const newList = { id: lists.length + 1, name };
    setLists([...lists, newList]);
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div>
      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#newListModal"
      >
        Přidat nový seznam
      </button>
      <div className="list-group">
        {lists.map((list) => (
          <div className="list-group-item d-flex justify-content-between align-items-center" key={list.id}>
            <Link to={`/list/${list.id}`} className="text-decoration-none">
              {list.name}
            </Link>
            <button
              className="btn btn-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target={`#deleteDialog${list.id}`}
            >
              Smazat
            </button>
            <ConfirmDeleteDialog id={list.id} onDelete={deleteList} />
          </div>
        ))}
      </div>
      <NewShoppingListModal onAdd={addList} />
    </div>
  );
}

export default ShoppingListOverview;
