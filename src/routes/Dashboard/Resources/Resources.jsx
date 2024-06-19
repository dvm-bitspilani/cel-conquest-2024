import { useEffect, useState } from 'react'
import axios from 'axios'

import ResourcePill from '../../../components/Dashboard/Resources/Pill'

import avatar from '../../../assets/images/Dashboard/demoAvatar.jpeg'

import styles from './resources.module.scss'

const randomLoremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae possimus, vitae esse distinctio veritatis quasi ullam dolore culpa.Minus similique itaque voluptate tenetur hic earum sed magnam, at facilis perspiciatis.
    Obcaecati nostrum sit animi! Dignissimos accusantium dolorem quas, eaque facere libero doloremque illum ad esse eligendi ? Dolores perspiciatis error nihil, dolorem repellat porro cum quos adipisci consectetur rerum reprehenderit rem.
    Id aperiam quis labore saepe exercitationem laboriosam sit, velit ex ad porro obcaecati reiciendis tenetur fugit deleniti accusantium est enim inventore sapiente corporis possimus nam animi.Necessitatibus perspiciatis omnis delectus.
    Sapiente eos itaque id amet possimus in non tenetur optio dignissimos! Minima libero sequi, velit voluptas itaque iste veniam molestias neque impedit facere saepe, cupiditate ea unde alias placeat illo.
Tempore delectus totam ullam dolor in nisi veniam tempora rem libero est iste, vitae sit, blanditiis possimus quam eos fugit esse.Eius expedita nisi facere sequi ab doloribus nobis placeat.
    Ducimus, impedit asperiores.Deleniti minima quos incidunt tempora aperiam similique laudantium natus voluptas adipisci cumque, perspiciatis necessitatibus vero corporis saepe ratione quidem omnis ut officia cum sunt et.Quae, incidunt!
Autem dolores sequi ipsa ad aliquid doloremque necessitatibus, similique non laboriosam beatae placeat quos, sunt delectus saepe cumque temporibus ipsam iste voluptates distinctio mollitia quo nostrum magni neque provident! Error.
Sunt autem facilis molestiae est nobis commodi aut dicta culpa nemo ? Assumenda ratione repellendus reprehenderit rerum quas fuga perferendis officiis, nesciunt itaque exercitationem fugiat doloremque natus, fugit unde nobis ullam.`

export default function Resources() {
    const [resources, setResources] = useState([])

    useEffect(() => {
        axios.get('https://conquest-api.bits-dvm.org/api/users/expert_list/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access}`
            }
        })
            .then(res => {
                console.log(res.data.resource_partners)
                const resourceData = res.data.resource_partners.map((resource, index) => {
                    return (
                        <ResourcePill
                            key={index}
                            title={resource.company_name}
                            description={resource.description}
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
    // for (let i = 0; i < 8; i++) {
    //     resources.push(
    //         <ResourcePill
    //             key={i}
    //             title="Resource Title"
    //             description={randomLoremText}
    //             url="https://google.com"
    //             avatar={avatar}
    //         />)
    // }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Resources</h1>
            <div className={styles.scrollWrapper}>
                {resources}
            </div>
        </div>
    )
}