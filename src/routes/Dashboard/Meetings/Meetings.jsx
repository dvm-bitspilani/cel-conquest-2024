import styles from "./meetings.module.scss";

const Meetings = () => {
  return (
    <div className={styles.meetingsContainer}>
      <div className={styles.meetingsList}>
        <div className={styles.meetingsListOptionsContainer}>
          <div className={`${styles.meetingsListOptions} ${styles.active}`}>
            Upcoming
          </div>
          <div className={styles.meetingsListOptions}>Pending</div>
          <div className={styles.meetingsListOptions}>Past</div>
        </div>
      </div>
      <div className={styles.meetingsDetails}></div>
    </div>
  );
};
export default Meetings;
