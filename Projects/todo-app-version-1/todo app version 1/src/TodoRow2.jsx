function TodoRow2() {
  let todoName = "Practice DSA";
  let todoDate = "08/01/2024";
  return (
    <div className="row-container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoRow2;
