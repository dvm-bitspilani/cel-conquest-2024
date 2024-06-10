import React, { useState, useRef } from 'react';
import * as styles from "./Pitch.module.scss"

export default function Pitch({ pitchdeck, pitchvideo}) {
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
            <div className={`${styles.container} ${isPlaying ? styles.blur : ''}`}>
                <div className={`${styles.contentContainer} ${isPlaying ? styles.fullscreen : ''}`}>
                    <div className={`${styles.title} ${isPlaying ? styles.hide : ''}`}>Pitch <span>Deck</span></div>
                </div>
                <div className={styles.pdfContainer}>
                    <a href={pitchdeck} target="_blank">
                        <div className={styles.written}>
                            <h5>PitchDecker.pdf</h5>
                            <p>2.69 MB</p>
                        </div>
                        <div className={styles.download}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1266_2526)">
                                    <path d="M10.9993 14.7694L6.28068 10.0521L7.22468 9.09208L10.3327 12.2001V0.666748H11.666V12.2001L14.7727 9.09341L15.718 10.0521L10.9993 14.7694ZM3.82068 19.3334C3.20646 19.3334 2.69402 19.1281 2.28335 18.7174C1.87268 18.3067 1.6669 17.7939 1.66602 17.1787V13.9481H2.99935V17.1787C2.99935 17.3841 3.08468 17.5725 3.25535 17.7441C3.42602 17.9156 3.61402 18.001 3.81935 18.0001H18.1793C18.3838 18.0001 18.5718 17.9147 18.7434 17.7441C18.9149 17.5734 19.0002 17.385 18.9993 17.1787V13.9481H20.3327V17.1787C20.3327 17.793 20.1273 18.3054 19.7167 18.7161C19.306 19.1267 18.7931 19.3325 18.178 19.3334H3.82068Z" fill="#FB723D" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1266_2526" x="0.666016" y="0.666748" width="20.6667" height="20.6666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="0.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1266_2526" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1266_2526" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
                <div className={`${styles.contentContainer} ${isPlaying ? styles.fullscreen : ''}`}>
                    <div className={`${styles.title} ${isPlaying ? styles.hide : ''}`}>Video</div>
                    <div className={`${styles.video} ${isPlaying ? styles.large : ''}`}>
                        <a href={pitchvideo} target="_blank">{pitchvideo}</a>
                        {/* <video ref={videoRef} src="https://pub-1658b62356034e6383dac2ceabbea7a0.r2.dev/people1-video-extracompressed.mp4"></video>
                        <div className={styles.button} onClick={togglePlay}>
                            <svg className={`${isPlaying ? styles.hide : ''}`} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <path d="M23.39 44.7851C35.2034 44.7851 44.78 35.2073 44.78 23.3926C44.78 11.5778 35.2034 2 23.39 2C11.5766 2 2 11.5778 2 23.3926C2 35.2073 11.5766 44.7851 23.39 44.7851Z" fill="white" stroke="#FB723D" strokeWidth="2.27027" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.1172 14.833L31.9512 23.39L19.1172 31.9471V14.833Z" fill="#FB723D" />
                            </svg>
                            <div className={`${styles.pause}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                    <path d="M23.39 44.7851C35.2034 44.7851 44.78 35.2073 44.78 23.3926C44.78 11.5778 35.2034 2 23.39 2C11.5766 2 2 11.5778 2 23.3926C2 35.2073 11.5766 44.7851 23.39 44.7851Z" fill="white" stroke="#FB723D" strokeWidth="2.27027" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 4.41667V18.5833C19 18.9591 18.8563 19.3194 18.6006 19.5851C18.3449 19.8507 17.998 20 17.6364 20H14.2273C13.8656 20 13.5188 19.8507 13.263 19.5851C13.0073 19.3194 12.8636 18.9591 12.8636 18.5833V4.41667C12.8636 4.04094 13.0073 3.68061 13.263 3.41493C13.5188 3.14926 13.8656 3 14.2273 3H17.6364C17.998 3 18.3449 3.14926 18.6006 3.41493C18.8563 3.68061 19 4.04094 19 4.41667ZM8.77273 3H5.36364C5.00198 3 4.65513 3.14926 4.3994 3.41493C4.14367 3.68061 4 4.04094 4 4.41667V18.5833C4 18.9591 4.14367 19.3194 4.3994 19.5851C4.65513 19.8507 5.00198 20 5.36364 20H8.77273C9.13439 20 9.48123 19.8507 9.73696 19.5851C9.99269 19.3194 10.1364 18.9591 10.1364 18.5833V4.41667C10.1364 4.04094 9.99269 3.68061 9.73696 3.41493C9.48123 3.14926 9.13439 3 8.77273 3Z" fill="#FB723D" />
                                </svg>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}


