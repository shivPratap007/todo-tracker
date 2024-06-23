import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);

  const secondaryButton = [
    {
      text: "Mark all as complete",
      onClickTask: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",

      onClickTask: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",

      onClickTask: resetToInitial,
    },
    {
      text: "Remove all items",

      onClickTask: removeAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButton.map((data) => (
        <Button
          type={"secondary"}
          key={data.text}
          handleRemoveAllItems={removeAllItems}
          onClickTask={data.onClickTask}
        >
          {data.text}
        </Button>
      ))}
    </section>
  );
}
