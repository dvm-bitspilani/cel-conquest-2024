import React from "react";
import styles from "./Connections.module.scss";
import { useState } from "react";
import ConnectionListItem from "../../../components/Connections/ConnectionListItem/ConnectionListItem";
import axios from "axios";
import { List } from "antd";

function Connections() {
  const [listTab, setListTab] = useState("pending");
  const [listItms, setListItms] = useState([]);

  const getList = (listTab) => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      console.log("fetching data");
      axios
        .get(`https://conquest-api.bits-dvm.org/api/users/connections/list/`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).tokens.access
            }`,
          },
        })
        .then((res) => {
          console.log(res.data);

          const newArr = (listTab = "pending"
            ? res.data.connections_unaccepted_sent.map((newItm) => {
                console.log(newItm);
                return (
                  <ConnectionListItem
                    key={newItm.id}
                    listTab={listTab}
                    name={newItm.to_user.name}
                    designation={newItm.to_user.designation}
                    img={newItm.to_user.profile_logo}
                    type={newItm.to_user.role}
                  ></ConnectionListItem>
                );
              })
            : res.connected_users.map((newItm) => {
                return (
                  <ConnectionListItem listTab={listTab}></ConnectionListItem>
                );
              }));
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
            // console.log(listTab);
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
            // console.log(listTab);
            getList("connections");
          }}
          className={`${styles.ConnectionsButton} ${
            listTab === "connections" ? styles.active : null
          }`}
        >
          My Connections
        </button>
      </div>
      <div className={styles.connectionList}>
        <ConnectionListItem listTab={listTab} />
        <ConnectionListItem listTab={listTab} />
        {listItms}
      </div>
    </div>
  );
}

// className={`${styles.meetingsListOptions} ${
//   listTab === "pending" ? styles.active : null
// }`}

export default Connections;
