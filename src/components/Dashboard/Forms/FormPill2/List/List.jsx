import { useEffect, useState } from 'react';
import axios from 'axios';

import FormPillItem2 from '../Item/Item'

import styles from './list.module.scss'

import avatar from '../../../../../assets/images/Dashboard/demoAvatar.jpeg'
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
]

export default function FormPillList2() {
    const [formsList, setFormsList] = useState([])

    useEffect(() => {
        axios.get('https://conquest-api.bits-dvm.org/api/forms/list/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).tokens.access}`
            }
        })
            .then(res => {
                console.log(res)

                // const temp = res.data.reverse().map(form => {
                //     return (
                //         <FormPillItem key={form.id} formId={form.id} title={form.form_name} avatar={form.avatar} />
                //     )
                // })
                const temp = DUMMY_FORM_LIST.reverse().map(form => {
                    return (
                        <FormPillItem2 key={form.id} formId={form.id} title={form.form_name} avatar={form.avatar} />
                    )
                })

                setFormsList(temp)
            })
            .catch(err => {
                console.log(err)
            })
    }, [JSON.parse(localStorage.getItem('userData')).tokens.access])

    return (
        <div className={styles.container}>
            {formsList.length > 0 ? formsList : <h1>No forms available</h1>}
        </div>
    )
}