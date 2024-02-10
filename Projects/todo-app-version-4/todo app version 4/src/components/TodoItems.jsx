import TodoItem from "./TodoItem";

function TodoItems(props) {
  return (
    <>
      {/* <TodoItem
        todoName={props.itemsList[0].todoName}
        todoDate={props.itemsList[0].todoDate}
      />
      <TodoItem
        todoName={props.itemsList[1].todoName}
        todoDate={props.itemsList[1].todoDate}
      /> */}

      {props.itemsList.map((item) => {
        return (
          <TodoItem
            key={item.todoName + "" + item.todoDate}
            todoName={item.todoName}
            todoDate={item.todoDate}
            HandleDeleteOnClick={props.onDeleteClick}
          />
        );
      })}
    </>
  );
}

export default TodoItems;
