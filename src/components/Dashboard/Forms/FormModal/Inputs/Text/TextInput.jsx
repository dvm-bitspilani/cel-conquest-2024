import styles from './textinput.module.scss'

export default function TextInput2({ name, heading, changeFn, blurFn, value }) {
    return (
        <div className={styles.inputGrp}>
            <label
                htmlFor={name}
                className={styles.label}>
                {heading}
            </label>
            <input
                type='text'
                id={name}
                name={name}
                onChange={changeFn}
                onBlur={blurFn}
                value={value}
                className={styles.input}
            />
        </div>
    )
}