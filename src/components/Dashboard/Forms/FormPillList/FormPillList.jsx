import { useEffect, useState } from 'react';
import axios from 'axios';

import FormPillItem from '../FormPillItem/FormPillItem';

import styles from './pillList.module.scss'

import avatar from '../../../../assets/images/Dashboard/demoAvatar.jpeg'

const DUMMY_FORM_LIST = [
    {
        id: 1,
        title: 'First form',
        avatar: avatar
    },
    {
        id: 2,
        title: 'Second form',
        avatar: avatar
    },
    {
        id: 3,
        title: 'Another one',
        avatar: avatar
    },
]

export default function FormPillList() {
    const [formsList, setFormsList] = useState([])

    useEffect(() => {
        axios.get('https://conquest-api.bits-dvm.org/api/forms/list/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).tokens.access}`
            }
        })
            .then(res => {
                console.log(res)

                const temp = DUMMY_FORM_LIST.map(form => {
                    return (
                        <FormPillItem key={form.id} title={form.title} avatar={form.avatar} />
                    )
                })

                setFormsList(temp)
            })
            .catch(err => {
                console.log(err)

                const temp = DUMMY_FORM_LIST.map(form => {
                    return (
                        <FormPillItem key={form.id} title={form.title} avatar={form.avatar} />
                    )
                })

                setFormsList(temp)
            })
    }, [JSON.parse(localStorage.getItem('userData')).tokens.access])
    return (
        <div className={styles.container}>
            {formsList.length > 0 ? formsList : <h1>No forms available</h1>}
        </div>
    )
}