import { useState, useRef, useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";

export default function AddForm() {
  const{handleAddItems}=useContext(ItemsContext);
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    // validation
    console.log(itemText.length);
    if (itemText.trim().length===0) {
      alert("Item cannot be empty");
      inputRef.current.focus();
      return;
    }
    
    handleAddItems(itemText)
    setItemText("");
  }
  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <button className="btn">Add to list</button>
    </form>
  );
}
