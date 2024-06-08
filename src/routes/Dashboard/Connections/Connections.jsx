import React from "react";
import styles from "./Connections.module.scss";
import { useState } from "react";
import ConnectionListItem from "../../../components/Connections/ConnectionListItem/ConnectionListItem";

function Connections() {
  const [listTab, setListTab] = useState("pending");

  const getList = (listTab) => {
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
              <ConnectionListItem></ConnectionListItem>
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

  return (
    <div className={styles.container}>
      <div className={styles.ButtonContainer}>
        <button
          onClick={() => {
            setListTab("pending");
            getList("pending");
          }}
          className={`${styles.ConnectionsButton} ${
            listTab === "pending" ? styles.active : null
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => {
            setListTab("connections");
            getList("connections");
          }}
          className={`${styles.ConnectionsButton} ${
            listTab === "connections" ? styles.active : null
          }`}
        >
          My Connections
        </button>
      </div>
    </div>
  );
}

// className={`${styles.meetingsListOptions} ${
//   listTab === "pending" ? styles.active : null
// }`}

export default Connections;
