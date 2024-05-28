import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import * as styles from './nav.module.scss';

import logo from "../../assets/images/Navbar/conquest-logo.png";

export default function Navbar2() {
    const navigate = useNavigate()
    const items = [
        {
            label: 'Sponsors',
            key: '/sponsors',
        },
        {
            label: 'Partners',
            key: '/partners',
        },
        {
            label: 'Jury',
            key: '/jury',
        },
        {
            label: 'Mentors',
            key: '/mentors',
        },
    ];
    const items2 = [
        {
            label: 'Team',
            key: '/team',
        },
        {
            label: 'FAQs',
            key: '/faq',
        }
    ];
    const onClick = ({ key }) => {
        navigate(key)
    };
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li>
                    <Dropdown
                        menu={{
                            items,
                            onClick,
                        }}
                    // trigger={['click']}
                    >
                        <a
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    navigate('/network')
                                }
                            }
                            className={styles.mainLink}
                        >
                            <Space size={2}>
                                Network
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#111213" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>
                    <a
                        onClick={
                            (e) => {
                                e.preventDefault();
                                navigate('/alumni')
                            }
                        }
                        className={styles.mainLink}
                    >
                        Alumni
                    </a>
                </li>
                <li>
                    <a
                        onClick={
                            (e) => {
                                e.preventDefault();
                                navigate('/mediapresence')
                            }
                        }
                        className={styles.mainLink}
                    >
                        Media Presence
                    </a>
                </li>
                <li>
                    <Dropdown
                        menu={{
                            items: items2,
                            onClick,
                        }}
                    >
                        <a
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    navigate('/about')
                                }
                            }
                            className={styles.mainLink}
                        >
                            <Space>
                                About Us
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#111213" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Space>
                        </a>
                    </Dropdown>
                </li>
            </ul>
            <img src={logo} className={styles.logo} />
            <div className={styles.register} onClick={() => navigate('/login')}>Register</div>
        </nav>
    )
}