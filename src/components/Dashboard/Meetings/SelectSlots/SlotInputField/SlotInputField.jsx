import styles from "./SlotInputField.module.scss";

const SlotInputField = ({ showHideSelectSlotTiming , id, dateTimeStart, dateTimeEnd}) => {
  let dateStart = new Date(dateTimeStart * 1000);
  let dateEnd = new Date(dateTimeEnd * 1000);
  return (
    <div className={styles.inputField}>
      <p>`Slot {id}  () `</p>
      <button
        className={styles.SelectButton}
        onClick={showHideSelectSlotTiming}
      >
        Select
      </button>
    </div>
  );
};
export default SlotInputField;
