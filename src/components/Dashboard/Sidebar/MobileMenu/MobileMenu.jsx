import { Menu, ConfigProvider } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import * as styles from "./menu.module.scss";
import "./menuStyles.scss";

import profilePic from "../../../../assets/profilePic.svg"
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      document.querySelector("#dashboardMenu .ant-menu .ant-menu-item#selected")
    ) {
      document.querySelector(
        "#dashboardMenu .ant-menu .ant-menu-item#selected"
      ).id = "";
    }
    switch (location.pathname) {
      case "/dashboard":
        document.querySelector(
          "#dashboardMenu .ant-menu .ant-menu-item:nth-of-type(1)"
        ).id = "selected";
        break;
      case "/dashboard/meetings":
        document.querySelector(
          "#dashboardMenu .ant-menu .ant-menu-item:nth-of-type(2)"
        ).id = "selected";
        break;
      case "/dashboard/forms":
        document.querySelector(
          "#dashboardMenu .ant-menu .ant-menu-item:nth-of-type(8)"
        ).id = "selected";
        break;
    }
  }, [location.pathname]);

  const items = [
    {
      key: "/dashboard",
      label: "Home",
    },
    {
      key: "/dashboard/meetings",
      label: "Meetings",
    },
    {
      key: "/dashboard/startups",
      label: "Cohort of 2024",
    },
    {
      key: "/dashboard/mentors",
      label: "Mentors",
    },
    {
      key: "/dashboard/experts",
      label: "Experts",
    },
    {
      key: "/dashboard/partners",
      label: "Partners",
    },
    {
      key: "/dashboard/contact",
      label: "Contact Us",
    },
    {
      key: "/dashboard/forms",
      label: "Forms",
    },
    {
      key: "/dashboard/resources",
      label: "Resources",
    },
    {
      key: "/dashboard/info",
      label: "Conquest Info",
    },
    {
      key: "/dashboard/developers",
      label: "Developers",
    },
  ];

  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const userProfile = userData.user_profile_obj || {};
  const profileLink =
    userProfile.role === "Startup"
      ? "/dashboard/startup-profile"
      : "/dashboard/profile";
  const profileLogo = userProfile.profile_logo || profilePic;


  function onClick(e) {
    
    if (e.key === "/dashboard/contact" || e.key === "/dashboard/info") {
      window.open("https://www.conquest.org.in/process", "_self");
    }  
    else {
      navigate(e.key);
    }
  }

  return (
    <main className={styles.container}>
      <div id="dashboardMenu">
        <div className={styles.profileSection}>
          <Link to={profileLink} className={styles.profileAvatar}>
            <img
              src={profileLogo}
              onError={(e) => {
                e.target.src = profilePic;
              }}
              alt="Profile Avatar"
            />
          </Link>
        </div>
        <ConfigProvider>
          <Menu onClick={onClick} items={items} mode="inline" />
        </ConfigProvider>
      </div>
    </main>
  );
}
