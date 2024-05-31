import styles from "./sidebar.module.scss";

import dashboard_mountain_circle from "../../../assets/images/Dashboard/dashboard-mountain-circle.png";
import Button from "./Button/Button";
import demoAvatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

import bell from "../../../assets/images/Dashboard/bell.svg";
import back_arrow from "../../../assets/images/Dashboard/arrow-left.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.headerButtons}>
        <img src={back_arrow} />
        <img src={bell} />
      </div>
      <div className={styles.profileSection}>
        <div className={styles.profileAvatar}>
          <img src={demoAvatar} />
        </div>
        <p>Welcome back,</p>
        <p>Madhur Jain</p>
      </div>
      <div className={styles.topButtons}>
        <Button text="Home"></Button>
        <Button text="Home" active={true}></Button>
        <Button text="Home"></Button>
        <Button text="Home"></Button>
        <Button text="Home"></Button>
      </div>
      <div className={styles.bottomButtons}>
        <Button text="Home"></Button>
        <Button text="Home"></Button>
        <Button text="Home"></Button>
        <Button text="Home"></Button>
        <Button text="Home"></Button>
      </div>
      <img height={50} src={dashboard_mountain_circle} />
    </div>
  );
};
export default Sidebar;
