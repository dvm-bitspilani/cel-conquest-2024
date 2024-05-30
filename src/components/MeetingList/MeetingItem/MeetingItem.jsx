import { Avatar, ConfigProvider } from "antd";

import * as styles from "./item.module.scss";
import { useContext } from "react";
import { WebContext } from "../../../store/website-context";

export default function MeetingItem({ date, avatar, mentorName, duration, isGrayLink = false, data }) {
    const { activeMeet, selectMeet } = useContext(WebContext)

    const dateObj = new Date(date);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        dateObj
    );
    const meetDate = dateObj.getDate();

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const fullTime =
        hours > 12
            ? `${hours - 12}:${minutes} PM`
            : hours === 0
                ? `12:${minutes} AM`
                : `${hours}:${minutes} AM`;
    return (
        <div
            className={styles.itemBox}
            onClick={(e) => {
                if (document.querySelector('#selected-meeting-item')) {
                    document.querySelector('#selected-meeting-item').removeAttribute('id')
                }
                if (e.target.tagName !== "A") {
                    e.currentTarget.id = 'selected-meeting-item'
                }
                selectMeet(data)
            }}
        >
            <div className={styles.gridLeft}>
                <div className={styles.time}>
                    <span>{fullTime}</span>
                    <span>{`${duration} minutes`}</span>
                </div>
                <div className={styles.mentor}>
                    <ConfigProvider
                        theme={{
                            token: {
                                lineWidth: 0,
                            },
                        }}
                    >
                        <Avatar
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 64,
                                xxl: 80,
                            }}
                            icon={<img src={avatar} alt="icon" />}
                        />
                    </ConfigProvider>
                    <div className={styles.nameWrapper}>
                        <span>With</span>
                        <span>{mentorName}</span>
                    </div>
                </div>
            </div>
            <div className={styles.link}>
                <span>{`${month} ${meetDate}${meetDate % 10 === 1
                    ? "st"
                    : meetDate % 10 === 2
                        ? "nd"
                        : meetDate % 10 === 3
                            ? "rd"
                            : "th"
                    }`}</span>
                <a style={isGrayLink ? { filter: 'grayscale(1)', cursor: 'not-allowed' } : {}}>
                    <svg
                        width="21"
                        height="10"
                        viewBox="0 0 21 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.9999 0.833313H15.4999C16.0471 0.833313 16.5889 0.941087 17.0944 1.15048C17.6 1.35988 18.0593 1.66679 18.4462 2.0537C18.8331 2.44061 19.14 2.89994 19.3494 3.40547C19.5588 3.91099 19.6666 4.4528 19.6666 4.99998C19.6666 5.54715 19.5588 6.08897 19.3494 6.59449C19.14 7.10002 18.8331 7.55935 18.4462 7.94626C18.0593 8.33317 17.6 8.64008 17.0944 8.84948C16.5889 9.05887 16.0471 9.16664 15.4999 9.16664H12.9999M7.99992 9.16664H5.49992C4.95274 9.16664 4.41093 9.05887 3.9054 8.84948C3.39988 8.64008 2.94055 8.33317 2.55364 7.94626C1.77224 7.16486 1.33325 6.10505 1.33325 4.99998C1.33325 3.89491 1.77224 2.8351 2.55364 2.0537C3.33504 1.2723 4.39485 0.833313 5.49992 0.833313H7.99992"
                            stroke="#138CFD"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.1665 5H13.8332"
                            stroke="#138CFD"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>{" "}
                    Join
                </a>
            </div>
        </div>
    );
}
