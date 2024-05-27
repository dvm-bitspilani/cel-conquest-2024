import * as styles from "./dashboard.module.scss";
import dashboard_mountain_circle from "../../assets/images/Dashboard/dashboard-mountain-circle.png";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className={styles.orangeHeader}>
        <img src={dashboard_mountain_circle} />
      </div>
      <div className={styles.dashboardElementContainer}>
        <div className={styles.sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.dashboardContent}>{<Outlet/>}</div>
      </div>
    </>
  );
};
export default Dashboard;
