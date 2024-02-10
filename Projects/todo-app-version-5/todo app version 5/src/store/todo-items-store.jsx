import { createContext } from "react";

export const TodoItemsContext = createContext({
  itemsList: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
