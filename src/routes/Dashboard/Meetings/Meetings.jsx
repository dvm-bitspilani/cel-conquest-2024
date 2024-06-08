import styles from "./meetings.module.scss";
import MeetingDetails from "../../../components/Dashboard/Meetings/MeetingDetails/MeetingDetails";
import SelectSlots from "../../../components/Dashboard/Meetings/SelectSlots/SelectSlots";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import SlotTimingSelector from "../../../components/Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";
import MeetingList from "../../../components/MeetingList/MeetingList";
import MeetingItem from "../../../components/MeetingList/MeetingItem/MeetingItem";

const Meetings = () => {
  //meeting list code
  const dataRef = useRef(null);
  const [data, setData] = useState(null);

  function handleClick() {
    setData(dataRef.current);
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

  const getMeetingList = (listTab) => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      console.log("fetching data");
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
          console.log(res.data);

          const newArr = res.data.map((newItm) => {
            return (
              <MeetingItem
                date={newItm.slot_start_time}
                avatar={newItm.requested_logo}
                mentorName={newItm.requested_name}
                duration={45}
                key={newItm.id}
                data={newItm}
                handleClick={handleClick}
                dataRef={dataRef}
              />
            );
          });

          setListItms(newArr);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .get(
          `https://conquest-api.bits-dvm.org/api/meetings/meetings/upcoming/`,
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).tokens.access
              }`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);

          const newArr = res.data.map((newItm) => {
            return (
              <MeetingItem
                date={newItm.slot_start_time}
                avatar={newItm.requested_logo}
                mentorName={newItm.requested_name}
                duration={45}
                key={newItm.id}
                data={newItm}
                handleClick={handleClick}
                dataRef={dataRef}
              />
            );
          });

          setListItms(newArr);
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
                getMeetingList("upcoming");
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
                getMeetingList("pending");
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
                getMeetingList("past");
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
            {data !== null ? (
              <MeetingDetails myData={data}></MeetingDetails>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Meetings;
