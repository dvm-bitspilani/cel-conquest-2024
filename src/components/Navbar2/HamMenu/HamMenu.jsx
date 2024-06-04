import { useNavigate } from 'react-router-dom'

import { Menu, ConfigProvider } from 'antd'

import * as styles from './menu.module.scss'

export default function HamMenu() {
    const navigate = useNavigate()

    const items = [
        {
            key: '/network',
            label: 'Network',
            children: [
                {
                    key: '/sponsors',
                    label: 'Sponsors'
                },
                {
                    key: '/partners',
                    label: 'Partners'
                },
                {
                    key: '/jury',
                    label: 'Jury'
                },
                {
                    key: '/mentors',
                    label: 'Mentors'
                },
            ]
        },
        {
            key: '/alumni',
            label: 'Alumni'
        },
        {
            key: '/mediapresence',
            label: 'Media Presence'
        },
        {
            key: '/about',
            label: 'About Us',
            children: [
                {
                    key: '/team',
                    label: 'Team'
                },
                {
                    key: '/faq',
                    label: 'FAQs'
                }
            ]
        },
    ]

    function onClick(e) {
        navigate(e.key)
    }

    return (
        <main className={styles.container}>
            <ConfigProvider>
                <Menu
                    onClick={onClick}
                    items={items}
                    mode='inline'
                />
            </ConfigProvider>
        </main>
    )
}