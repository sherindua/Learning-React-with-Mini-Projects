import AppHeading from "./components/AppHeading";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  let itemsList = [
    {
      todoName: "Buy Milk",
      todoDate: "10/01/2024",
    },
    {
      todoName: "Practice DSA",
      todoDate: "10/01/2024",
    },
  ];
  return (
    <center className="appcontainer">
      <AppHeading />
      <AddToDo />

      <TodoItems itemsList={itemsList} />
    </center>
  );
}

export default App;
