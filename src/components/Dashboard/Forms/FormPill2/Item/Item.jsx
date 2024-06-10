import styles from './item.module.scss'

export default function FormPillItem2({ formId, title, avatar, clickHandler }) {
    return (
        <div className={styles.pillBox}>
            <img src={avatar} alt="avatar" />
            <p>{title}</p>
            <div className={styles.fillBtnContainer}>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        clickHandler(formId)
                    }}
                >Fill</button>
            </div>
        </div>
    )
}