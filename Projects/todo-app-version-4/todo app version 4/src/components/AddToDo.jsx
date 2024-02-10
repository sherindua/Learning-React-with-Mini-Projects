import { useRef, useState } from "react";
import styles from "./AddToDo.module.css";

function AddToDo({ HandleAddOnClick }) {
  let currentTodoName = useRef("");
  let currentTodoDate = useRef("");

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
              HandleAddOnClick(
                currentTodoName.current.value,
                currentTodoDate.current.value
              );
              currentTodoName.current.value = "";
              currentTodoDate.current.value = "";
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
