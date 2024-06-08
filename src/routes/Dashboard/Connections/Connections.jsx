import React from "react";
import styles from "./Connections.module.scss";

function Connections() {
  return <div className={styles.container}>
    <div className={styles.ButtonContainer}>
      <button className={styles.PendingButton}>Pending</button>
      <button className={styles.ConnectionsButton}>My Connections</button>
    </div>
  </div>;
}

export default Connections;
