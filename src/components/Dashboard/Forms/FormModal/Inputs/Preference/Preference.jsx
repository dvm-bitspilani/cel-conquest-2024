import { Reorder } from "framer-motion"
import { useEffect, useState } from "react"

export default function Preference({ options, name, manualValue, heading }) {
    const [items, setItems] = useState(["First", "Second", "Third", "Fourth"])

    useEffect(() => {
        console.log(items)
    }, [items])

    return (
        <div>
            <Reorder.Group values={items} onReorder={setItems}>
                {items.map(item => (
                    <Reorder.Item key={item} value={item}>
                        {item}
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    )
}