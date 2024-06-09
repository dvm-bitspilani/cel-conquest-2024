import styles from './textinput.module.scss'

export default function TextInput() {
    return (
        <div className={styles.inputGrp}>
            <label
                htmlFor='question'
                className={styles.label}>
                Question
            </label>
            <input
                type='text'
                id='question'
                name='question'
                className={styles.input}
            />
        </div>
    )
}