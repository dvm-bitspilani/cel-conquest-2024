import { Dropdown, Drawer, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

import * as styles from './nav.module.scss';

import logo from "../../assets/images/Navbar/conquest-logo.png";

import HamMenu from './HamMenu/HamMenu';

export default function Navbar2() {
    const [isHamOpen, setIsHamOpen] = useState(false)

    const hamMenuIcon = useRef(null)

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

    function hamOpenHandler() {
        setIsHamOpen(true)
    }

    function hamCloseHandler() {
        setIsHamOpen(false)
    }

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
                            <div className={styles.space}>
                                Network
                                <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#111213" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
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
                            <div className={styles.space}>
                                About Us
                                <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#111213" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </Dropdown>
                </li>
            </ul>
            <img src={logo} className={styles.logo} />
            <div className={styles.register} onClick={() => navigate('/login')}>Register</div>
            <section className={styles.hamMenu}>
                <div className={styles.hamIcon} ref={hamMenuIcon} onClick={hamOpenHandler}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <ConfigProvider>
                    <Drawer
                        placement='right'
                        open={isHamOpen}
                        onClose={hamCloseHandler}
                        closable={false}
                    >
                        <div className={styles.cross} onClick={hamCloseHandler}>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                        </div>
                        <HamMenu />
                    </Drawer>
                </ConfigProvider>
            </section>
        </nav>
    )
}