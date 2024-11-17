import React from "react";
import { useParams } from "react-router-dom";

function ShoppingListDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail seznamu</h2>
      <p>ID seznamu: {id}</p>
    </div>
  );
}

export default ShoppingListDetail;
