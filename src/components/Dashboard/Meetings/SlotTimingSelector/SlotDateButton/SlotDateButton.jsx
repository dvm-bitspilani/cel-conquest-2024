import styles from "./slotDateButton.module.scss";

function SlotDateButton({ day, date, active }) {
  return (
    <button className={`${styles.container} ${active ? styles.active : null}`}>
      <div>{day}</div>
      <div>{date}</div>
    </button>
  );
}

export default SlotDateButton;
