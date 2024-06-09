import { useEffect, useState } from "react";
import styles from "./SelectSlots.module.scss";
import SlotInputField from "./SlotInputField/SlotInputField";
import axios from "axios";

const SelectSlots = ({ showHideSelectSlotTiming, showHideSelectSlots }) => {
  const [slotList, setSlotList] = useState([]);
  const deleteSlot = (id) => {
    // console.log("delete slot");
    // console.log(slotData);
    // let newArray = slotData.filter((itm) => {
    //   return itm.id !== id;
    // });
    // let newArr = newArray.map((newItm, index) => {
    //   return (
    //     <SlotInputField
    //       slotno={index + 1}
    //       key={newItm.id}
    //       id={newItm.id}
    //       showHideSelectSlotTiming={showHideSelectSlotTiming}
    //       dateTimeStart={newItm.start_time}
    //       dateTimeEnd={newItm.end_time}
    //       deleteSlot={deleteSlot}
    //     ></SlotInputField>
    //   );
    // });
    // setSlotList(newArr);
  };

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
            console.log("time", index, newItm.start_time, newItm.end_time);
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
        <h3>Select Slots</h3>
        {slotList}
        <div className={styles.addDone}>
          <button onClick={showHideSelectSlotTiming}>Add</button>
          <button onClick={showHideSelectSlots}>Done</button>
        </div>
      </div>
    </div>
  );
};
export default SelectSlots;
