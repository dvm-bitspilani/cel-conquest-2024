import axios from 'axios'

import styles from './accept.module.scss'

export default function AcceptMeet() {
    function clickHandler(e) {
        // axios.post('someurl', { some content }, {
        //     headers: {
        //         Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access}`
        //     }
        // })
        //     .then(res => {
        //         console.log(res)
        //         e.target.parentElement.parentElement.parentElement.remove()
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    return (
        <p className={styles.accept} onClick={clickHandler}>Accept</p>
    )
}