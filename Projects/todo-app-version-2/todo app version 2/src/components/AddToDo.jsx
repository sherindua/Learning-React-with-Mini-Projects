import styles from "./AddToDo.module.css";

function AddToDo() {
  return (
    <div className={styles.todocontainer}>
      <div className="row">
        <div className="col-6">
          <input
            className={styles.todoinput}
            placeholder="Enter Task Here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
