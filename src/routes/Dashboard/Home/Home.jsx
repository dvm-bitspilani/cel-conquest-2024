import MeetingList from "../../../components/MeetingList/MeetingList"

import * as styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <MeetingList />
    </div>
  )
}