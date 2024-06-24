import { Menu, ConfigProvider } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import * as styles from "./menu.module.scss";
import "./menuStyles.scss";

import profilePic from "../../../../assets/profilePic.svg";
import { Link } from "react-router-dom";
import { WebContext } from "../../../../store/website-context";

export default function MobileMenu() {
  const { glogout } = useContext(WebContext);
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
      key: "/dashboard/coaches",
      label: "Coaches",
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
    {
      key: "/",
      label: "Logout",
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
    } else {
      if (e.key === "/") {
        navigate(e.key);
        glogout();
      } else {
        navigate(e.key);
      }
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
        <a className={styles.madeWithContainer} href="https://bits-dvm.org/">
          <div className={styles.madeWithSomething}>
            <span className={styles.madeWithText}>Made with</span>
            <span className={styles.heart}>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1783_3207)">
                  <path
                    d="M9.40262 15.0857L8.26729 14.0413C4.23491 10.3462 1.57275 7.90133 1.57275 4.9184C1.57275 2.47351 3.46758 0.56665 5.87918 0.56665C7.24157 0.56665 8.54916 1.20755 9.40262 2.2124C10.2561 1.20755 11.5637 0.56665 12.9261 0.56665C15.3377 0.56665 17.2325 2.47351 17.2325 4.9184C17.2325 7.90133 14.5703 10.3462 10.5379 14.0413L9.40262 15.0857Z"
                    fill="#FB723D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1783_3207">
                    <rect
                      width="18.7917"
                      height="15.0333"
                      fill="white"
                      transform="translate(0.00683594 0.56665)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className={styles.madeWithText}>by DVM</span>
          </div>
        </a>
      </div>
    </main>
  );
}
