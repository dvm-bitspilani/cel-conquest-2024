import { Avatar, ConfigProvider } from "antd";

import JoinMeet from "./Join/Join";
import DeclineMeet from "./Decline/Decline";
import AcceptMeet from "./Accept/Accept";

import * as styles from "./item.module.scss";

export default function MeetingItem({
  date,
  avatar,
  mentorName,
  duration,
  isGrayLink = false,
  data,
  dataRef,
  handleClick,
  isGlobal,
  type = "join",
}) {
  const dateObj = new Date(date * 1000);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    dateObj
  );
  const meetDate = dateObj.getDate();

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const period = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12;
  const fullTime = `${adjustedHours}:${formattedMinutes} ${period}`;

  let content;
  switch (type) {
    case "accept":
      content = (
        <div>
          <AcceptMeet meetData={data} />
        </div>
      );
      break;
    case "decline":
      content = (
        <div>
          <DeclineMeet meetData={data} />
        </div>
      );
      break;
    case "join":
      content = <JoinMeet isGrayLink={isGrayLink} meetData={data} />;
      break;
    case "accept-decline":
      content = (
        <div className={styles.acceptDecline}>
          <AcceptMeet meetData={data} />
          <DeclineMeet meetData={data} />
        </div>
      );
      break;
    default:
      content = <JoinMeet isGrayLink={isGrayLink} />;
      break;
  }

  return (
    <div
      className={`${styles.itemBox} ${isGlobal ? styles.global : ""}`}
      onClick={(e) => {
        if (document.querySelector("#selected-meeting-item")) {
          document
            .querySelector("#selected-meeting-item")
            .removeAttribute("id");
        }
        if (e.target.tagName !== "A") {
          e.currentTarget.id = "selected-meeting-item";
        }

        // LIFTING CLICK DATA TO HOME COMPONENT
        dataRef.current = data;
        handleClick();
      }}
    >
      <div className={styles.time}>
        <span>{fullTime}</span>
        <span>{`${duration} minutes`}</span>
      </div>
      <div className={styles.mentor}>
        <div className={styles.avatarWrapper}>
          <ConfigProvider
            theme={{
              token: {
                lineWidth: 0,
              },
            }}
          >
            <Avatar
              size={{
                xs: 48,
                sm: 64,
                md: 48,
                lg: 48,
                xl: 64,
                xxl: 80,
              }}
              icon={<img src={avatar} alt="user avatar" />}
            />
          </ConfigProvider>
        </div>
        <div className={styles.nameWrapper}>
          <span>With</span>
          <span>{mentorName}</span>
        </div>
      </div>
      <div className={styles.link}>
        <span>{`${month} ${meetDate}${meetDate % 10 === 1
          ? "st"
          : meetDate % 10 === 2
            ? "nd"
            : meetDate % 10 === 3
              ? "rd"
              : "th"
          }`}</span>
        {content}
      </div>
    </div>
  );
}
