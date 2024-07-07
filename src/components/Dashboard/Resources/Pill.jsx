import { useState } from 'react'
import styles from './pill.module.scss'
import InterestCaptureBtn from './InterestCapture'

export default function ResourcePill({ title, description, url, avatar, offering, fullData }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className={styles.box}>
            <div className={styles.avatarContainer}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>
                    <span className={isExpanded ? styles.text : `${styles.text} ${styles.truncated}`}>
                        {`${description}\n\n${offering}\n\n`}
                        {/* {isExpanded ?  : null} */}
                        {isExpanded && (
                            <span className={styles.wrapper}>
                                <InterestCaptureBtn data={fullData} />
                                <span
                                    className={styles.expander}
                                    onClick={() => setIsExpanded(false)}
                                >&nbsp;less</span>
                            </span>
                        )}
                    </span>
                    {isExpanded ? null : (
                        <span
                            className={styles.expander}
                            onClick={() => setIsExpanded(true)}
                        >
                            more
                        </span>
                    )}
                </p>
            </div>
            <div className={styles.urlContainer}>
                <a href={url} className={styles.url}>Visit</a>
            </div>
        </div>
    )
}