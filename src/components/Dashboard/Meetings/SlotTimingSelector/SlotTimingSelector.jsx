import styles from "./slotTimingSelector.module.scss";

const SlotTimingSelector = ({ selectSlotTiming }) => {
  return (
    <div
      style={{ display: selectSlotTiming ? "block" : "none" }}
      className={styles.container}
    >
      <div className={styles.modalContainer}></div>
    </div>
  );
};
export default SlotTimingSelector;
