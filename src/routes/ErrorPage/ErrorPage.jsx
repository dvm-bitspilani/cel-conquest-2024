import { Link } from 'react-router-dom'

import * as styles from './errorPage.module.scss'

export default function ErrorPage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>Coming Soon</h1>
            <Link to='/'>Go Home</Link>
        </main>
    )
}