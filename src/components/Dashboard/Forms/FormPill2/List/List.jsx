import { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';

import FormPillItem2 from '../Item/Item'
import FormModal from '../../FormModal/FormModal';

import styles from './list.module.scss'

import avatar from '../../../../../assets/images/Dashboard/demoAvatar.jpeg'
import { WebContext } from '../../../../../store/website-context';
const DUMMY_FORM_LIST = [
    {
        id: 1,
        form_name: 'First form',
        avatar: avatar
    },
    {
        id: 2,
        form_name: 'Second form',
        avatar: avatar
    },
    {
        id: 3,
        form_name: 'Another one',
        avatar: avatar
    },
    {
        id: 4,
        form_name: 'Another one',
        avatar: avatar
    },
    {
        id: 5,
        form_name: 'Another one',
        avatar: avatar
    },
    {
        id: 6,
        form_name: 'Another one',
        avatar: avatar
    },
    {
        id: 7,
        form_name: 'Another one',
        avatar: avatar
    },
    {
        id: 8,
        form_name: 'Another one',
        avatar: avatar
    },
]

const DUMMY_QUESTIONS = {
    form_name: "Test form",
    form_id: 1,
    subjective_questions: [
        {
            question: "subjective question 3",
            id: 1,
        },
        {
            question: "subjective question 2",
            id: 2,
        }
    ],
    file_upload_questions: [
        {
            question: "file question 1",
            id: 1,
        },
        {
            question: "file question 2",
            id: 2,
        }
    ],
    scoring_questions: [
        {
            question: "scoring question 1",
            id: 1,
        },
        {
            question: "scoring question 2",
            id: 2,
        }
    ],
    preference_questions: [
        {
            question: "preference question 1",
            id: 1,
            preferences: [
                {
                    preference_name: "Q1 preference 1",
                    id: 1
                },
                {
                    preference_name: "Q1 preference 2",
                    id: 2
                },
                {
                    preference_name: "Q1 preference 3",
                    id: 3
                },
                {
                    preference_name: "Q1 preference 4",
                    id: 4
                },
            ]
        },
        {
            question: "preference question 2",
            id: 2,
            preferences: [
                {
                    preference_name: "Q2 preference 1",
                    id: 1
                },
                {
                    preference_name: "Q2 preference 2",
                    id: 2
                },
                {
                    preference_name: "Q2 preference 3",
                    id: 3
                },
                {
                    preference_name: "Q2 preference 4",
                    id: 4
                },
            ]
        },
    ]
}

export default function FormPillList2() {
    const { formListRerender } = useContext(WebContext)
    const [formsList, setFormsList] = useState([])
    const [modalData, setModalData] = useState({
        form_name: "",
        form_id: undefined,
        subjective_questions: [],
        file_upload_questions: [],
        scoring_questions: [],
        preference_questions: []
    })
    const formModal = useRef(null)

    function formOpenHandler(formId) {
        axios.get(`https://portal.conquest.org.in/api/forms/${formId}/questions/`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).tokens.access}`
            }
        })
            .then(res => {
                setModalData(res.data)
                formModal.current.openForm()
            })
            .catch(err => {
                console.log(err)
            })

        // setModalData(DUMMY_QUESTIONS)
        // formModal.current.openForm()
    }

    useEffect(() => {
        axios.get('https://portal.conquest.org.in/api/forms/list/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).tokens.access}`
            }
        })
            .then(res => {
                // console.log(res)

                const temp = res.data.reverse().map(form => {
                    return (
                        <FormPillItem2
                            key={form.id}
                            formId={form.id}
                            title={form.form_name}
                            avatar={form.avatar}
                            clickHandler={formOpenHandler}
                        />
                    )
                })

                // const temp = DUMMY_FORM_LIST.reverse().map(form => {
                //     return (
                //         <FormPillItem2
                //             key={form.id}
                //             formId={form.id}
                //             title={form.form_name}
                //             avatar={form.avatar}
                //             clickHandler={formOpenHandler}
                //         />
                //     )
                // })

                setFormsList(temp)
            })
            .catch(err => {
                console.log(err)
            })
    }, [JSON.parse(localStorage.getItem('userData')).tokens.access, formListRerender])

    return (
        <>
            <FormModal ref={formModal} data={modalData} />
            <div className={styles.container}>
                {formsList.length > 0 ? formsList : <h1>No forms available</h1>}
            </div>
        </>
    )
}