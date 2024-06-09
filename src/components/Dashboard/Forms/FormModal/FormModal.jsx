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

    function closeModal() {
        dialog.current.close()
    }

    return (
        <dialog ref={dialog} className={styles.modal}>
            <svg onClick={closeModal} className={styles.cross} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.75 10.4502L8.25 26.9502" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.25 10.4502L24.75 26.9502" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <h1>Test</h1>
        </dialog>
    )
})

export default FormModal