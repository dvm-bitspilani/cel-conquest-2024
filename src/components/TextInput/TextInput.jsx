import { Input } from "antd"

import * as styles from './input.module.scss'

export default function TextInput({ name, heading, changeFn, blurFn, value, error }) {
    return (
        <div className={styles.inputGrp}>
            <label htmlFor={name}>{heading}</label>
            <Input
                name={name}
                id={name}
                onChange={changeFn}
                onBlur={blurFn}
                value={value}
            />
            <span className={styles.errMsg} style={error ? { visibility: 'visible' } : { visibility: 'hidden' }}>*{error}</span>
        </div>
    )
}