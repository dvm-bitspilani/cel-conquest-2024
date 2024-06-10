import { Reorder } from "framer-motion"
import { useEffect, useState } from "react"

import styles from './preference.module.scss'

export default function Preference({ options, name, manualValue, heading }) {
    const [items, setItems] = useState(["First", "Second", "Third", "Fourth"])

    useEffect(() => {
        console.log(items)
    }, [items])

    return (
        <div className={styles.container}>
            <p className={styles.label}>{heading}</p>
            <Reorder.Group values={items} onReorder={setItems}>
                {items.map(item => (
                    <Reorder.Item key={item} value={item}>
                        <div className={styles.option}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item}
                        </div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    )
}