import styles from "./slotTimingSelector.module.scss";

const SlotTimingSelector = ({ selectSlotTiming }) => {
  return (
    <>
      <div
        style={{ display: selectSlotTiming ? "block" : "none" }}
        className={styles.blurBackground}
      >
        {/* hello */}
      </div>
      <div
        style={{ display: selectSlotTiming ? "block" : "none" }}
        className={styles.modalContainer}
      >
        hello
      </div>
    </>
  );
};
export default SlotTimingSelector;
