import { Avatar, ConfigProvider } from "antd";

import JoinMeet from "./Join/Join";
import DeclineMeet from "./Decline/Decline";
import AcceptMeet from "./Accept/Accept";

import * as styles from "./item.module.scss";
import { useContext } from "react";
import { WebContext } from "../../../store/website-context";

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
  const { customDate } = useContext(WebContext)

  const month = new customDate(date).getMonth()
  const fullDate = new customDate(date).getDate()
  const time = new customDate(date).getFullTime()

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
        <span>{time}</span>
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
        <span>{month} {fullDate}</span>
        {content}
      </div>
    </div>
  );
}
