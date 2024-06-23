import {  useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";
// import { ItemsContext } from "../context/ItemsContextProvider";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList(
) {
  const{deleteItem,toggleItems,items}=useItemsStore();
  const [sortBy, setSortBy] = useState("default");
  const sortedItems=useMemo(()=>[...items].sort((a,b)=>{
    if(sortBy=="packed"){
      return b.packed-a.packed;
    }
    if(sortBy=="unpacked"){
      return a.packed-b.packed;
    }
    return
  }),[items,sortBy])
  return (
    <ul>
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={option =>setSortBy(option.value)}
          ></Select>
        </section>
      ) : null}
      {sortedItems.map((item) => (
        <Item
          key={item.name}
          item={item}
          handleDeleteItem={deleteItem}
          handleToggleItem={toggleItems}
        />
      ))}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  const { id, name, packed } = item;
  
  return (
    <li className="item" style={{ display: "flex", alignItems: "center" }}>
      <input
        id={name}
        type="checkbox"
        checked={packed}
        onChange={() => handleToggleItem(id)}
        style={{ marginRight: "8px" }}
      />
      <label htmlFor={name}>{name}</label>
      <button
        onClick={() => {
          handleDeleteItem(id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
