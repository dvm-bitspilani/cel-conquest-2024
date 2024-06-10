import React from "react";
import styles from "./Notifications.module.scss";
import NotificationsItem from "./NotificationsItem/NotificationsItem";

const cross = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

function Notifications({ isNotifVisible, setIsNotifVisible, notifsData }) {
  console.log(1, notifsData);
  return (
    <div
      style={{ display: isNotifVisible ? "flex" : "none" }}
      className={styles.container}
    >
      <div className={styles.notifHeader}>
        <h3>Notifications</h3>
        <div
          className={styles.cross}
          onClick={() => {
            setIsNotifVisible(!isNotifVisible);
          }}
        >
          {cross}
        </div>
      </div>
      <NotificationsItem />
      <NotificationsItem />
    </div>
  );
}

export default Notifications;
