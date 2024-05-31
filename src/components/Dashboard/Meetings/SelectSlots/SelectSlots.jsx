import styles from "./SelectSlots.module.scss";
import SlotInputField from "./SlotInputField/SlotInputField";

const SelectSlots = () => {
  return (
    <div className={styles.SelectSlots}>
      <h3>Select Slots</h3>
      <SlotInputField></SlotInputField>
      <div className={styles.addDone}>
        <button>Add</button>
        <button>Done</button>
      </div>
    </div>
  );
};
export default SelectSlots;
