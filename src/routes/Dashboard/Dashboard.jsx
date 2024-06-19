import * as styles from "./dashboard.module.scss";
import dashboard_mountain_circle from "../../assets/images/Dashboard/grey-dashboard-mountain-circle.png";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { useRef, useState } from "react";
import { Drawer, ConfigProvider } from "antd";
import MobileMenu from "../../components/Dashboard/Sidebar/MobileMenu/MobileMenu";
import SearchButton from "../../components/Dashboard/Sidebar/SearchButton/SearchButton";

const userProfile = JSON.parse(localStorage.getItem("userData")).user_profile_obj;

const Dashboard = () => {
  const [isHamOpen, setIsHamOpen] = useState(false);

  const hamMenuIcon = useRef(null);

  function hamOpenHandler() {
    setIsHamOpen(true);
  }

  function hamCloseHandler() {
    setIsHamOpen(false);
  }
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.name}>
          <p>Hello,</p>
          <h2>{userProfile.name}</h2>
        </div>
        <section className={styles.hamMenu}>
          <div className={styles.searchButton}>
            <SearchButton></SearchButton>
          </div>
          <div
            className={styles.hamIcon}
            ref={hamMenuIcon}
            onClick={hamOpenHandler}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <ConfigProvider>
            <Drawer
              placement="right"
              open={isHamOpen}
              onClose={hamCloseHandler}
              closable={false}
            >
              <div className={styles.cross} onClick={hamCloseHandler}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
              <MobileMenu />
            </Drawer>
          </ConfigProvider>
        </section>
      </nav>
      <div className={styles.orangeHeader}>
        <img src={dashboard_mountain_circle} />
      </div>
      <div className={styles.dashboardElementContainer}>
        <div className={styles.sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.dashboardContent}>{<Outlet />}</div>
      </div>
    </>
  );
};
export default Dashboard;
