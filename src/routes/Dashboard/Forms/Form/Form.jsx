import { useParams } from 'react-router-dom'

import styles from './form.module.scss'

export default function Form() {
    const { formId } = useParams()

    return (
        <div className={styles.form}>
            <h1>{formId}</h1>
        </div>
    )
}