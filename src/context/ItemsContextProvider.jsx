import { createContext } from "react";
import { useState, useEffect } from "react";
import { initialItems } from "../lib/constants";
export const ItemsContext = createContext();
export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  function handleAddItems(newItemText) {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  }
  function handleRemoveAllItems() {
    setItems([]);
  }
  function handleResetToInitial() {
    const allInitialItems = [...initialItems];
    setItems(allInitialItems);
  }
  function handleMarkAllAsComplete() {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  }
  function handleMarkAllAsIncomplete() {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  }
  function handleDeleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }
  function handleToggleItem(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  }
  const totlaNoOfItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        handleAddItems,
        handleDeleteItem,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleRemoveAllItems,
        handleResetToInitial,
        handleToggleItem,
        totlaNoOfItems,
        packedItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
