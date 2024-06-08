import React from "react";
import styles from "./Connections.module.scss";
import { useState } from "react";


function Connections() {
  const [listTab, setListTab] = useState("pending");
  const getList = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.ButtonContainer}>
        <button className={`${styles.ConnectionsButton}`}>Pending</button>
        <button className={`${styles.ConnectionsButton}`}>
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
