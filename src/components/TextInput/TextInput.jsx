import { Input, ConfigProvider } from "antd"

import * as styles from './input.module.scss'

export default function TextInput({ name, heading, changeFn, blurFn, value, error, firstSubmit, ...props }) {
    return (
        <div className={styles.inputGrp}>
            <label htmlFor={name}>{heading}</label>
            <div className={styles.inputField}>
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
                        status={firstSubmit && error ? 'error' : ''}
                        style={firstSubmit && error ? { backgroundColor: '#FFE6E6', width: '100%' } : { width: '100%' }}
                        {...props}
                    />
                </ConfigProvider>
                <svg
                    className={styles.invalidInpIcon}
                    style={firstSubmit && error ? { visibility: 'visible' } : { visibility: 'hidden' }}
                    viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.8225" cy="11" r="11" fill="#EB0E00" />
                    <path d="M11.3786 13.2929L11.0868 5.52885H12.9184L12.6104 13.2929H11.3786ZM12.0107 16.9723C11.7081 16.9723 11.4542 16.8696 11.2489 16.6643C11.0436 16.459 10.9409 16.2158 10.9409 15.9349C10.9409 15.6323 11.0436 15.3838 11.2489 15.1893C11.4542 14.9948 11.7081 14.8975 12.0107 14.8975C12.3133 14.8975 12.5618 14.9948 12.7563 15.1893C12.9508 15.3838 13.0481 15.6323 13.0481 15.9349C13.0481 16.2158 12.9508 16.459 12.7563 16.6643C12.5618 16.8696 12.3133 16.9723 12.0107 16.9723Z" fill="white" />
                </svg>

            </div>
            <span className={styles.errMsg} style={firstSubmit && error ? { visibility: 'visible' } : { visibility: 'hidden' }}>*{error}</span>
        </div>
    )
}