import { useFormik } from 'formik'
import axios from 'axios'

import styles from './form.module.scss'

export default function ProfileForm() {
    return (
        <main className={styles.form}>
            <form className={styles.wrapper}>
                <button type='submit' className={styles.submit}>Submit</button>
            </form>
        </main>
    )
}