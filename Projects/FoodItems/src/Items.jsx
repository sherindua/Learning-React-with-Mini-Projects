import styles from "./Items.module.css";
function Items({ item, activeItems, HandleOnClick }) {
  return (
    <li
      className={`list-group-item ${
        activeItems.includes(item) ? "active" : null
      }`}
    >
      {item}
      <button
        className={`${styles.buyButton} btn btn-info`}
        onClick={(event) => HandleOnClick(event, item)}
      >
        Buy
      </button>
    </li>
  );
}

export default Items;
