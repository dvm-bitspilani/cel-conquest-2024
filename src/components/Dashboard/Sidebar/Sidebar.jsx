import styles from "./sidebar.module.scss";

import dashboard_mountain_circle from "../../../assets/images/Dashboard/dashboard-mountain-circle.png";
import Button from "./Button/Button";
import demoAvatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

import { useState } from "react";

const Sidebar = () => {
  const bell = (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 8C17.25 6.4087 16.6442 4.88258 15.5659 3.75736C14.4875 2.63214 13.025 2 11.5 2C9.97501 2 8.51247 2.63214 7.43414 3.75736C6.3558 4.88258 5.75 6.4087 5.75 8C5.75 15 2.875 17 2.875 17H20.125C20.125 17 17.25 15 17.25 8Z"
        stroke="#111213"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1579 21C12.9894 21.3031 12.7476 21.5547 12.4566 21.7295C12.1656 21.9044 11.8357 21.9965 11.5 21.9965C11.1642 21.9965 10.8343 21.9044 10.5433 21.7295C10.2524 21.5547 10.0105 21.3031 9.84204 21"
        stroke="#111213"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="4" r="4" fill="#F7703C" />
    </svg>
  );
  const back_arrow = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H5"
        stroke="#111213"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19L5 12L12 5"
        stroke="#111213"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.headerButtons}>
        {back_arrow}
        {bell}
      </div>
      <div className={styles.profileSection}>
        <a href="/dashboard/startup-profile" className={styles.profileAvatar}>
          <img src={demoAvatar} />
        </a>
        <p>Welcome back,</p>
        <p>Madhur Jain</p>
      </div>
      <div className={styles.topButtons}>
        <Button
          text="Home"
          active={activeButton === "Home"}
          handleButtonClick={handleButtonClick}
          link="/dashboard"
        ></Button>
        <Button
          text="Meetings"
          active={activeButton === "Meetings"}
          handleButtonClick={handleButtonClick}
          link="/dashboard/meetings"
        ></Button>
        <Button
          text="Cohort of 2024"
          active={activeButton === "Cohort of 2024"}
          handleButtonClick={handleButtonClick}
          link="/dashboard/startups"
        ></Button>
        <Button
          text="Mentors"
          active={activeButton === "Mentors"}
          handleButtonClick={handleButtonClick}
          link="/dashboard/mentors"
        ></Button>
        <Button
          text="Experts"
          active={activeButton === "Experts"}
          handleButtonClick={handleButtonClick}
          link="/dashboard/experts"
        ></Button>
        <Button
          text="Investment Partners"
          active={activeButton === "Investment Partners"}
          handleButtonClick={handleButtonClick}
        ></Button>
      </div>
      <div className={styles.bottomButtons}>
        <Button
          text="Contact Us"
          active={activeButton === "Contact Us"}
          handleButtonClick={handleButtonClick}
        ></Button>
        <Button
          text="Forms"
          active={activeButton === "Forms"}
          handleButtonClick={handleButtonClick}
        ></Button>
        <Button
          text="Resources"
          active={activeButton === "Resources"}
          handleButtonClick={handleButtonClick}
        ></Button>
        <Button
          text="Conquest Info"
          active={activeButton === "Conquest Info"}
          handleButtonClick={handleButtonClick}
        ></Button>
        <Button
          text="Developers"
          active={activeButton === "Developers"}
          handleButtonClick={handleButtonClick}
        ></Button>
      </div>
      {/* <div className={styles.conquestLogo}>
        <img height={50} width={53} src={dashboard_mountain_circle} />
      </div> */}
    </div>
  );
};
export default Sidebar;
