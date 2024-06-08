import styles from "./meetings.module.scss";
import MeetingDetails from "../../../components/Dashboard/Meetings/MeetingDetails/MeetingDetails";
import SelectSlots from "../../../components/Dashboard/Meetings/SelectSlots/SelectSlots";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import SlotTimingSelector from "../../../components/Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";
import MeetingList from "../../../components/MeetingList/MeetingList";
import MeetingItem from "../../../components/MeetingList/MeetingItem/MeetingItem";
import avatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

const Meetings = () => {
  //meeting list code
  const dataRef = useRef(null);

  function handleClick() {
    console.log(dataRef.current);
  }

  // rest of the code
  const [selectSlots, setselectSlots] = useState(false);
  const [selectSlotTiming, setselectSlotTiming] = useState(false);
  const [listItms, setListItms] = useState([]);

  let showHideSelectSlots = () => {
    setselectSlots(!selectSlots);
  };

  let showHideSelectSlotTiming = () => {
    setselectSlotTiming(!selectSlotTiming);
    console.log(selectSlotTiming);
  };

  const [listTab, setListTab] = useState("upcoming");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .get(
          `https://conquest-api.bits-dvm.org/api/meetings/meetings/${listTab}/`,
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).tokens.access
              }`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data)

          // const newArr = res.data.map(newItm => {
          //   return (
          //     <MeetingItem
          //       date={newItm.slot_start_time}
          //       avatar={newItm.requested_logo}
          //       mentorName={newItm.requested_name}
          //       duration={45}
          //       key={newItm.id}
          //       // data={newItm}
          //       handleClick={handleClick}
          //       dataRef={dataRef}
          //     />
          //   )
          // })

          // setListItms(newArr)

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

            setListItms((prev) => {
              return [...prev, newItm];
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  }, [JSON.parse(localStorage.getItem("userData")).tokens.access]);

  return (
    <>
      <SlotTimingSelector
        selectSlotTiming={selectSlotTiming}
        removeModal={showHideSelectSlotTiming}
      ></SlotTimingSelector>
      <div className={styles.meetingsContainer}>
        <div className={styles.meetingsList}>
          <div className={styles.meetingsListOptionsContainer}>
            <div
              onClick={() => {
                setListTab("upcoming");
              }}
              className={`${styles.meetingsListOptions} ${
                listTab === "upcoming" ? styles.active : null
              }`}
            >
              Upcoming
            </div>
            <div
              onClick={() => {
                setListTab("pending");
              }}
              className={`${styles.meetingsListOptions} ${
                listTab === "pending" ? styles.active : null
              }`}
            >
              Pending
            </div>
            <div
              onClick={() => {
                setListTab("past");
              }}
              className={`${styles.meetingsListOptions} ${
                listTab === "past" ? styles.active : null
              }`}
            >
              Past
            </div>
          </div>
          <div className={styles.meetingWrapper}>
            <MeetingList listItms={listItms} />
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
              showHideSelectSlots={showHideSelectSlots}
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
