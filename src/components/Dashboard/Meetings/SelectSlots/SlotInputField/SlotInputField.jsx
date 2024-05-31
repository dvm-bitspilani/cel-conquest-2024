import styles from "./SlotInputField.module.scss";

const SlotInputField = () => {
  return (
    <div className={styles.inputField}>
      <input type="text" placeholder="Slot 1" />
      <div className={styles.SelectButton}>Select</div>
    </div>
  );
};
export default SlotInputField;
