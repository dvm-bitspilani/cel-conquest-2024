import React, { useState, useRef } from 'react';
import * as styles from "./Pitch.module.scss"

export default function Pitch() {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.title}>Pitch <span>Deck</span></div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.title}>Video</div>
                    <div className={`${styles.video} ${isPlaying ? styles.large : ''}`}>
                        <video ref={videoRef} src="https://pub-1658b62356034e6383dac2ceabbea7a0.r2.dev/people1-video-extracompressed.mp4"></video>
                        <svg onClick={togglePlay} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <path d="M23.39 44.7851C35.2034 44.7851 44.78 35.2073 44.78 23.3926C44.78 11.5778 35.2034 2 23.39 2C11.5766 2 2 11.5778 2 23.3926C2 35.2073 11.5766 44.7851 23.39 44.7851Z" fill="white" stroke="#FB723D" strokeWidth="2.27027" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.1172 14.833L31.9512 23.39L19.1172 31.9471V14.833Z" fill="#FB723D" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}