import styles from "./MeetingDetails.module.scss";

const MeetingDetails = ({ myData, listTab }) => {
  console.log(1, myData, 1);

  const startTime = myData.slot_start_time;
  const endTime = myData.slot_end_time;

  const dateObj = new Date(startTime * 1000);
  const dateObjEnd = new Date(endTime * 1000);
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

  const hoursEnd = dateObjEnd.getHours();
  const minutesEnd = dateObjEnd.getMinutes();
  const formattedMinutesEnd = minutesEnd < 10 ? `0${minutesEnd}` : minutesEnd;
  const periodEnd = hoursEnd >= 12 ? "PM" : "AM";
  const adjustedHoursEnd = hoursEnd % 12 || 12;
  const fullTimeEnd = `${adjustedHoursEnd}:${formattedMinutesEnd} ${periodEnd}`;

  return (
    <div className={styles.MeetingDetailsContainer}>
      <div className={styles.MeetingDetails}>
        <h3 className={styles.MeetingDetailsHeader}>Meeting details</h3>
        <p className={styles.MeetingStatus}>
          {startTime === myData.slot_start_time
            ? (myData.status ? myData.status.charAt(0).toUpperCase() + myData.status.slice(1) : "Global")
            : ""}
        </p>
        <div className={styles.DateSlider}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.8333 2.5L4.16658 10L15.8333 17.5V2.5Z"
              fill="#111213"
            />
          </svg> */}
          <div>
            {meetDate} {month.slice(0, 3)}, 2024
          </div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.16675 2.5L15.8334 10L4.16675 17.5V2.5Z"
              fill="#111213"
            />
          </svg> */}
        </div>
        <div className={styles.photos}>
          <div className={styles.avatarContainer}>
            <img src={myData.requested_logo} alt="" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18"
              stroke="#A0A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
              stroke="#A0A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 1V4"
              stroke="#A0A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1V4"
              stroke="#A0A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 1V4"
              stroke="#A0A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.avatarContainer}>
            <img src={myData.requester_logo} alt="" />
          </div>
        </div>
        <div className={styles.personDetails}>
          <p>with</p>
          <p>
            {myData.requested_name ===
              JSON.parse(localStorage.getItem("userData")).user_profile_obj.name
              ? myData.requester_name
              : myData.requested_name}
          </p>
          {/* <p>+91 00001 00001</p> */}
        </div>
        <div className={styles.lowerContent}>
          <div className={styles.upper}>
            <div className={styles.lowerBold}>Date & Time</div>
            <div className={styles.dateTime}>
              <p>
                {month.slice(0, 3)} {meetDate}
                {meetDate % 10 === 1
                  ? "st"
                  : meetDate % 10 === 2
                    ? "nd"
                    : meetDate % 10 === 3
                      ? "rd"
                      : "th"}
              </p>
              <p>
                {fullTime} - {fullTimeEnd}
              </p>
            </div>
          </div>
          {listTab === 'upcoming' ? (
            <div className={styles.lower}>
              <p className={styles.lowerBold}>Join meet</p>
              <a href={myData.meet_link}>
                <div className={styles.joinLink}>
                  <p>Click to join</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.83325 14.1666L14.1666 5.83325"
                      stroke="#138CFD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83325 5.83325H14.1666V14.1666"
                      stroke="#138CFD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default MeetingDetails;
