import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../context/ItemsContextProvider";
// import { secondaryButton } from "../lib/constants";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleRemoveAllItems,
    handleResetToInitial,
  } = useContext(ItemsContext);
  const secondaryButton = [
    {
      text: "Mark all as complete",
      onClickTask: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",

      onClickTask: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to initial",

      onClickTask: handleResetToInitial,
    },
    {
      text: "Remove all items",

      onClickTask: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButton.map((data) => (
        <Button
          type={"secondary"}
          key={data.text}
          handleRemoveAllItems={handleRemoveAllItems}
          onClickTask={data.onClickTask}
        >
          {data.text}
        </Button>
      ))}
    </section>
  );
}
