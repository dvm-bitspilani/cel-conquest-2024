import { Input, ConfigProvider } from "antd"

import * as styles from './input.module.scss'

export default function TextInput({ name, heading, changeFn, blurFn, value, error }) {
    return (
        <div className={styles.inputGrp}>
            <label htmlFor={name}>{heading}</label>
            <ConfigProvider
                theme={{
                    token: {
                        colorError: '#EB0E00',
                        borderRadius: 8,
                        lineWidth: 1.5
                    }
                }}
            >
                <Input
                    name={name}
                    id={name}
                    onChange={changeFn}
                    onBlur={blurFn}
                    value={value}
                    status={error ? 'error' : ''}
                    style={error ? { backgroundColor: '#FFE6E6', width: '100%' } : { width: '100%' }}
                />
            </ConfigProvider>
            <span className={styles.errMsg} style={error ? { visibility: 'visible' } : { visibility: 'hidden' }}>*{error}</span>
        </div>
    )
}