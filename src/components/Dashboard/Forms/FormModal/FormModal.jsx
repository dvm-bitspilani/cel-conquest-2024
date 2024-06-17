import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import styles from './formModal.module.scss'

import Form from './Form/Form';
import ProfileForm from '../../../Startups/StartupProfileHeader/ProfileEdit/EditForm/ProfileForm';

const FormModal = forwardRef(function ({ data, formType = 'questionaire', title = null }, ref) {
    const [rerenderer, setRerenderer] = useState(Math.random())

    const dialog = useRef(null)

    function formCloseHandler() {
        dialog.current.close()
    }

    useImperativeHandle(ref, () => {
        return (
            {
                openForm() {
                    dialog.current.showModal()
                    document.querySelector('body').style.overflow = 'hidden'
                },
                closeForm() {
                    dialog.current.close()
                }
            }
        )
    })

    function closeModal() {
        dialog.current.close()
    }

    let modalContent

    switch (formType) {
        case 'questionaire':
            modalContent = <Form key={rerenderer} data={data} formClose={formCloseHandler} />
            break;
        case 'profile edit':
            modalContent = <ProfileForm key={rerenderer} formClose={formCloseHandler} />
            break;

    }

    return (
        <dialog
            ref={dialog}
            onClose={() => {
                document.querySelector('body').removeAttribute('style')
                setRerenderer(Math.random())
            }}
            className={styles.modal}
        >
            <svg onClick={closeModal} className={styles.cross} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.75 10.4502L8.25 26.9502" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.25 10.4502L24.75 26.9502" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className={styles.heading}>{title ?? data.form_name}</h2>
            <main className={styles.questionsContainer}>
                {modalContent}
            </main>
        </dialog>
    )
})

export default FormModal