import { useState } from "react";
import Items from "./Items";
function FoodItems({ foodItems }) {
  let [activeItems, setActiveItems] = useState([]);

  function HandleOnClick(event, item) {
    let newActiveItems = [...activeItems, item];
    setActiveItems(newActiveItems);
  }
  return (
    <ul className="list-group">
      {foodItems.map((item) => {
        return (
          <Items
            key={item}
            item={item}
            activeItems={activeItems}
            HandleOnClick={HandleOnClick}
          ></Items>
        );
      })}
    </ul>
  );
}

export default FoodItems;
