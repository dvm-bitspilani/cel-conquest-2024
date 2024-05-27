import { Select, AutoComplete, ConfigProvider } from "antd"

import * as styles from './dropdown.module.scss'

export function TextDropdown({ name, heading, changeFn, blurFn, value, error, searchFn, options }) {
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
                <AutoComplete
                    name={name}
                    id={name}
                    onChange={changeFn}
                    onBlur={blurFn}
                    onSearch={searchFn}
                    value={value}
                    status={error ? 'error' : ''}
                    style={error ? { backgroundColor: '#FFE6E6', width: '100%' } : { width: '100%' }}
                    options={options}
                />
            </ConfigProvider>
            <span className={styles.errMsg} style={error ? { visibility: 'visible' } : { visibility: 'hidden' }}>*{error}</span>
        </div>
    )
}

export function NumDropdown({ name, heading, changeFn, blurFn, value, error, min, max }) {
    const options = []
    for (let i = min; i < max; i++) {
        options.push({
            value: i,
            label: `${i}`
        })
    }

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
                <Select
                    name={name}
                    id={name}
                    onChange={changeFn}
                    onBlur={blurFn}
                    value={value}
                    status={error ? 'error' : ''}
                    style={error ? { backgroundColor: '#FFE6E6', width: '100%' } : { width: '100%' }}
                    options={options}
                />
            </ConfigProvider>
            <span className={styles.errMsg} style={error ? { visibility: 'visible' } : { visibility: 'hidden' }}>*{error}</span>
        </div>
    )
}