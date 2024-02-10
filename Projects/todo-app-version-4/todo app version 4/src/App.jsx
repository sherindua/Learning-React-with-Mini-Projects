import AppHeading from "./components/AppHeading";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let storedItems = localStorage.getItem("storedItemsList");
  let [itemsList, setItemsList] = useState(
    // []
    storedItems ? JSON.parse(storedItems) : []
  );

  function HandleAddOnClick(currentTodoName, currentTodoDate) {
    let newItemsList = [
      ...itemsList,
      { todoName: currentTodoName, todoDate: currentTodoDate },
    ];
    setItemsList((currentItemsList) => {
      let newItemsList = [
        ...currentItemsList,
        { todoName: currentTodoName, todoDate: currentTodoDate },
      ];
      return newItemsList;
    });
    localStorage.setItem("storedItemsList", JSON.stringify(newItemsList));
    // console.log(
    //   `New Item Added - New Name: ${currentTodoName} New Date:${currentTodoDate}`
    // );
  }

  function HandleDeleteOnClick(todoNameToDelete) {
    let newItemsList = itemsList.filter((item) => {
      return item.todoName !== todoNameToDelete;
    });
    setItemsList(newItemsList);
    localStorage.setItem("storedItemsList", JSON.stringify(newItemsList));
  }



  return (
    <center className="appcontainer">
      <AppHeading />
      <AddToDo HandleAddOnClick={HandleAddOnClick} />

      <TodoItems itemsList={itemsList} onDeleteClick={HandleDeleteOnClick} />
    </center>
  );
}

export default App;
