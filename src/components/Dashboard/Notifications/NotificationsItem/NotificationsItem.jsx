import React from "react";
import styles from "./NotificationsItem.module.scss";

function NotificationsItem() {
  return (
    <div className={styles.container}>
      <div className={styles.time}>10:00</div>
      <div className={styles.divider}></div>
      <div className={styles.message}>
        You have an upcoming meeting in 3 more days with Mr. Goswami
      </div>
    </div>
  );
}

export default NotificationsItem;
