import { useState } from 'react'
import axios from 'axios'

import styles from './accept.module.scss'

export default function AcceptMeet({ meetData }) {
    const [isLoading, setIsLoading] = useState(false)
    // console.log(meetData)
    function clickHandler(e) {
        setIsLoading(true)
        axios.patch(`https://conquest-api.bits-dvm.org/api/meetings/requests/${meetData.id}/`, {
            status: "accepted",
            slot: meetData.slot
        }, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access}`
            }
        })
            .then(res => {
                console.log(res)
                e.target.parentElement.parentElement.parentElement.remove()
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    return (
        <>
            {isLoading ? <p className={`${styles.accept} ${styles.loading}`}>Accept</p> : <p className={styles.accept} onClick={clickHandler}>Accept</p>}
        </>
    )
}