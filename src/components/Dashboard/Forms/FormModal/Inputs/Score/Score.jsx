import { useEffect, useState } from 'react'
import styles from './score.module.scss'

export default function Score({ name, heading, changeFn }) {
    const [selectedRadio, setSelectedRadio] = useState(null)

    const radios = []

    for (let i = 1; i <= 10; i++) {
        radios.push(
            <div className={styles.radioWrapper} key={`${name}${i}`}>
                <input
                    type="radio"
                    name={name}
                    onChange={changeFn}
                    value={i}
                />
                <span
                    className={styles.numCircles}
                    onClick={() => setSelectedRadio(i)}
                >
                    {i}
                </span>
            </div>
        )
    }

    useEffect(() => {
        if (selectedRadio) {
            document.querySelectorAll(`input[name="${name}"]`)[selectedRadio - 1].click()
        }
    }, [selectedRadio])

    return (
        <div className={styles.inputGrp}>
            <label htmlFor={name} className={styles.label}>{heading}</label>
            <div className={styles.radioGrid}>
                {radios}
            </div>
        </div>
    )
}