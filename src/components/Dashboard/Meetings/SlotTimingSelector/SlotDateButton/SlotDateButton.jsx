import styles from "./slotDateButton.module.scss";

function SlotDateButton({ day, date }) {
  return (
    <div className={styles.container}>
      <div>{day}</div>
      <div>{date}</div>
    </div>
  );
}

export default SlotDateButton;
