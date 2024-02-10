import styles from "./KeyContainer.module.css";
function KeyContainer(props) {
  return (
    <div className={`${styles.keyContainer} container text-center`}>
      {props.children}
    </div>
  );
}
export default KeyContainer;
