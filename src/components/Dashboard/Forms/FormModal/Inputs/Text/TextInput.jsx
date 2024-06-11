import styles from './textinput.module.scss'

export default function TextInput2({ name, heading, changeFn, blurFn, value, type }) {
    return (
        <div className={styles.inputGrp}>
            <label
                htmlFor={name}
                className={styles.label}>
                {heading}
            </label>
            {type !== 'long' ? (
                <input
                    type='text'
                    id={name}
                    name={name}
                    onChange={changeFn}
                    onBlur={blurFn}
                    value={value}
                    className={`${styles.input} ${styles[type]}`}
                />
            ) : (
                <textarea
                    id={name}
                    name={name}
                    onChange={changeFn}
                    onBlur={blurFn}
                    value={value}
                    className={`${styles.input} ${styles[type]}`}
                />
            )}
        </div>
    )
}