import styles from "./Container.module.css";
function Container(props) {
  return <div className={styles.containerStyle}>{props.children}</div>;
}
export default Container;
