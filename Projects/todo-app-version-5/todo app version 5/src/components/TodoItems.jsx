import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItems() {
  const contextObj = useContext(TodoItemsContext);
  let itemsList = contextObj.itemsList;

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

      {itemsList.map((item) => {
        return (
          <TodoItem
            key={item.todoName + "" + item.todoDate}
            todoName={item.todoName}
            todoDate={item.todoDate}
          />
        );
      })}
    </>
  );
}

export default TodoItems;
