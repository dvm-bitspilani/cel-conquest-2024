import { useEffect, useState } from 'react'
import axios from 'axios'

import ResourcePill from '../../../components/Dashboard/Resources/Pill'

import styles from './resources.module.scss'

export default function Resources() {
    const [resources, setResources] = useState([])

    useEffect(() => {
        axios.get('https://portal.conquest.org.in/api/users/expert_list/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access}`
            }
        })
            .then(res => {
                // console.log(res)
                const resourceData = res.data.resource_partners.map((resource, index) => {
                    return (
                        <ResourcePill
                            key={index}
                            title={resource.company_name}
                            description={resource.description}
                            offering={resource.offering}
                            url={resource.website}
                            avatar={resource.profile_logo}
                        />
                    )
                })
                setResources(resourceData)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Resources</h1>
            <div className={styles.scrollWrapper}>
                {resources}
            </div>
        </div>
    )
}