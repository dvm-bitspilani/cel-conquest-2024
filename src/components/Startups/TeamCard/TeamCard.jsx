import * as styles from "./TeamCard.module.scss";
import avatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

export default function TeamCard({ img, name, position, linkedin }) {
    return (
        <>
            <div className={styles.teamMemberContainer}>
                <div className={styles.left}>
                    <div className={styles.avatarContainer}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.position}>{position}</div>
                    </div>
                </div>
                <a href={linkedin} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <g clipPath="url(#clip0_1266_2615)">
                        <path d="M18.0888 0.98518H1.65461C1.28173 0.981386 0.922575 1.12567 0.655949 1.38637C0.389323 1.64707 0.237006 2.0029 0.232422 2.37577V18.8764C0.237835 19.2487 0.390516 19.6037 0.657052 19.8637C0.923588 20.1237 1.28227 20.2676 1.65461 20.2638H18.0888C18.4617 20.2667 18.8207 20.122 19.0871 19.8611C19.3536 19.6002 19.506 19.2445 19.511 18.8716V2.37103C19.5044 1.99925 19.3513 1.64512 19.0849 1.38562C18.8186 1.12611 18.4607 0.982206 18.0888 0.98518Z" fill="#FB723D" />
                        <path d="M3.08693 8.21165H5.94869V17.4196H3.08693V8.21165ZM4.5186 3.62903C4.84683 3.62903 5.16769 3.72638 5.44058 3.90877C5.71347 4.09116 5.92614 4.35038 6.05167 4.65366C6.17721 4.95694 6.20998 5.29063 6.14583 5.61253C6.08168 5.93443 5.92349 6.23008 5.69129 6.46206C5.45908 6.69404 5.16329 6.85195 4.84133 6.91579C4.51937 6.97963 4.1857 6.94655 3.88255 6.82072C3.57939 6.6949 3.32036 6.48198 3.13824 6.20892C2.95611 5.93585 2.85906 5.6149 2.85938 5.28667C2.85979 4.84689 3.03479 4.42527 3.34591 4.11445C3.65703 3.80362 4.07882 3.62903 4.5186 3.62903ZM7.74381 8.21165H10.4871V9.47582H10.525C10.9074 8.75208 11.8397 7.98884 13.2319 7.98884C16.13 7.98252 16.6673 9.88983 16.6673 12.3629V17.4196H13.8055V12.9396C13.8055 11.873 13.7866 10.4998 12.3185 10.4998C10.8505 10.4998 10.6008 11.6628 10.6008 12.8701V17.4196H7.74381V8.21165Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1266_2615">
                            <rect width="19.2786" height="19.2786" fill="white" transform="translate(0.232422 0.985352)" />
                        </clipPath>
                    </defs>
                </svg>
                </a>
            </div>
        </>
    )
}
