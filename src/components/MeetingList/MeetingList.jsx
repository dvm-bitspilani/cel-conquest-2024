import MeetingItem from "./MeetingItem/MeetingItem";

import * as styles from "./MeetingList.module.scss";

import avatar from "../../assets/images/Dashboard/demoAvatar.jpeg";

export default function MeetingList() {
  const meetList = [];
  for (let i = 0; i < 3; i++) {
    const listItms = [];
    for (let j = 0; j < 6; j++) {
      const newItm = (
        <MeetingItem
          date="May 24, 2024, 00:30:00"
          avatar={avatar}
          mentorName="Bhavesh"
          duration={30}
          key={j}
        />
      );
      listItms.push(newItm);
    }
    const newWeek = (
      <div className={styles.week}>
        <p className={styles.weekHeading}>This Week</p>
        {...listItms}
      </div>
    );
    meetList.push(newWeek);
  }

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.week}>
                <p className={styles.weekHeading}>This Week</p>
                <MeetingItem
                    date='May 24, 2024, 00:30:00'
                    avatar={avatar}
                    mentorName='Bhavesh'
                    duration={30}
                />
            </div> */}
      {...meetList}
    </div>
  );
}
