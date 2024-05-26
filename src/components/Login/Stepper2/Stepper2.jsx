import * as styles from './stepper.module.scss';

import { Slider, ConfigProvider } from 'antd';
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Stepper2() {
    // Temporary state and function for testing
    const [stepperPos, setStepperPos] = useState(0)

    useGSAP(() => {
        gsap.to('.ant-slider-handle', {
            top: `${stepperPos}%`,
            ease: "power1.inOut",
            duration: 0.5
        })

        gsap.to('.ant-slider-track', {
            height: `${stepperPos}%`,
            ease: "power1.inOut",
            duration: 0.5
        })
    }, { dependencies: [stepperPos] })

    function stepInc() {
        setStepperPos(prev => {
            if (prev === 100) {
                return 0
            }
            return prev + 20
        })
    }

    return (
        <>
            {/* Temporary button for testing */}
            <button
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0
                }}
                onClick={stepInc}
            >
                Step
            </button>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.stepperContainer}>
                        <div style={{ height: '80%' }}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorBgElevated: '#FB723D',
                                        colorPrimaryBorderHover: '#FFFFFF'
                                    },
                                    components: {
                                        Slider: {
                                            handleColor: '#FFFFFF',
                                            handleSize: 22,
                                            handleLineWidth: 4,
                                            railBg: '#FFC4A6',
                                            railSize: 3,
                                            trackBg: '#FFFFFF'
                                        }
                                    }
                                }}
                            >
                                <Slider
                                    vertical
                                    keyboard={false}
                                    reverse={true}
                                    tooltip={{
                                        open: false
                                    }}
                                />
                            </ConfigProvider>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.content}>
                            <h2>Founder's Profile</h2>
                            <ul>
                                <li>About You</li>
                                <li>Team</li>
                            </ul>
                        </div>
                        <div className={styles.content}>
                            <h2>Product</h2>
                            <ul>
                                <li>Details</li>
                                <li>Market</li>
                                <li>Vision</li>
                            </ul>
                        </div>
                        <div className={styles.content}>
                            <h2>Imperative</h2>
                            <ul>
                                <li>Fundraising</li>
                                <li>Why Conquest</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}