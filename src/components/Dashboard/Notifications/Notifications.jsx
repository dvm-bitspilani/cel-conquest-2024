import React from "react";
import styles from "./Notifications.module.scss";
import NotificationsItem from "./NotificationsItem/NotificationsItem";
import { date } from "yup";

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
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Notifications({ isNotifVisible, setIsNotifVisible, notifsData }) {
  console.log(1, notifsData);
  let date;
  let notifs = notifsData.map((notif, index) => {
    let time = new Date(notif.timestamp);
    let fullTime = `${time.getHours()}:${time.getMinutes()}`;
    if (index === 0) {
      let newdate = new Date(notif.timestamp);
      date = newdate.getDate();
      console.log("012345134");
      return (
        <>
          <p key={index + "p"}>{month[time.getMonth()]} {date}, 2024</p>
          <NotificationsItem
            key={index}
            time={fullTime}
            message={notif.message}
          />
        </>
      );
    }

    if (date !== time.getDate()) {
      date = time.getDate();
      console.log("hello");
      return (
        <>
          <p>{date}</p>
          <NotificationsItem
            key={index}
            time={fullTime}
            message={notif.message}
          />
        </>
      );
    }
    console.log("11111111111111111");
    return (
      <NotificationsItem key={index} time={fullTime} message={notif.message} />
    );
  });

  console.log(2, notifs);

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
      {notifs}
    </div>
  );
}

export default Notifications;
