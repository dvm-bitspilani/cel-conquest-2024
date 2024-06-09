import TextInput from '../Inputs/Text/TextInput'

import styles from './form.module.scss'

export default function Form({ data }) {
    return (
        <main className={styles.form}>
            <div className={styles.wrapper}>
                <TextInput />
                <button type='submit' className={styles.submit}>Submit</button>
            </div>
        </main>
    )
}