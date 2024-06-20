import React from "react";
import styles from "./BookSlotItem.module.scss";

function BookSlotItem({
  showHideSelectSlotTiming,
  id,
  slotno,
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

  return (
    <div className={styles.inputField}>
      <div>
        <div> Slot {slotno}</div>
        <div>
          ({meetDate} {month} ({week[dateObj.getDay()]}), {fullTime} -{" "}
          {fullTimeEnd})
        </div>
      </div>
      <button
        className={styles.SelectButton}
        onClick={() => {
          return deleteSlot(id);
        }}
      >
        Book
      </button>
    </div>
  );
}

export default BookSlotItem;
