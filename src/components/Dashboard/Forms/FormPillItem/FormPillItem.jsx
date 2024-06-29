import { useState, useEffect } from "react";
import styles from './pill.module.scss';
import profilePic from "../../../../assets/images/Dashboard/profilePic.jpg"

export default function FormPillItem({ formId, title, avatar, clickHandler }) {

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
            className={styles.pillBody}
            onClick={() => {
                clickHandler(formId)
            }}
        >
            <img src={checkProfilePic} className={styles.avatar} />
            <p>{title}</p>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.72 16.4558L9.481 15.9478L20.084 5.21785C20.1676 5.13214 20.2142 5.01698 20.2136 4.89723C20.2131 4.77748 20.1654 4.66276 20.081 4.57785L19.446 3.93585C19.405 3.89368 19.3559 3.86012 19.3018 3.8371C19.2477 3.81409 19.1895 3.8021 19.1306 3.80182C19.0718 3.80154 19.0135 3.81298 18.9591 3.83548C18.9048 3.85797 18.8554 3.89107 18.814 3.93285L8.239 14.6348L7.72 16.4558ZM20.703 2.66385L21.338 3.30685C22.214 4.19385 22.222 5.62485 21.354 6.50285L10.428 17.5608L6.664 18.6448C6.4342 18.7092 6.18826 18.6797 5.98016 18.5629C5.77206 18.4461 5.6188 18.2515 5.554 18.0218C5.50578 17.8567 5.50509 17.6813 5.552 17.5158L6.647 13.6758L17.544 2.64685C17.7512 2.4382 17.9979 2.27291 18.2696 2.1606C18.5414 2.04829 18.8328 1.99121 19.1269 1.9927C19.4209 1.99419 19.7117 2.05422 19.9823 2.16927C20.2529 2.28433 20.4979 2.45312 20.703 2.66385ZM9.184 3.81685C9.68 3.81685 10.082 4.22385 10.082 4.72585C10.0828 4.84451 10.0602 4.96217 10.0155 5.0721C9.97076 5.18202 9.90481 5.28206 9.82141 5.36648C9.73801 5.4509 9.63879 5.51806 9.52942 5.5641C9.42004 5.61015 9.30267 5.63419 9.184 5.63485H5.592C4.6 5.63485 3.796 6.44885 3.796 7.45185V18.3578C3.796 19.3618 4.6 20.1758 5.592 20.1758H16.368C17.36 20.1758 18.165 19.3618 18.165 18.3578V14.7228C18.165 14.2208 18.567 13.8138 19.063 13.8138C19.559 13.8138 19.961 14.2208 19.961 14.7238V18.3578C19.961 20.3658 18.352 21.9938 16.368 21.9938H5.592C3.608 21.9938 2 20.3658 2 18.3578V7.45185C2 5.44485 3.608 3.81685 5.592 3.81685H9.184Z" fill="#FB723D" />
            </svg>
        </div>
    )
}