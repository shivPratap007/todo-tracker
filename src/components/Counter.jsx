// import { useContext } from "react"
// import { ItemsContext } from "../context/ItemsContextProvider"


export default function Counter({packedItems,totalItems}) {
  return (
    <>
      <p>
        <b>
          {packedItems}/{totalItems} items packed
        </b>
      </p>
    </>
  );
}
