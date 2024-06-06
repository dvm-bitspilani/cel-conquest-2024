import styles from "./timeSelectButtonHeader.module.scss";

function TimeSelectButtonHeader({ svg, header}) {
  return (
    <div className={styles.container}>
      <div>{svg}</div>
      <p>{header}</p>
    </div>
  );
}
export default TimeSelectButtonHeader;
