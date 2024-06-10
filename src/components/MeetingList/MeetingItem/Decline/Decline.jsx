import styles from './decline.module.scss'

export default function DeclineMeet() {
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
        <p className={styles.decline} onClick={clickHandler}>Reject</p>
    )
}