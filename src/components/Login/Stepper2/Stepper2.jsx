import { Slider, ConfigProvider } from 'antd'

import * as styles from './stepper.module.scss'

export default function Stepper2() {
    return (
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
                        value={5}
                    />
                </ConfigProvider>
            </div>
        </div>
    )
}