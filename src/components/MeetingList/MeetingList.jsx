import * as styles from "./MeetingList.module.scss";

export default function MeetingList({ listItms, ...props }) {
    if (listItms.length < 1) {
        return (
            <div className={styles.wrapper} {...props}>
                <p className={styles.noMeetings}>No meetings scheduled</p>
            </div>
        );
    }

    const meetList = [];
    for (let i = 0; i < 3; i++) {
        const newWeek = (
            <div className={styles.week}>
                <p className={styles.weekHeading}>This Week</p>
                {...listItms}
            </div>
        );
        meetList.push(newWeek);
    }

    return (
        <div className={styles.wrapper} {...props}>
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
