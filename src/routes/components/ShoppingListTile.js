import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingListTile = ({ list, onDelete }) => {
  return (
    <div className="shopping-list-tile">
      <h2>
        <Link to={`/list/${list.id}`}>{list.name}</Link>
      </h2>
      <button onClick={onDelete}>Smazat</button>
    </div>
  );
};

export default ShoppingListTile;
