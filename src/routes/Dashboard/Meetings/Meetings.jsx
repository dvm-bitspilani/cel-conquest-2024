import styles from "./meetings.module.scss";
import MeetingDetails from "../../../components/Dashboard/Meetings/MeetingDetails/MeetingDetails";
import SelectSlots from "../../../components/Dashboard/Meetings/SelectSlots/SelectSlots";
import { useState } from "react";
import SlotTimingSelector from "../../../components/Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";

const Meetings = () => {
  const [selectSlots, setselectSlots] = useState(false);
  const [selectSlotTiming, setselectSlotTiming] = useState(false);

  let showHideSelectSlots = () => {
    setselectSlots(!selectSlots);
  };
  let showHideSelectSlotTiming = () => {
    setselectSlotTiming(!selectSlotTiming);
    console.log(selectSlotTiming);
  };

  return (
    <>
      <SlotTimingSelector
        selectSlotTiming={selectSlotTiming}
      ></SlotTimingSelector>
      <div className={styles.meetingsContainer}>
        <div className={styles.meetingsList}>
          <div className={styles.meetingsListOptionsContainer}>
            <div className={`${styles.meetingsListOptions} ${styles.active}`}>
              Upcoming
            </div>
            <div className={styles.meetingsListOptions}>Pending</div>
            <div className={styles.meetingsListOptions}>Past</div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.rightPart}>
          <button
            style={{ zIndex: 2 }}
            className={styles.selectSlots}
            onClick={showHideSelectSlots}
          >
            Select Slots
          </button>
          {selectSlots ? (
            <SelectSlots
              showHideSelectSlotTiming={showHideSelectSlotTiming}
            ></SelectSlots>
          ) : null}
          <div
            className={`${styles.meetingsDetails} ${
              selectSlots ? styles.blur : null
            }`}
          >
            <MeetingDetails></MeetingDetails>
          </div>
        </div>
      </div>
    </>
  );
};
export default Meetings;
