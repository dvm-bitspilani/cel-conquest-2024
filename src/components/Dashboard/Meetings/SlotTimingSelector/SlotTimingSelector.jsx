import axios, { formToJSON } from "axios";
import SlotDateButton from "./SlotDateButton/SlotDateButton";
import TimeSelectButton from "./TimeSelectButton/TimeSelectButton";
import TimeSelectButtonHeader from "./TimeSelectButtonHeader/TimeSelectButtonHeader";
import styles from "./slotTimingSelector.module.scss";
import { useState } from "react";

const morningSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  >
    <g clipPath="url(#clip0_827_3605)">
      <path
        d="M14.4185 15.0002C14.4185 13.8951 13.9796 12.8353 13.1981 12.0539C12.4167 11.2725 11.3569 10.8335 10.2519 10.8335C9.1468 10.8335 8.08699 11.2725 7.30559 12.0539C6.52419 12.8353 6.08521 13.8951 6.08521 15.0002"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.252 1.6665V7.49984"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.76855 8.5166L4.95189 9.69993"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.08521 15H2.75187"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.752 15H19.4186"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5518 9.69993L16.7351 8.5166"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4185 18.3335H1.08521"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91846 4.99984L10.2518 1.6665L13.5851 4.99984"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_827_3605">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.251953)"
        />
      </clipPath>
    </defs>
  </svg>
);

const afternoonSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  >
    <g clipPath="url(#clip0_827_3642)">
      <path
        d="M10.7519 14.1668C13.0531 14.1668 14.9185 12.3013 14.9185 10.0002C14.9185 7.69898 13.0531 5.8335 10.7519 5.8335C8.45068 5.8335 6.58521 7.69898 6.58521 10.0002C6.58521 12.3013 8.45068 14.1668 10.7519 14.1668Z"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.752 0.833496V2.50016"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.752 17.5V19.1667"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.26855 3.5166L5.45189 4.69993"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0518 15.2998L17.2351 16.4831"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.58521 10H3.25187"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.252 10H19.9186"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.26855 16.4831L5.45189 15.2998"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0518 4.69993L17.2351 3.5166"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_827_3642">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.751953)"
        />
      </clipPath>
    </defs>
  </svg>
);

const eveningSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  >
    <g clipPath="url(#clip0_827_3680)">
      <path
        d="M14.4188 15.0002C14.4188 13.8951 13.9798 12.8353 13.1984 12.0539C12.417 11.2725 11.3572 10.8335 10.2521 10.8335C9.14705 10.8335 8.08724 11.2725 7.30584 12.0539C6.52444 12.8353 6.08545 13.8951 6.08545 15.0002"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.252 7.49984V1.6665"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.76855 8.5166L4.95189 9.69993"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.08545 15H2.75212"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.752 15H19.4186"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5522 9.69993L16.7356 8.5166"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4188 18.3335H1.08545"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5856 4.1665L10.2523 7.49984L6.91895 4.1665"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_827_3680">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.251953)"
        />
      </clipPath>
    </defs>
  </svg>
);

const SlotTimingSelector = ({ selectSlotTiming, removeModal }) => {
  const changeDate = (date, month, year) => {
    setDateTime((prev) => {
      return { ...prev, date: date, month: month, year: year };
    });
  };
  const changeTime = (time) => {
    setDateTime((prev) => {
      return { ...prev, time: time };
    });
  };

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekday_mobile = ["Su", "M", "T", "W", "Th", "F", "Sa"];

  const d = new Date();
  let week = weekday;
  if (screen.width < 820) {
    week = weekday_mobile;
  }
  const days = [];
  for (let i = 0; i < 7; i++) {
    days[i] = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
  }
  let dateComponents = [];
  const [dateTime, setDateTime] = useState({
    date: days[0].getDate(),
    time: "9:00",
    month: days[0].getMonth(),
    year: days[0].getFullYear(),
  });
  for (let i = 0; i < 7; i++) {
    dateComponents[i] = (
      <SlotDateButton
        key={i}
        changeDate={changeDate}
        month={days[i].getMonth()}
        day={week[days[i].getDay()]}
        date={days[i].getDate()}
        year={days[i].getFullYear()}
        active={dateTime.date === days[i].getDate() ? true : false}
      ></SlotDateButton>
    );
  }
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
  const createSlot = (dateTime) => {
    const date = new Date(
      `${month[dateTime.month]}} ${dateTime.date}, ${dateTime.year} ${
        dateTime.time
      } GMT+0530`
    );
    // console.log(date);
    let unixTimeStamp = date.getTime() / 1000;
    unixTimeStamp = Number(unixTimeStamp) - (60*60*6) - (60*30);
    const unixTimeStamp2 = Number(unixTimeStamp) + 45 * 60;
    // console.log({
    //   user: "1",
    //   start_time: unixTimeStamp,
    //   end_time: unixTimeStamp2,
    // });
    axios
      .post(
        "https://conquest-api.bits-dvm.org/api/meetings/slots/",
        {
          user: "1",
          start_time: unixTimeStamp,
          end_time: unixTimeStamp2,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).tokens.access
            }`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const date = new Date(
    `${month[dateTime.month]}} ${dateTime.date}, ${dateTime.year} ${
      dateTime.time
    } GMT+0530`
  );
  // console.log(dateTime);
  // console.log(date);
  return (
    <>
      <div
        style={{ display: selectSlotTiming ? "flex" : "none" }}
        className={styles.modalContainer}
      >
        <div className={styles.header}>
          <svg
            onClick={() => removeModal()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5"
              stroke="#111213"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="#111213"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2>Select Slot 1</h2>
        </div>
        <div className={styles.slotDataButtonContainer}>{dateComponents}</div>
        <div className={styles.slotTimingContainer}>
          <div>
            <TimeSelectButtonHeader svg={morningSvg} header="Morning" />
            <TimeSelectButton
              time={"9:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"10:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"11:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"12:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
          </div>
          <div>
            <TimeSelectButtonHeader svg={afternoonSvg} header="Afternoon" />
            <TimeSelectButton
              time={"13:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"14:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"15:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"16:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
          </div>
          <div>
            <TimeSelectButtonHeader svg={eveningSvg} header="Evening" />
            <TimeSelectButton
              time={"17:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"18:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"19:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
            <TimeSelectButton
              time={"20:00"}
              changeTime={changeTime}
              dateTime={dateTime}
            />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p>Select a 45 min. slot</p>
          <button
            onClick={() => {
              createSlot(dateTime);
              removeModal();
            }}
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
};
export default SlotTimingSelector;
