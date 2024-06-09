import styles from "./SlotInputField.module.scss";

const SlotInputField = ({
  showHideSelectSlotTiming,
  id,
  slotno,
  dateTimeStart,
  dateTimeEnd,
  deleteSlot,
}) => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObjEnd = new Date(dateTimeEnd * 1000);
  const dateObj = new Date(dateTimeStart * 1000);
  // console.log(dateTimeStart);
  // console.log(dateObj);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    dateObj
  );
  const meetDate = dateObj.getDate();
  const hours = dateObj.getHours();
  // console.log(hours);
  let minutes = dateObj.getMinutes();
  minutes = minutes == 0 ? "00" : minutes;
  const fullTime =
    hours > 12
      ? `${hours - 12}:${minutes} PM`
      : hours === 0
      ? `12:${minutes} AM`
      : `${hours}:${minutes} AM`;

  const hoursEnd = dateObjEnd.getHours();
  const minutesEnd = dateObjEnd.getMinutes();
  const fullTimeEnd =
    hoursEnd > 12
      ? `${hoursEnd - 12}:${minutesEnd} PM`
      : hoursEnd === 0
      ? `12:${minutesEnd} AM`
      : `${hoursEnd}:${minutesEnd} AM`;
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
        {window.innerWidth > 600 ? (
          "Delete"
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
export default SlotInputField;
