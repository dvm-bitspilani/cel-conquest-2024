import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, ConfigProvider } from 'antd'
import profilePic from "../../assets/images/Dashboard/profilePic.jpg"

import * as styles from './pill.module.scss'

export default function UserPill({ avatar, name, profilePage }) {
    const navigate = useNavigate()

    const [convertedImg, setConvertedImg] = useState('');

    useEffect(() => {
        if (avatar && avatar.startsWith('https://drive.google.com')) {
            const url = new URL(img);
            const pathParts = url.pathname.split('/');
            const id = pathParts[3];
            if (id) {
                setConvertedImg(`https://drive.google.com/thumbnail?sz=w1000&id=${id}`);
            } else {
                console.error('Invalid Google Drive URL format.');
            }
        }
    }, [avatar]);

    const checkProfilePic = convertedImg || avatar || profilePic;

    return (
        <div
            className={styles.pillbox}
            onClick={() => navigate(profilePage)}
        >
            <div className={styles.pfp}>
                <ConfigProvider
                    theme={{
                        token: {
                            lineWidth: 0,
                        },
                    }}
                >
                    <Avatar
                        size={{
                            xs: 20,
                            sm: 26,
                            md: 34,
                            lg: 34,
                            xl: 34,
                            xxl: 34,
                        }}
                        icon={<img src={checkProfilePic} alt="Icon" />}
                    />
                </ConfigProvider>
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    )
}