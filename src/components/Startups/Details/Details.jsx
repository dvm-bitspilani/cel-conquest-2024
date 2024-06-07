import * as styles from "./Details.module.scss"

export default function Details({ founder, cofounder1, cofounder2, location, stage}) {
    return (
        <>
            <div className={styles.title}>Startup <span>Details</span></div>
            <div className={styles.contentContainer}>
                <div><span className={styles.heading}>Founder : </span>{founder}</div>
                <div><span className={styles.heading}>Co-Founder 1 : </span>{cofounder1}</div>
                <div><span className={styles.heading}>Co-Founder 2 : </span>{cofounder2}</div>
                <div><span className={styles.heading}>Location HQ : </span>{location}</div>
                <div><span className={styles.heading}>Stage : </span>{stage}</div>
            </div>
        </>
    )
}