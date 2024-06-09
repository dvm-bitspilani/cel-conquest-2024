import styles from './fileupload.module.scss'

export default function FileUpload({ name, heading, manualValue }) {
    function fileChangeHandler(e) {
        console.log(e.target.files)
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            manualValue(name, reader.result)
        }
    }

    return (
        <div className={styles.inputGrp}>
            <label htmlFor={name} className={styles.label}>{heading}</label>
            <input
                type="file"
                id={name}
                name={name}
                className={styles.input}
                onChange={fileChangeHandler}
            />
        </div>
    )
}