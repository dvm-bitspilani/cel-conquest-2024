import axios from 'axios'

import styles from './decline.module.scss'

export default function DeclineMeet({ meetData }) {
    function clickHandler(e) {
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
                e.target.parentElement.parentElement.parentElement.remove()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <p className={styles.decline} onClick={clickHandler}>Reject</p>
    )
}