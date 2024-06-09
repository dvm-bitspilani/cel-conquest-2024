import { forwardRef, useImperativeHandle, useRef } from 'react';

import styles from './formModal.module.scss'

const FormModal = forwardRef(function ({ }, ref) {
    const dialog = useRef(null)

    useImperativeHandle(ref, () => {
        return (
            {
                openForm() {
                    dialog.current.showModal()
                }
            }
        )
    })

    return (
        <dialog ref={dialog} className={styles.modal}>
            <h1>Test</h1>
        </dialog>
    )
})

export default FormModal