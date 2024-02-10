import AppHeading from "./components/AppHeading";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let storedItems = localStorage.getItem("storedItemsList");
  let [itemsList, setItemsList] = useState(
    // []
    storedItems ? JSON.parse(storedItems) : []
  );

  function addItem(currentTodoName, currentTodoDate) {
    // let newItemsList = [
    //   ...itemsList,
    //   { todoName: currentTodoName, todoDate: currentTodoDate },
    // ];
    setItemsList((currentItemsList) => {
      let newItemsList = [
        ...currentItemsList,
        { todoName: currentTodoName, todoDate: currentTodoDate },
      ];
      localStorage.setItem("storedItemsList", JSON.stringify(newItemsList));
      return newItemsList;
    });

    // console.log(
    //   `New Item Added - New Name: ${currentTodoName} New Date:${currentTodoDate}`
    // );
  }

  function deleteItem(todoNameToDelete) {
    let newItemsList = itemsList.filter((item) => {
      return item.todoName !== todoNameToDelete;
    });
    setItemsList(newItemsList);
    localStorage.setItem("storedItemsList", JSON.stringify(newItemsList));
  }

  // const defaultTodoItems = [{ todoName: "Buy Milk", todoDate: "10/01/2024" }];

  return (
    <TodoItemsContext.Provider
      value={{
        itemsList: itemsList,
        addNewItem: addItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="appcontainer">
        <AppHeading />
        <AddToDo />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
