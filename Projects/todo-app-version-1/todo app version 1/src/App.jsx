import AppHeading from "./AppHeading";
import TodoRow1 from "./TodoRow1";
import TodoRow2 from "./TodoRow2";
import AddToDo from "./AddToDo";
import "./App.css";
function App() {
  return (
    <center className="app-container">
      <AppHeading />
      <AddToDo />

      <TodoRow1 />
      <TodoRow2 />
    </center>
  );
}

export default App;
