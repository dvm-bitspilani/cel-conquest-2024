import MeetingList from "../../../components/MeetingList/MeetingList"
import MeetingItem from '../../../components/MeetingList/MeetingItem/MeetingItem';
import avatar from '../../../assets/images/Dashboard/demoAvatar.jpeg'

import * as styles from './home.module.scss'

export default function Home() {
  const listItms = [];
  for (let j = 0; j < 6; j++) {
    const newItm = (
      <MeetingItem
        date="May 24, 2024, 00:30:00"
        avatar={avatar}
        mentorName="Bhavesh"
        duration={30}
        // isGrayLink={true}
        key={j}
      />
    );
    listItms.push(newItm);
  }

  return (
    <div className={styles.container}>
      <div className={styles.meetings}>
        <p className={styles.bs}>Bs</p>
        <MeetingList listItms={listItms} />
      </div>
      <div className={styles.right}>
        <h1>Pod</h1>
      </div>
    </div>
  )
}