import styles from "./slotDateButton.module.scss";

function SlotDateButton({ day, date, active, changeDate, month, year }) {
  return (
    <button 
    onClick={()=>{changeDate(date, month, year)}}
    className={`${styles.container} ${active ? styles.active : null}`}>
      <div>{day}</div>
      <div>{date}</div>
    </button>
  );
}

export default SlotDateButton;
