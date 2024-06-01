import SlotDateButton from "./SlotDateButton/SlotDateButton";
import TimeSelectButton from "./TimeSelectButton/TimeSelectButton";
import styles from "./slotTimingSelector.module.scss";

const SlotTimingSelector = ({ selectSlotTiming }) => {
  return (
    <>
      <div
        style={{ display: selectSlotTiming ? "block" : "none" }}
        className={styles.modalContainer}
      >
        <div className={styles.header}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5"
              stroke="#111213"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="#111213"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2>Select Slot 1</h2>
        </div>
        <div className={styles.slotDataButtonContainer}>
          <SlotDateButton day="Mon" date="12" />
          <SlotDateButton day="Mon" date="12" />
          <SlotDateButton day="Mon" date="12" />
          <SlotDateButton day="Mon" date="12" />
          <SlotDateButton day="Mon" date="12" />
          <SlotDateButton day="Mon" date="12" />
          <SlotDateButton day="Mon" date="12" />
        </div>
        <div>
          <div>
            <div></div>
            <TimeSelectButton />
            <TimeSelectButton />
            <TimeSelectButton />
            <TimeSelectButton />
          </div>
          <div>
            <div></div>
            <TimeSelectButton />
            <TimeSelectButton />
            <TimeSelectButton />
            <TimeSelectButton />
          </div>
          <div>
            <div></div>
            <TimeSelectButton />
            <TimeSelectButton />
            <TimeSelectButton />
            <TimeSelectButton />
          </div>
        </div>
        <div>
          <p>Select a 45 min. slot</p>
          <button>Select</button>
        </div>
      </div>
    </>
  );
};
export default SlotTimingSelector;
