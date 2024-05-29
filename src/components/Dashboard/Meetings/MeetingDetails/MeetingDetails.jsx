import styles from "./MeetingDetails.module.scss";

const MeetingDetails = () => {
  return (
    <div className={styles.MeetingDetailsContainer}>
      <h3>Meeting details</h3>
      <p>Confirmed</p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M15.8333 2.5L4.16658 10L15.8333 17.5V2.5Z" fill="#111213" />
        </svg>
        <div></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M4.16675 2.5L15.8334 10L4.16675 17.5V2.5Z" fill="#111213" />
        </svg>
      </div>
      <div>
        <div></div>
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
            stroke="#A0A0A0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 1V4"
            stroke="#A0A0A0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 1V4"
            stroke="#A0A0A0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 1V4"
            stroke="#A0A0A0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div></div>
      </div>
      <div>
        <p>with</p>
        <p>bhavesh</p>
        <p>+91 00001 00001</p>
      </div>
      <div>
        <div>
          <div>Date & Time</div>
          <div>
            <div>May 25th</div>
            <div>15:30 - 16:00</div>
          </div>
        </div>
        <div>
          <div>Join meet</div>
          <div>
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.83325 5.83325H14.1666V14.1666"
                stroke="#138CFD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetingDetails;
