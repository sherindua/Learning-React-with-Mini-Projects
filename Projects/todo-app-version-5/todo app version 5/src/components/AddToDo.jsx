import { useRef, useState } from "react";
import styles from "./AddToDo.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  let currentTodoName = useRef("");
  let currentTodoDate = useRef("");
  const contextObj = useContext(TodoItemsContext);
  let addNewItem = contextObj.addNewItem;
  // function HandleCurrentTodoName(event) {
  //   setCurrentTodoName(event.target.value);
  // }
  // function HandleCurrentTodoDate(event) {
  //   setCurrentTodoDate(event.target.value);
  // }
  return (
    <div className={styles.todocontainer}>
      <div className="row">
        <div className="col-6">
          <input
            className={styles.todoinput}
            placeholder="Enter Task Here"
            ref={currentTodoName}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={currentTodoDate}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              addNewItem(
                currentTodoName.current.value,
                currentTodoDate.current.value
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
