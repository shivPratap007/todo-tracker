import create from 'zustand';
import { persist } from 'zustand/middleware';
import { initialItems } from '../lib/constants';

// Define a key for localStorage


export const useItemsStore = create(persist(
  (set) => ({
    items: initialItems,

    resetToInitial: () => set(() => ({ items: [...initialItems] })),
    removeAllItems: () => set(() => ({ items: [] })),
    markAllAsComplete: () =>
      set((state) => {
        const newArray = state.items.map((item) => ({ ...item, packed: true }));
        return { items: newArray };
      }),
    markAllAsIncomplete: () =>
      set((state) => {
        const newArray = state.items.map((item) => ({ ...item, packed: false }));
        return { items: newArray };
      }),
    addItems: (newItemText) =>
      set((state) => {
        const newItemObj = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        return { items: [...state.items, newItemObj] };
      }),
    deleteItem: (id) =>
      set((state) => {
        const newItems = state.items.filter((item) => item.id !== id);
        return { items: newItems };
      }),
    toggleItems: (id) =>
      set((state) => {
        const newItems = state.items.map((item) => {
          if (item.id === id) {
            return { ...item, packed: !item.packed };
          }
          return item;
        });
        return { items: newItems };
      }),
  }),
  {
    name: "items", 
  }
));
