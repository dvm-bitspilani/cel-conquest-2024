import styles from './form.module.scss'

export default function Form({ data }) {
    return (
        <>
            <button type='submit' className={styles.submit}>Submit</button>
        </>
    )
}