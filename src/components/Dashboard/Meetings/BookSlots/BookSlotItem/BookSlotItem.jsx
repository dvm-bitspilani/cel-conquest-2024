import React, { useEffect } from "react";
import styles from "./BookSlotItem.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookSlotItem({
  showHideSelectSlotTiming,
  slotno,
  slotId,
  dateTimeStart,
  dateTimeEnd,
  deleteSlot,
}) {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObjEnd = new Date(dateTimeEnd * 1000);
  const dateObj = new Date(dateTimeStart * 1000);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    dateObj
  );
  const meetDate = dateObj.getDate();

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const period = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12;
  const fullTime = `${adjustedHours}:${formattedMinutes} ${period}`;

  const hoursEnd = dateObjEnd.getHours();
  const minutesEnd = dateObjEnd.getMinutes();
  const formattedMinutesEnd = minutesEnd < 10 ? `0${minutesEnd}` : minutesEnd;
  const periodEnd = hoursEnd >= 12 ? "PM" : "AM";
  const adjustedHoursEnd = hoursEnd % 12 || 12;
  const fullTimeEnd = `${adjustedHoursEnd}:${formattedMinutesEnd} ${periodEnd}`;

  const { id } = useParams();

  const handleClick = () => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .post(
          `https://portal.conquest.org.in/api/meetings/requests/`,
          {
            requester: JSON.parse(localStorage.getItem("userData"))
              .user_profile_obj.id,
            requested: id,
            slot: slotId,
          },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).tokens.access
              }`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  };
  return (
    <div className={styles.inputField}>
      <div>
        <div> Slot {slotno + 1}</div>
        <div>
          ({meetDate} {month} ({week[dateObj.getDay()]}), {fullTime} -{" "}
          {fullTimeEnd})
        </div>
      </div>
      <button className={styles.SelectButton} onClick={() => handleClick()}>
        Book
      </button>
    </div>
  );
}

export default BookSlotItem;
