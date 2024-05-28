import { Avatar, ConfigProvider } from 'antd';

import * as styles from './item.module.scss'

export default function MeetingItem({ date, avatar, mentorName, duration }) {
    const dateObj = new Date(date);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(dateObj);
    const meetDate = dateObj.getDate()

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const fullTime = hours > 12 ? `${hours - 12}:${minutes} PM` : (hours === 0 ? `12:${minutes} AM` : `${hours}:${minutes} AM`);
    return (
        <div className={styles.itemBox}>
            <div className={styles.gridLeft}>
                <div className={styles.time}>
                    <span>{fullTime}</span><span>{`${duration} minutes`}</span>
                </div>
                <div className={styles.mentor}>
                    <ConfigProvider
                        theme={{
                            token: {
                                lineWidth: 0
                            }
                        }}
                    >
                        <Avatar
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                            icon={<img src={avatar} alt="icon" />}
                        />
                    </ConfigProvider>
                    <div className={styles.nameWrapper}>
                        <span>With</span><span>{mentorName}</span>
                    </div>
                </div>
            </div>
            <div className={styles.link}>
                <span>{`${month} ${meetDate}${meetDate % 10 === 1 ? 'st' : (meetDate % 10 === 2 ? 'nd' : (meetDate % 10 === 3 ? 'rd' : 'th'))}`}</span>
                <span>Join</span>
            </div>
        </div>
    )
}