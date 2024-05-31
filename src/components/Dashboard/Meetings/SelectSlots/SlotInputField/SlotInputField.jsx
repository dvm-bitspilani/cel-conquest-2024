import styles from "./SlotInputField.module.scss";

const SlotInputField = () => {
  return (
    <div className={styles.inputField}>
      <input type="text" placeholder="Enter your email" />
      <div className={styles.subscribeButton}>Subscribe</div>
    </div>
  );
};
export default SlotInputField;
