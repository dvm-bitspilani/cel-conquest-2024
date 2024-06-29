import { useContext, useState } from 'react'
import axios from 'axios'

import styles from './accept.module.scss'
import { WebContext } from '../../../../store/website-context'

export default function AcceptMeet({ meetData }) {
    const { displayMessage } = useContext(WebContext)
    const [isLoading, setIsLoading] = useState(false)
    // console.log(meetData)
    function clickHandler(e) {
        setIsLoading(true)
        axios.patch(`https://portal.conquest.org.in/api/meetings/requests/${meetData.id}/`, {
            status: "accepted",
            slot: meetData.slot
        }, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access}`
            }
        })
            .then(res => {
                console.log(res)
                e.target.parentElement.parentElement.parentElement.style.display = "none"
                displayMessage('success', "Meeting Accepted", 2)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                displayMessage('error', "An error occured", 2)
            })
    }

    return (
        <>
            {isLoading ? <p className={`${styles.accept} ${styles.loading}`}>Accept</p> : <p className={styles.accept} onClick={clickHandler}>Accept</p>}
        </>
    )
}