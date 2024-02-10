import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let itemsList = ["milk", "dsa", "lld", "react"];
  return (
    <>
      <ul className="list-group">
        {itemsList.map((value) => {
          return (
            <li key={value} className="list-group-item">
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
