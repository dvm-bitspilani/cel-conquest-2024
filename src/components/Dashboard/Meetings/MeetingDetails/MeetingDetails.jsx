import styles from "./MeetingDetails.module.scss";
import demoAvatar from "../../../../assets/images/Dashboard/demoAvatar.jpeg";

const MeetingDetails = () => {
  return (
    <div className={styles.MeetingDetailsContainer}>
      <div className={styles.MeetingDetails}>
        <h3 className={styles.MeetingDetailsHeader}>Meeting details</h3>
        <p className={styles.MeetingStatus}>Confirmed</p>
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
          <div>25 May, 2024</div>
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
            <img src={demoAvatar} alt="" />
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
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
              stroke="#A0A0A0"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 1V4"
              stroke="#A0A0A0"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1V4"
              stroke="#A0A0A0"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 1V4"
              stroke="#A0A0A0"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.avatarContainer}>
            <img src={demoAvatar} alt="" />
          </div>
        </div>
        <div className={styles.personDetails}>
          <p>with</p>
          <p>bhavesh</p>
          {/* <p>+91 00001 00001</p> */}
        </div>
        <div className={styles.lowerContent}>
          <div className={styles.upper}>
            <div className={styles.lowerBold}>Date & Time</div>
            <div className={styles.dateTime}>
              <p>May 25th</p>
              <p>15:30 - 16:00</p>
            </div>
          </div>
          <div className={styles.lower}>
            <p className={styles.lowerBold}>Join meet</p>
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
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83325 5.83325H14.1666V14.1666"
                  stroke="#138CFD"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetingDetails;
