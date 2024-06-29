import { useState, useEffect } from "react";
import styles from './item.module.scss'
import profilePic from "../../../../../assets/images/Dashboard/profilePic.jpg"

export default function FormPillItem2({ formId, title, avatar, clickHandler }) {

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
        <div className={styles.pillBox}>
            <img src={checkProfilePic} />
            <p>{title}</p>
            <div className={styles.fillBtnContainer}>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        clickHandler(formId)
                    }}
                >Fill</button>
            </div>
        </div>
    )
}