import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onCategoryFormChange,itemCategory,itemName,onNameChange,onItemFormSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {id: uuid(), name: itemName, category: itemCategory};
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNameChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onCategoryFormChange} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
