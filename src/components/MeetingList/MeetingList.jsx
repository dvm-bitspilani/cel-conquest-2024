import MeetingItem from './MeetingItem/MeetingItem'

import * as styles from './MeetingList.module.scss'

import avatar from '../../assets/images/Dashboard/demoAvatar.jpeg'

export default function MeetingList() {
    return (
        <div className={styles.wrapper}>
            <MeetingItem
                date='May 24, 2024, 00:30:00'
                avatar={avatar}
                mentorName='Bhavesh'
                duration={30}
            />
        </div>
    )
}