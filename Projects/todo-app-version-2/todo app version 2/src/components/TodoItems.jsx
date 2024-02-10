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
        return <TodoItem todoName={item.todoName} todoDate={item.todoDate} />;
      })}
    </>
  );
}

export default TodoItems;
