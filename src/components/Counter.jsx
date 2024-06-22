import { useContext } from "react"
import { ItemsContext } from "../context/ItemsContextProvider"

export default function Counter() {
  const{packedItems,totlaNoOfItems}=useContext(ItemsContext);
  return (
    <>
    <p><b>{packedItems}/{totlaNoOfItems} items packed</b></p>
    </>
  )
}
