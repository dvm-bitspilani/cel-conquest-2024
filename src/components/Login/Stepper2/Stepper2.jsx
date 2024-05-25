import { Slider, ConfigProvider } from 'antd'

import * as styles from './stepper.module.scss'
import { useState } from 'react'

export default function Stepper2() {

    // Temporary state and function for testing
    const [stepperPos, setStepperPos] = useState(1)

    function stepInc() {
        setStepperPos(prev => {
            if (prev === 10) {
                return 1
            }
            return prev + 1
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
                            min={1}
                            max={10}
                            value={stepperPos}
                        />
                    </ConfigProvider>
                </div>
            </div>
        </>
    )
}