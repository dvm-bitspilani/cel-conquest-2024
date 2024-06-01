import styles from "./SelectSlots.module.scss";
import SlotInputField from "./SlotInputField/SlotInputField";

const SelectSlots = ({ showHideSelectSlotTiming }) => {
  return (
    <div className={styles.SelectSlots}>
      <h3>Select Slots</h3>
      <SlotInputField
        showHideSelectSlotTiming={showHideSelectSlotTiming}
      ></SlotInputField>
      <div className={styles.addDone}>
        <button>Add</button>
        <button>Done</button>
      </div>
    </div>
  );
};
export default SelectSlots;
