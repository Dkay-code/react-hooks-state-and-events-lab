import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categoryBy, selectedCategory] = useState("All");
  


//   const [filterBy, setFilterBy] = useState("All");  
  function handleFilterChange(event) {
    selectedCategory(event.target.value);
  }
//   const [foods, setFoods] = useState(spicyFoods);
// const [filterBy, setFilterBy] = useState("All");

const itemsToDisplay = items.filter((item) => {
  if (categoryBy === "All") {
    return true;
  } else {
    return item.category === categoryBy;
  }
}); 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
