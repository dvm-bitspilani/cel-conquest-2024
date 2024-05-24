import * as styles from './stepper.module.scss'
import StepperCircle from '../StepperCircle/StepperCircle'
import { useState } from 'react'

export default function Stepper({ activeCircle = 0 }) {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.circTail}>
                    <StepperCircle isFilled={activeCircle > 0 ? 'completed' : 'selected'} />
                    <div className={styles.tail}></div>
                </div>
                <section className={styles.content}>
                    <h2>Founder's Profile</h2>
                    <ul>
                        <li>About You</li>
                        <li>Team</li>
                    </ul>
                </section>
                <div className={styles.circTail}>
                    <StepperCircle isFilled={activeCircle > 1 ? 'completed' : (activeCircle === 1 ? 'selected' : '')} />
                    <div className={styles.tail}></div>
                </div>
                <section className={styles.content}>
                    <h2>Product</h2>
                    <ul>
                        <li>Details</li>
                        <li>Market</li>
                        <li>Vision</li>
                    </ul>
                </section>
                <div className={styles.circTail}>
                    <StepperCircle isFilled={activeCircle === 2 ? 'selected' : ''} />
                </div>
                <section className={styles.content}>
                    <h2>Imperative</h2>
                    <ul>
                        <li>Fundraising</li>
                        <li>Why Conquest</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}