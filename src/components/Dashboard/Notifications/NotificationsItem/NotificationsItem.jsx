import React from "react";
import styles from "./NotificationsItem.module.scss";

function NotificationsItem({time, message}) {
  return (
    <div className={styles.container}>
      <div className={styles.time}>{time}</div>
      <div className={styles.divider}></div>
      <div className={styles.message}>
        {message}
      </div>
    </div>
  );
}

export default NotificationsItem;
