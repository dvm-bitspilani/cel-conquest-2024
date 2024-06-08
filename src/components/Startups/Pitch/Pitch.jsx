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
                        <div className={styles.button} onClick={togglePlay}>
                            <svg className={`${isPlaying ? styles.hide : ''}`} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <path d="M23.39 44.7851C35.2034 44.7851 44.78 35.2073 44.78 23.3926C44.78 11.5778 35.2034 2 23.39 2C11.5766 2 2 11.5778 2 23.3926C2 35.2073 11.5766 44.7851 23.39 44.7851Z" fill="white" stroke="#FB723D" strokeWidth="2.27027" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.1172 14.833L31.9512 23.39L19.1172 31.9471V14.833Z" fill="#FB723D" />
                            </svg>
                            <div className={`${styles.pause}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                    <path d="M23.39 44.7851C35.2034 44.7851 44.78 35.2073 44.78 23.3926C44.78 11.5778 35.2034 2 23.39 2C11.5766 2 2 11.5778 2 23.3926C2 35.2073 11.5766 44.7851 23.39 44.7851Z" fill="white" stroke="#FB723D" strokeWidth="2.27027" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 4.41667V18.5833C19 18.9591 18.8563 19.3194 18.6006 19.5851C18.3449 19.8507 17.998 20 17.6364 20H14.2273C13.8656 20 13.5188 19.8507 13.263 19.5851C13.0073 19.3194 12.8636 18.9591 12.8636 18.5833V4.41667C12.8636 4.04094 13.0073 3.68061 13.263 3.41493C13.5188 3.14926 13.8656 3 14.2273 3H17.6364C17.998 3 18.3449 3.14926 18.6006 3.41493C18.8563 3.68061 19 4.04094 19 4.41667ZM8.77273 3H5.36364C5.00198 3 4.65513 3.14926 4.3994 3.41493C4.14367 3.68061 4 4.04094 4 4.41667V18.5833C4 18.9591 4.14367 19.3194 4.3994 19.5851C4.65513 19.8507 5.00198 20 5.36364 20H8.77273C9.13439 20 9.48123 19.8507 9.73696 19.5851C9.99269 19.3194 10.1364 18.9591 10.1364 18.5833V4.41667C10.1364 4.04094 9.99269 3.68061 9.73696 3.41493C9.48123 3.14926 9.13439 3 8.77273 3Z" fill="#FB723D" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}