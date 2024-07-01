import React, { useEffect, useState } from "react";
import styles from "./BookSlots.module.scss";
import BookSlotItem from "./BookSlotItem/BookSlotItem";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookSlots({ bookSlots, showHideBookSlots }) {
  const { id } = useParams();
  const [slotList, setSlotList] = useState([]);
  const selectSlot = (id) => { };
  // console.log(id);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")).tokens && id) {
      axios
        .get(
          `https://portal.conquest.org.in/api/meetings/user/${id}/meeting-slots/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                }`,
            },
          }
        )
        .then((res) => {
          const newArr = res.data.map((newItm, index) => {
            return (
              <BookSlotItem
                slotno={index}
                key={newItm.id}
                slotId={newItm.id}
                showHideSelectSlotTiming={showHideBookSlots}
                dateTimeStart={newItm.start_time}
                dateTimeEnd={newItm.end_time}
                selectSlot={selectSlot}
              ></BookSlotItem>
            );
          });
          setSlotList(newArr);
          console.log(res.data);
          // setSlotData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  }, []);
  return (
    <div
      style={bookSlots ? { display: "block" } : { display: "none" }}
      className={styles.SelectSlots}
    >
      <div className={styles.slotListWrapper}>
        <div className={styles.BookSlotsHeader}>
          <h3>Book Slots</h3>
          <svg
            onClick={showHideBookSlots}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {slotList}
        <div className={styles.confirm}>
          <button onClick={showHideBookSlots}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default BookSlots;
