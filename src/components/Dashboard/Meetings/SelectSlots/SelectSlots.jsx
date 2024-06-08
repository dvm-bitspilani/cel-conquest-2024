import { useEffect, useState } from "react";
import styles from "./SelectSlots.module.scss";
import SlotInputField from "./SlotInputField/SlotInputField";
import axios from "axios";

const SelectSlots = ({ showHideSelectSlotTiming, showHideSelectSlots }) => {
  const [slotList, setSlotList] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('userData')).tokens) {
      axios.get('https://conquest-api.bits-dvm.org/api/meetings/slots/', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).tokens.access}`
        }
      })
        .then((res) => {
          console.log(res.data)

          const newArr = res.data.map((newItm, index) => {
            return (
              // <MeetingItem
              //   date={newItm.slot_start_time}
              //   avatar={newItm.requested_logo}
              //   mentorName={newItm.requested_name}
              //   duration={45}
              //   key={newItm.id}
              //   // data={newItm}
              //   handleClick={handleClick}
              //   dataRef={dataRef}
              // />
              <SlotInputField id={index+1} showHideSelectSlotTiming={showHideSelectSlotTiming} dateTimeStart={newItm.start_time} dateTimeEnd={newItm.end_time}></SlotInputField>
            )
          })

          setSlotList(newArr)

          // for (let i = 0; i < 6; i++) {
          //   const newItm = (
          //     <MeetingItem
          //       date="May 24, 2024, 00:30:00"
          //       avatar={avatar}
          //       mentorName="Bhavesh"
          //       duration={30}
          //       // isGrayLink={true}
          //       key={Math.random()}
          //       data={{ test: 'hello', id: i }}
          //       handleClick={handleClick}
          //       dataRef={dataRef}
          //     />
          //   )

          //   setListItms(prev => {
          //     return [...prev, newItm]
          //   })
          // }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      console.log("error in fetching data")
    }
  }, [JSON.parse(localStorage.getItem('userData')).tokens.access])


  return (
    <div className={styles.SelectSlots}>
      <h3>Select Slots</h3>
      {slotList}
      <div className={styles.addDone}>
        <button onClick={showHideSelectSlotTiming}>Add</button>
        <button onClick={showHideSelectSlots}>Done</button>
      </div>
    </div>
  );
};
export default SelectSlots;
