import { useState } from "react";
import styles from "./AddToDo.module.css";

function AddToDo({ HandleAddOnClick }) {
  let [currentTodoName, setCurrentTodoName] = useState("");
  let [currentTodoDate, setCurrentTodoDate] = useState("");
  // let currentTodoName = "";
  // let currentTodoDate = "";
  function HandleCurrentTodoName(event) {
    setCurrentTodoName(event.target.value);
  }
  function HandleCurrentTodoDate(event) {
    setCurrentTodoDate(event.target.value);
  }
  return (
    <div className={styles.todocontainer}>
      <div className="row">
        <div className="col-6">
          <input
            className={styles.todoinput}
            placeholder="Enter Task Here"
            value={currentTodoName}
            onChange={(event) => HandleCurrentTodoName(event)}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={currentTodoDate}
            onChange={(event) => HandleCurrentTodoDate(event)}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              HandleAddOnClick(currentTodoName, currentTodoDate);
              setCurrentTodoDate("");
              setCurrentTodoName("");
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
