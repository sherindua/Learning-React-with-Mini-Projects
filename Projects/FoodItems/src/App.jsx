import FoodItems from "./FoodItems";
import Container from "./Container";
import Heading from "./Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodInput from "./FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Ginger", "Apple", "Burger", "Pizza"];
  // let textToShow = "Text to be displayed";
  // console.log(`text ${textToShow}`);

  let [foodItems, setFoodItems] = useState(["Ginger", "Milk", "Onion"]);

  function onKeyDown(event) {
    console.log(event);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      console.log(newFoodItem);
      event.target.value = "";
      let updatedFoodItems = [...foodItems, newFoodItem];
      setFoodItems(updatedFoodItems);
      console.log(foodItems);
    }
    // textToShow = event.target.value;
  }

  return (
    <>
      <Container>
        <Heading />
        <FoodInput HandleOnKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <FoodItems foodItems={foodItems} />
      </Container>
    </>
  );
}

export default App;
