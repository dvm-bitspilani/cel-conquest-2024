import { useContext, useState } from 'react'
import axios from 'axios'

import styles from './decline.module.scss'
import { WebContext } from '../../../../store/website-context'

export default function DeclineMeet({ meetData }) {
    const { displayMessage } = useContext(WebContext)
    const [isLoading, setIsLoading] = useState(false)
    function clickHandler(e) {
        setIsLoading(true)
        axios.patch(`https://conquest-api.bits-dvm.org/api/meetings/requests/${meetData.id}/`, {
            status: "rejected",
            slot: meetData.slot
        }, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access}`
            }
        })
            .then(res => {
                console.log(res)
                e.target.parentElement.parentElement.parentElement.style.display = "none"
                displayMessage('success', "Meeting Rejected", 2)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                displayMessage('error', "An error occured", 2)
            })
    }

    return (
        <>
            {isLoading ? <p className={`${styles.decline} ${styles.loading}`}>Reject</p> : <p className={styles.decline} onClick={clickHandler}>Reject</p>}
        </>
    )
}
