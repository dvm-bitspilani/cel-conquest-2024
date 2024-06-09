import React from "react";
import styles from "./BookSlots.module.scss";
import BookSlotItem from "./BookSlotItem/BookSlotItem";

function BookSlots() {
  const [slotList, setSlotList] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .get("https://conquest-api.bits-dvm.org/api/meetings/slots/", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).tokens.access
            }`,
          },
        })
        .then((res) => {
          const newArr = res.data.map((newItm, index) => {
            return (
              <SlotInputField
                slotno={index + 1}
                key={newItm.id}
                id={newItm.id}
                showHideSelectSlotTiming={showHideSelectSlotTiming}
                dateTimeStart={newItm.start_time}
                dateTimeEnd={newItm.end_time}
                deleteSlot={deleteSlot}
              ></SlotInputField>
            );
          });
          setSlotList(newArr);
          console.log(res.data);
          setSlotData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  }, [JSON.parse(localStorage.getItem("userData")).tokens.access]);
  return (
    <div className={styles.SelectSlots}>
      <div className={styles.slotListWrapper}>
        <h3>Book Slots</h3>
        {slotList}
        <div className={styles.addDone}>
          <button onClick={showHideSelectSlotTiming}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default BookSlots;
