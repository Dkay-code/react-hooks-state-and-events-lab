import React, { useState } from "react";

function Item({ name, category }) {
  const [added, setAdd] = useState (false)
  function handleAdd() {
    setAdd(added => !added);
  }
  const appClass = added ? "in-cart" : ""
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleAdd} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
