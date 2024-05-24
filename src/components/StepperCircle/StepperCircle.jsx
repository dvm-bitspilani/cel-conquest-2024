import * as styles from './circle.module.scss'

export default function StepperCircle({ isFilled }) {
    let filled = {};
    if (isFilled === 'selected') {
        filled = { backgroundColor: '#D9D9D9' }
    }
    else if (isFilled === 'completed') {
        filled = { backgroundColor: '#FFFFFF' }
    }
    return (
        <div className={styles.circle} style={filled}></div>
    )
}