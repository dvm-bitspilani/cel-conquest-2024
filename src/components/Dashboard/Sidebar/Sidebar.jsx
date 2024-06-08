import styles from "./sidebar.module.scss";

import dashboard_mountain_circle from "../../../assets/images/Dashboard/dashboard-mountain-circle.png";
import Button from "./Button/Button";
import demoAvatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

import bell from "../../../assets/images/Dashboard/bell.svg";
import back_arrow from "../../../assets/images/Dashboard/arrow-left.svg";
import { useState } from "react";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.headerButtons}>
        <img src={back_arrow} />
        <img src={bell} />
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
        ></Button>
        <Button
          text="Experts"
          active={activeButton === "Experts"}
          handleButtonClick={handleButtonClick}
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
      <div className={styles.conquestLogo}>
        <img height={50} width={53} src={dashboard_mountain_circle} />
      </div>
    </div>
  );
};
export default Sidebar;
