import { useState } from "react"

import styles from './interest.module.scss'

export default function InterestCaptureBtn() {
    const [isInterestCapture, setIsInterestCapture] = useState(true)

    return (
        <a
            className={styles.interest}
            onClick={() => {
                if (isInterestCapture) {
                    setIsInterestCapture(false)
                }
                else {
                    console.log("email sent")
                }
            }}
        >
            {isInterestCapture ? "Interest Capture" : "Send Details"}
        </a>
    )
}