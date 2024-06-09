import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import styles from './formModal.module.scss'

import Form from './Form/Form';

const FormModal = forwardRef(function ({ data }, ref) {
    const dialog = useRef(null)

    useImperativeHandle(ref, () => {
        return (
            {
                openForm() {
                    dialog.current.showModal()
                    document.querySelector('body').style.overflow = 'hidden'
                }
            }
        )
    })

    function closeModal() {
        dialog.current.close()
    }

    return (
        <dialog
            ref={dialog}
            onClose={() => {
                document.querySelector('body').removeAttribute('style')
            }}
            className={styles.modal}
        >
            <svg onClick={closeModal} className={styles.cross} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.75 10.4502L8.25 26.9502" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.25 10.4502L24.75 26.9502" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className={styles.heading}>{data.form_name}</h2>
            <main className={styles.questionsContainer}>
                <Form data={data} />
            </main>
        </dialog>
    )
})

export default FormModal