import avatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

import styles from "./meetings.module.scss";
import MeetingDetails from "../../../components/Dashboard/Meetings/MeetingDetails/MeetingDetails";
import SelectSlots from "../../../components/Dashboard/Meetings/SelectSlots/SelectSlots";
import { useState } from "react";
import SlotTimingSelector from "../../../components/Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";
import MeetingList from "../../../components/MeetingList/MeetingList";
import MeetingItem from "../../../components/MeetingList/MeetingItem/MeetingItem";

import { useRef } from "react";

const Meetings = () => {
  //meeting list code
  const dataRef = useRef(null);

  function handleClick() {
    console.log(dataRef.current);
  }

  const listItms = [];
  for (let i = 0; i < 6; i++) {
    const newItm = (
      <MeetingItem
        date="May 24, 2024, 00:30:00"
        avatar={avatar}
        mentorName="Bhavesh"
        duration={30}
        // isGrayLink={true}
        key={Math.random()}
        data={{ test: "hello", id: i }}
        handleClick={handleClick}
        dataRef={dataRef}
      />
    );
    listItms.push(newItm);
  }

  // rest of the code
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
          <MeetingList listItms={listItms} />
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
