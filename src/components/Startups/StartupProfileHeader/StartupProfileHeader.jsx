import { useState } from "react";
import * as styles from "./StartupProfileHeader.module.scss";
import StartupProfileContact from "../StartupProfileContact/StartupProfileContact"
import ProfileButton from "../ProfileButton/ProfileButton";
import About from "../About/About";
import Team from "../Team/Team";
import Details from "../Details/Details";
import Pitch from "../Pitch/Pitch";

const dummyContact = {
    phone: "+91 00001 73314",
    email: "random@email.com",
    website: "bits-dvm.org",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
}

const DummyAbout = {
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing quisque massa scelerisque dolor est quis sit etiam augue. Risus risus etiam phasellus suspendisse augue placerat nisi arcu.",
    industries: ["Climate Tech", "EV", "Fin-Tech","Climate Tech", "Lorem Ipsum", "Lorem Ipsum"],
    areas: ["Climate Tech", "EV", "Fin-Tech"]
}

const dummyDetails = {
    founder: "A very very very long name",
    cofounder1: "A very very very long name",
    cofounder2: "A very very very long name",
    location: "Pilani, Rajasthan",
    stage: "Early Stage",
}

const profileInfo = {
    about: <About {...DummyAbout} />,
    details: <Details {...dummyDetails}/>,
    pitch: <Pitch />,
    team: <Team />,
}

export default function StartupProfileHeader({ img, name, desc, location }) {
    const [selectedTopic, setSelectedTopic] = useState('about');

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <div className={styles.contentContainer}>
                        <div className={styles.logoContainer}>
                            <div><img src={img} alt="" /></div>
                        </div>

                        <div className={styles.headerContainer}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.desc}>{desc}</div>
                            <div><span className={styles.location}>Location HQ : </span>{location}</div>
                        </div>
                    </div>
                    <div className={styles.tabsContainer}>
                        <ProfileButton isSelected={selectedTopic === 'about'}
                            onSelect={() => handleSelect('about')}>About</ProfileButton>
                        <ProfileButton isSelected={selectedTopic === 'details'}
                            onSelect={() => handleSelect('details')}>Details</ProfileButton>
                        <ProfileButton isSelected={selectedTopic === 'pitch'}
                            onSelect={() => handleSelect('pitch')}>Pitch</ProfileButton>
                        <ProfileButton isSelected={selectedTopic === 'team'}
                            onSelect={() => handleSelect('team')}>Team</ProfileButton>
                    </div>
                    <div className={styles.profileInfoContainer}>
                        {profileInfo[selectedTopic]}
                    </div>
                                        <div className={styles.mobile}>
                        <div className={styles.button}>
                            <button className={styles.btn_m}>Message</button>
                            <button className={`${styles.btn_m} ${styles.schedule_m}`}>Schedule</button>
                        </div>
                        <div className={styles.head}>
                            <p className={styles.headings}>About</p>
                            <About {...DummyAbout}></About>
                        </div>
                        <div className={styles.head}>
                            <p className={styles.headings}>Details</p>
                            <Details {...dummyDetails}></Details>
                        </div>
                        <div className={styles.head}>
                            <p className={styles.headings}>Pitch</p>
                            <Pitch></Pitch>
                        </div>
                        <div className={styles.head}>
                            <p className={styles.headings}>Team</p>
                            <Team></Team>
                        </div>
                        <div className={styles.head}>
                            <p className={styles.headings}>Contact</p>
                            <StartupProfileContact {...dummyContact} />
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.buttonContainer}>
                        <div className={styles.btn}>Message</div>
                        <div className={`${styles.btn} ${styles.schedule}`}>Schedule</div>
                        <div className={styles.dropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g filter="url(#filter0_d_1266_2323)">
                                    <circle cx="20" cy="20" r="15" fill="white" />
                                    <circle cx="20" cy="20" r="14.5" stroke="black" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1266_2323" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="2.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1266_2323" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1266_2323" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <svg className={styles.dots} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M4.3125 10.0625C3.52188 10.0625 2.875 10.7094 2.875 11.5C2.875 12.2906 3.52188 12.9375 4.3125 12.9375C5.10312 12.9375 5.75 12.2906 5.75 11.5C5.75 10.7094 5.10312 10.0625 4.3125 10.0625ZM18.6875 10.0625C17.8969 10.0625 17.25 10.7094 17.25 11.5C17.25 12.2906 17.8969 12.9375 18.6875 12.9375C19.4781 12.9375 20.125 12.2906 20.125 11.5C20.125 10.7094 19.4781 10.0625 18.6875 10.0625ZM11.5 10.0625C10.7094 10.0625 10.0625 10.7094 10.0625 11.5C10.0625 12.2906 10.7094 12.9375 11.5 12.9375C12.2906 12.9375 12.9375 12.2906 12.9375 11.5C12.9375 10.7094 12.2906 10.0625 11.5 10.0625Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <StartupProfileContact {...dummyContact} />

                </div>
            </div >
        </>
    )
}
