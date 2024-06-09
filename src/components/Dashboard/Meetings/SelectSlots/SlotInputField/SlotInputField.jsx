import styles from "./SlotInputField.module.scss";

const SlotInputField = ({
  showHideSelectSlotTiming,
  id,
  slotno,
  dateTimeStart,
  dateTimeEnd,
  deleteSlot
}) => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObjEnd = new Date(dateTimeEnd*1000);
  const dateObj = new Date(dateTimeStart*1000);
  console.log(dateTimeStart);
  console.log(dateObj);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    dateObj
  );
  const meetDate = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
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

        ({meetDate} {month} ({week[dateObj.getDay()]}),{" "}
        {fullTime} - {fullTimeEnd})
        </div>
      </div>
      <button
        className={styles.SelectButton}
        onClick={() => {
          return deleteSlot(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default SlotInputField;
