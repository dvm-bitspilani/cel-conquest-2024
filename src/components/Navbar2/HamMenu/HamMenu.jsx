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
                    key: '/sponsors-and-partners',
                    label: 'Sponsors'
                },
                {
                    key: '/partners',
                    label: 'Partners'
                },
                {
                    key: '/angels-jury',
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
            key: '/news',
            label: 'Media Presence'
        },
        {
            key: '/aboutUs',
            label: 'About Us',
            children: [
                {
                    key: '/about',
                    label: 'Team'
                },
                {
                    key: '/faqs',
                    label: 'FAQs'
                }
            ]
        },
    ]

    function onClick(e) {
        // navigate(e.key)
        if (e.key !== '/network' && e.key !== '/aboutUs') {
            window.open(`https://www.conquest.org.in${e.key}`, '_self')
        }
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