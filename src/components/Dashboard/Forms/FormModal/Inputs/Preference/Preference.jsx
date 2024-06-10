import { Reorder } from "framer-motion"
import { useEffect, useState } from "react"

import styles from './preference.module.scss'

export default function Preference({ options, name, manualValue, heading }) {
    const [items, setItems] = useState(options)

    useEffect(() => {
        // console.log(items)
        const answerKey = items.map(answer => {
            return (
                {
                    id: answer.id,
                    position: items.indexOf(answer)
                }
            )
        })
        // console.log(answerKey)
        manualValue(name, answerKey)
    }, [items])

    return (
        <div className={styles.container}>
            <p className={styles.label}>{heading}</p>
            <Reorder.Group values={items} onReorder={setItems}>
                {items.map(item => (
                    <Reorder.Item key={item.preference_name} value={item}>
                        <div className={styles.option}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item.preference_name}
                        </div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    )
}