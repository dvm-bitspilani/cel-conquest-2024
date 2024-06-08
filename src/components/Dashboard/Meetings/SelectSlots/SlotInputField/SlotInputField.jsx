import styles from "./SlotInputField.module.scss";

const SlotInputField = ({ showHideSelectSlotTiming }) => {
  return (
    <div className={styles.inputField}>
      <input type="text" placeholder="Slot 1" />
      <p></p>
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
