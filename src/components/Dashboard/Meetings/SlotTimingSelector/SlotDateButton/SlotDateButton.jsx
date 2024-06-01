import styles from "./slotDateButton.module.scss";

function SlotDateButton({ day, date }) {
  return (
    <button className={styles.container}>
      <div>{day}</div>
      <div>{date}</div>
    </button>
  );
}

export default SlotDateButton;
