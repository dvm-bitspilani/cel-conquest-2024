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
                                handleActiveColor: '#FFFFFF',
                                handleSize: 22,
                                handleSizeHover: 22,
                                handleLineWidth: 4,
                                railBg: '#FFC4A6',
                                railHoverBg: '#FFC4A6',
                                trackBg: '#FFFFFF',
                                trackHoverBg: '#FFFFFF'
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
    )
}