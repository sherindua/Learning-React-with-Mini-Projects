import styles from "./FoodInput.module.css";
function FoodInput({ HandleOnKeyDown }) {
  return (
    <input
      className={styles.inputBox}
      type="text"
      placeholder="Enter food item here..."
      onKeyDown={HandleOnKeyDown}
    ></input>
  );
}

export default FoodInput;
