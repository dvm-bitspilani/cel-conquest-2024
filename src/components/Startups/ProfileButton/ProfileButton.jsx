import * as styles from "./ProfileButton.module.scss"

export default function ProfileButton({ children, onSelect, isSelected }) {
    return (
        <div className={`${styles.profileButton} ${isSelected ? `${styles.active}` : undefined}`} onClick={onSelect}>
            <a>{children}</a>
        </div>
    )
}