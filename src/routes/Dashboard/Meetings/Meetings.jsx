import styles from "./meetings.module.scss";
import MeetingDetails from "../../../components/Dashboard/Meetings/MeetingDetails/MeetingDetails";
import SelectSlots from "../../../components/Dashboard/Meetings/SelectSlots/SelectSlots";
import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import SlotTimingSelector from "../../../components/Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";
import MeetingList from "../../../components/MeetingList/MeetingList";
import MeetingItem from "../../../components/MeetingList/MeetingItem/MeetingItem";
import BookSlots from "../../../components/Dashboard/Meetings/BookSlots/BookSlots";
import { WebContext } from "../../../store/website-context";

const Meetings = () => {
  const { contextHolder } = useContext(WebContext)
  //meeting list code
  const dataRef = useRef(null);
  const [data, setData] = useState(null);
  const [requestSent, setRequestSent] = useState(false);
  const isStartup =
    JSON.parse(localStorage.getItem("userData")).user_profile_obj.role ===
      "Startup"
      ? true
      : false;

  function handleClick() {
    setData(dataRef.current);
  }

  const changeRequestSent = () => {
    setRequestSent(!requestSent);
  };

  // rest of the code
  const [selectSlots, setselectSlots] = useState(false);
  const [selectSlotTiming, setselectSlotTiming] = useState(false);
  const [bookSlots, setBookSlots] = useState(false);
  const [listItms, setListItms] = useState([]);

  let showHideSelectSlots = () => {
    setselectSlots(!selectSlots);
  };

  let showHideSelectSlotTiming = () => {
    setselectSlotTiming(!selectSlotTiming);
  };

  let showHideBookSlots = () => {
    setBookSlots(!bookSlots);
  };

  const [listTab, setListTab] = useState("upcoming");

  const userData = JSON.parse(localStorage.getItem("userData")).user_profile_obj;
  console.log(userData);

  const getMeetingList = (listTab) => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .get(
          `https://conquest-api.bits-dvm.org/api/meetings/meetings/${listTab}/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                }`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);

          const newArr = res.data.map((newItm) => {
            // console.log(newItm)
            return (
              <MeetingItem
                date={newItm.slot_start_time}
                avatar={
                  newItm.requested_name ===
                    JSON.parse(localStorage.getItem("userData")).user_profile_obj
                      .name
                    ? newItm.requester_logo
                    : newItm.requested_logo
                }
                mentorName={
                  newItm.requested_name ===
                    JSON.parse(localStorage.getItem("userData")).user_profile_obj
                      .name
                    ? newItm.requester_name
                    : newItm.requested_name
                }
                duration={45}
                key={newItm.id}
                data={newItm}
                handleClick={handleClick}
                dataRef={dataRef}
                type={listTab === "pending" ? "accept-decline" : "join"}
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
    if (
      JSON.parse(localStorage.getItem("userData")).tokens &&
      listTab === "upcoming"
    ) {
      axios
        .get(
          `https://conquest-api.bits-dvm.org/api/meetings/meetings/upcoming/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                }`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);

          let newArr = res.data.meetings.map((newItm) => {
            return (
              <MeetingItem
                date={newItm.slot_start_time}
                avatar={
                  newItm.requested_name ===
                    JSON.parse(localStorage.getItem("userData")).user_profile_obj
                      .name
                    ? newItm.requester_logo
                    : newItm.requested_logo
                }
                mentorName={
                  newItm.requested_name ===
                    JSON.parse(localStorage.getItem("userData")).user_profile_obj
                      .name
                    ? newItm.requester_name
                    : newItm.requested_name
                }
                duration={45}
                key={newItm.id}
                data={newItm}
                handleClick={handleClick}
                dataRef={dataRef}
                isGlobal={false}
                type={listTab === "pending" ? "accept-decline" : "join"}
              />
            );
          });
          let newArr2 = res.data.global_events.map((newItm) => {
            return (
              <MeetingItem
                date={newItm.slot_start_time}
                avatar={
                  newItm.requested_name ===
                    JSON.parse(localStorage.getItem("userData")).user_profile_obj
                      .name
                    ? newItm.requester_logo
                    : newItm.requested_logo
                }
                mentorName={newItm.name}
                duration={45}
                key={newItm.id}
                data={newItm}
                handleClick={handleClick}
                isGlobal={true}
                dataRef={dataRef}
              />
            );
          });
          newArr.push(newArr2);
          console.log("abc", newArr);
          setListItms(newArr);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  }, [JSON.parse(localStorage.getItem("userData")).tokens.access, listTab]);
  // console.log("isStartup", isStartup);
  return (
    <>
      {contextHolder}
      <BookSlots
        bookSlots={bookSlots}
        showHideBookSlots={showHideBookSlots}
      ></BookSlots>
      <SlotTimingSelector
        selectSlotTiming={selectSlotTiming}
        removeModal={showHideSelectSlotTiming}
        changeRequestSent={changeRequestSent}
      ></SlotTimingSelector>
      <div className={styles.meetingsContainer}>
        <div className={styles.meetingsList}>
          <div className={styles.phoneView}>
            <h2>Meetings</h2>
            <button
              style={{ zIndex: 2, display: isStartup ? "none" : null }}
              className={styles.selectSlots}
              onClick={isStartup ? showHideBookSlots : showHideSelectSlots}
            >
              {isStartup ? "Book Slot" : "Select Slots"}
            </button>
            {selectSlots ? (
              <SelectSlots
                showHideSelectSlotTiming={showHideSelectSlotTiming}
                showHideSelectSlots={showHideSelectSlots}
                requestSent={requestSent}
              ></SelectSlots>
            ) : null}
          </div>
          <div className={styles.meetingsListOptionsContainer} style={{display: userData.role === "Guest - Tier 2" ? "none" : null}}>
            <div
              onClick={() => {
                setListTab("upcoming");
                getMeetingList("upcoming");
              }}
              className={`${styles.meetingsListOptions} ${listTab === "upcoming" ? styles.active : null
                }`}
            >
              Upcoming
            </div>
            <div
              onClick={() => {
                setListTab("pending");
                getMeetingList("pending");
              }}
              className={`${styles.meetingsListOptions} ${listTab === "pending" ? styles.active : null
                }`}
            >
              Pending
            </div>
            <div
              onClick={() => {
                setListTab("past");
                getMeetingList("past");
              }}
              className={`${styles.meetingsListOptions} ${listTab === "past" ? styles.active : null
                }`}
            >
              Past
            </div>
          </div>
          <div className={styles.meetingWrapper}>
            <MeetingList listItms={listItms} />
          </div>
        </div>
        <div className={styles.divider} style={{display: userData.role === "Guest - Tier 2" ? "none" : null}}></div>
        <div className={styles.rightPart} style={{display: userData.role === "Guest - Tier 2" ? "none" : null}}>
          <button
            style={{ zIndex: 2, display: isStartup ? "none" : null }}
            className={styles.selectSlots}
            onClick={isStartup ? showHideBookSlots : showHideSelectSlots}
          >
            {isStartup ? "Book Slot" : "Select Slots"}
          </button>
          {selectSlots ? (
            <SelectSlots
              showHideSelectSlotTiming={showHideSelectSlotTiming}
              showHideSelectSlots={showHideSelectSlots}
              requestSent={requestSent}
              changeRequestSent={changeRequestSent}
            ></SelectSlots>
          ) : null}
          <div
            className={`${styles.meetingsDetails} ${selectSlots ? styles.blur : null
              }`}
          >
            {data !== null ? (
              <MeetingDetails myData={data} listTab={listTab}></MeetingDetails>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Meetings;
