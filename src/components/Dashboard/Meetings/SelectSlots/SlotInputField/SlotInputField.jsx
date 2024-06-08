import styles from "./SlotInputField.module.scss";

const SlotInputField = ({ showHideSelectSlotTiming , id, dateTimeStart}) => {
  const dateObj = new Date(dateTimeStart);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        dateObj
    );
    const meetDate = dateObj.getDate();

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const fullTime =
        hours > 12
            ? `${hours - 12}:${minutes} PM`
            : hours === 0
                ? `12:${minutes} AM`
                : `${hours}:${minutes} AM`;
  return (
    <div className={styles.inputField}>
      
      <p>Slot {id} ({dateStart.getDate()} {dateStart.getDate()} ()) </p>
      <button
        className={styles.SelectButton}
        onClick={showHideSelectSlotTiming}
      >
        Delete
      </button>
    </div>
  );
};
export default SlotInputField;
