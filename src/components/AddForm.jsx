import { useState, useRef } from 'react'; 
import { useItemsStore } from '../stores/itemsStore'; 

export default function AddForm() {
  const addItems = useItemsStore((state) => state.addItems); 

  const [itemText, setItemText] = useState('');
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (itemText.trim().length === 0) {
      alert('Item cannot be empty');
      inputRef.current.focus();
      return;
    }

    addItems(itemText); // Call addItems action to add item
    setItemText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus={true}
      />
      <button className="btn" type="submit">Add to list</button>
    </form>
  );
}
