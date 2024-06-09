import styles from './score.module.scss'

export default function Score({ name, heading, changeFn }) {
    return (
        <div className={styles.inputGrp}>
            <label htmlFor={name}>{heading}</label>
            <input type="radio" name={name} onChange={changeFn} value={1} />
            <input type="radio" name={name} onChange={changeFn} value={2} />
            <input type="radio" name={name} onChange={changeFn} value={3} />
            <input type="radio" name={name} onChange={changeFn} value={4} />
            <input type="radio" name={name} onChange={changeFn} value={5} />
            <input type="radio" name={name} onChange={changeFn} value={6} />
            <input type="radio" name={name} onChange={changeFn} value={7} />
            <input type="radio" name={name} onChange={changeFn} value={8} />
            <input type="radio" name={name} onChange={changeFn} value={9} />
            <input type="radio" name={name} onChange={changeFn} value={10} />
        </div>
    )
}