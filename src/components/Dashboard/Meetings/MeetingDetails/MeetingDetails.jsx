import styles from "./MeetingDetails.module.scss";

const MeetingDetails = () => {
  return (
    <div className={styles.MeetingDetailsContainer}>
      <h3>Meeting details</h3>
      <p>Confirmed</p>
      <div>
        <p>Meeting ID</p>
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
    </div>
  );
};
export default MeetingDetails;
