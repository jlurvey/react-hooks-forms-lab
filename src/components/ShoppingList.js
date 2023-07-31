import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const[search,setSearch] = useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
    console.log(e.target.value)
  };

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemList, setItemList] = useState(items);


  function handleNameChange(e) {
    setItemName(e.target.value);
  }

  function handleCategoryFormChange(e) {
    setItemCategory(e.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  };


  const itemsToDisplay = itemList.filter((item) => {
    if (selectedCategory === "All") 
    return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      onNameChange={handleNameChange} 
      onCategoryFormChange={handleCategoryFormChange} 
      itemName={itemName} 
      itemCategory={itemCategory}
      onItemFormSubmit={handleItemFormSubmit}
      />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={handleSearchChange} 
      search={search}
      />
      
      <ul className="Items">
        {itemsToDisplay
        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .map((item) => (<Item key={item.id} name={item.name} category={item.category}/>))
        }
      </ul>
    </div>
  );
}

export default ShoppingList;

