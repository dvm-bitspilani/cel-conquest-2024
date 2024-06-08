import React from "react";
import styles from "./Connections.module.scss";

function Connections() {
  return (
    <div className={styles.container}>
      <div className={styles.ButtonContainer}>
        <div className={`${styles.meetingsListOptions} ${
            listTab === "pending" ? styles.active : null
          }`}
        >
          Pending
        </div>
        <button className={`${styles.ConnectionsButton}`}>
          My Connections
        </button>
      </div>
    </div>
  );
}

export default Connections;
