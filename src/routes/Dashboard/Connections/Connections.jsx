import React, { useEffect } from "react";
import styles from "./Connections.module.scss";
import { useState } from "react";
import ConnectionListItem from "../../../components/Connections/ConnectionListItem/ConnectionListItem";
import axios from "axios";
import { List } from "antd";

function Connections() {
  const [listTab, setListTab] = useState("pending");
  const [listItms, setListItms] = useState([]);

  useEffect(() => {
    getList(listTab);
  }, []);

  const getList = (listTab) => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      // console.log("fetching data");
      axios
        .get(`https://portal.conquest.org.in/api/users/connections/list/`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).tokens.access
            }`,
          },
        })
        .then((res) => {
          // console.log(res.data);
          // console.log(listTab);
          const newArr =
            listTab == "pending"
              ? res.data.connection_unaccepted_recieved.map((newItm) => {
                  // console.log(newItm);
                  return (
                    <ConnectionListItem
                      key={newItm.id}
                      listTab={listTab}
                      name={newItm.from_user.name}
                      designation={newItm.from_user.designation}
                      img={newItm.from_user.profile_logo}
                      type={newItm.from_user.role}
                      id={newItm.id}
                    ></ConnectionListItem>
                  );
                })
              : res.data.connected_users.map((newItm) => {
                  // console.log(newItm);
                  return (
                    <ConnectionListItem
                      key={newItm.connection_id}
                      listTab={listTab}
                      name={newItm.user.name}
                      designation={newItm.user.designation}
                      img={newItm.user.profile_logo}
                      type={newItm.user.role}
                      id={newItm.connection_id}
                    ></ConnectionListItem>
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
    <>
      <div className={styles.mobileContainer}>Connections</div>
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
        <div className={styles.connectionList}>{listItms}</div>
      </div>
    </>
  );
}

// className={`${styles.meetingsListOptions} ${
//   listTab === "pending" ? styles.active : null
// }`}

export default Connections;
