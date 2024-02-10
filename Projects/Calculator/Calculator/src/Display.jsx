import styles from "./Display.module.css";
function Display({ displayText }) {
  return (
    <>
      <input value={displayText} className={styles.displayScreen}></input>
    </>
  );
}

export default Display;
