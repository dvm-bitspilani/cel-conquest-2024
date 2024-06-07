import { Menu, ConfigProvider } from 'antd'

import * as styles from './menu.module.scss'
import './menuStyles.scss'
import { useNavigate } from 'react-router-dom'

export default function MobileMenu() {
    const navigate = useNavigate()

    const items = [
        {
            key: '/dashboard',
            label: 'Home'
        },
        {
            key: '/dashboard/meetings',
            label: 'Meetings'
        },
        {
            key: '/dashboard/cohort2024',
            label: 'Cohort of 2024'
        },
        {
            key: '/dashboard/mentors',
            label: 'Mentors'
        },
        {
            key: '/dashboard/experts',
            label: 'Experts'
        },
        {
            key: '/dashboard/partners',
            label: 'Investment Partners'
        },
        {
            key: '/dashboard/contact',
            label: 'Contact Us'
        },
        {
            key: '/dashboard/forms',
            label: 'Forms'
        },
        {
            key: '/dashboard/resources',
            label: 'Resources'
        },
        {
            key: '/dashboard/info',
            label: 'Conquest Info'
        },
        {
            key: '/dashboard/developers',
            label: 'Developers'
        },
    ]

    function onClick(e) {
        navigate(e.key)
    }

    return (
        <main className={styles.container}>
            <div id='dashboardMenu'>
                <ConfigProvider>
                    <Menu
                        onClick={onClick}
                        items={items}
                        mode='inline'
                    />
                </ConfigProvider>
            </div>
        </main>
    )
}