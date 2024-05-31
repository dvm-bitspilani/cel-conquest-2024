import { Avatar, ConfigProvider } from 'antd'

import * as styles from './pill.module.scss'

export default function UserPill({ avatar, name }) {
    return (
        <div className={styles.pillbox}>
            <div className={styles.pfp}>
                <ConfigProvider
                    theme={{
                        token: {
                            lineWidth: 0,
                        },
                    }}
                >
                    <Avatar
                        size={{
                            xs: 20,
                            sm: 26,
                            md: 34,
                            lg: 34,
                            xl: 34,
                            xxl: 34,
                        }}
                        icon={<img src={avatar} alt="Icon" />}
                    />
                </ConfigProvider>
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    )
}