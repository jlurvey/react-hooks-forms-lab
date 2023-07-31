import React, { useState } from "react"
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const initialData = {
    id: "",
    name: "",
    category: "Produce",
  }

  const [itemData, setItemData] = useState(initialData);

  function handleChange (event) {
    const { name, value } = event.target;
    setItemData({ ...itemData, id: uuid(), [name]: value })
  }

    function handleSubmit (event) {
      event.preventDefault();
      onItemFormSubmit(itemData);
      setItemData(initialData);
    }
  

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={itemData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={itemData.category}>
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
