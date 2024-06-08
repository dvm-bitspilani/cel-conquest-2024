import { Dropdown, Drawer, ConfigProvider, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import * as styles from "./nav.module.scss";

import HamMenu from "./HamMenu/HamMenu";

const LogoSVG = ({ className }) => {
  return (
    <svg
      width="161"
      height="27"
      viewBox="0 0 161 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1646_363)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0035 0.408447C5.82183 0.408447 0 6.23031 0 13.4119C0 20.5935 5.82183 26.4154 13.0035 26.4154C20.1851 26.4154 26.007 20.5935 26.007 13.4119C26.007 6.23031 20.1851 0.408447 13.0035 0.408447ZM23.7371 13.4119C23.7371 13.626 23.7309 13.8387 23.7185 14.0496L19.5774 7.7666L15.3434 15.269L12.6693 11.5549L8.50952 17.5345L6.61533 15.1576L3.64928 18.6798C2.77102 17.1235 2.26988 15.3263 2.26988 13.4119C2.26988 7.48392 7.0755 2.67833 13.0035 2.67833C18.9315 2.67833 23.7371 7.48392 23.7371 13.4119Z"
          fill="#FB723D"
        />
        <path
          d="M34.2097 13.39C34.2097 9.7253 36.4238 7.28216 39.7577 7.28216C42.4807 7.28216 43.8041 8.78369 44.4149 9.95433H47.7488C47.1888 6.95134 43.9823 4.12646 39.7577 4.12646C34.5915 4.12646 30.9014 7.81662 30.9014 13.3645C30.9014 19.0143 34.5915 22.7044 39.7577 22.7044C44.0331 22.7044 47.138 19.9305 47.7488 16.8511H44.4658C43.5496 18.5562 41.9972 19.5232 39.7577 19.5232C36.4238 19.5232 34.2097 17.0801 34.2097 13.39Z"
          fill="#111213"
        />
        <path
          d="M48.9961 13.3645C48.9961 19.0143 52.6863 22.7044 57.8525 22.7044C63.0949 22.7044 66.785 19.0143 66.785 13.3645C66.785 7.81662 63.0949 4.12646 57.8525 4.12646C52.6863 4.12646 48.9961 7.81662 48.9961 13.3645ZM52.3045 13.39C52.3045 9.7253 54.5442 7.28216 57.8525 7.28216C61.2624 7.28216 63.4768 9.7253 63.4768 13.39C63.4768 17.0801 61.2624 19.5232 57.8525 19.5232C54.5442 19.5232 52.3045 17.0801 52.3045 13.39Z"
          fill="#111213"
        />
        <path
          d="M68.4512 22.3228H71.6829V10.5907L79.0633 22.3228H82.2956V4.5083H79.0633V16.2404L71.6829 4.5083H68.4512V22.3228Z"
          fill="#111213"
        />
        <path
          d="M100.327 22.7044L102.567 20.4903L100.683 18.5816C101.523 17.131 101.982 15.3751 101.982 13.3645C101.982 7.81662 98.2914 4.12646 93.049 4.12646C87.8825 4.12646 84.1924 7.81662 84.1924 13.3645C84.1924 19.0143 87.8825 22.7044 93.049 22.7044C95.2121 22.7044 97.0954 22.0682 98.5968 20.9484L100.327 22.7044ZM87.5006 13.39C87.5006 9.7253 89.7151 7.28216 93.049 7.28216C96.4337 7.28216 98.6733 9.7253 98.6733 13.39C98.6733 14.3825 98.5203 15.2987 98.2149 16.0876L95.8737 13.7208L93.6085 15.9349L96.2556 18.6071C95.3645 19.1924 94.2958 19.5232 93.049 19.5232C89.7151 19.5232 87.5006 17.0801 87.5006 13.39Z"
          fill="#111213"
        />
        <path
          d="M104.175 15.6805C104.175 19.2943 106.567 22.7045 111.428 22.7045C116.314 22.7045 118.707 19.2943 118.707 15.6805V4.5083H115.449V15.5278C115.449 17.8692 114.1 19.5233 111.428 19.5233C108.781 19.5233 107.407 17.8182 107.407 15.5278V4.5083H104.175V15.6805Z"
          fill="#111213"
        />
        <path
          d="M121.504 22.3228H133.338V19.1416H124.736V14.6117H132.574V11.4305H124.736V7.664H133.338V4.5083H121.504V22.3228Z"
          fill="#111213"
        />
        <path
          d="M145.37 16.9275C145.37 18.6834 143.818 19.5232 141.833 19.5232C139.873 19.5232 138.117 18.8107 138.321 16.5712H134.819C134.819 20.5412 137.659 22.7044 141.68 22.7044C145.778 22.7044 148.679 20.6685 148.679 17.1565C148.679 10.0053 138.575 13.0337 138.575 9.31809C138.575 8.32561 139.415 7.28216 141.502 7.28216C144.072 7.28216 144.759 8.6819 144.683 9.80162H147.788C147.991 7.53666 146.617 4.12646 141.553 4.12646C138.092 4.12646 135.241 5.65344 135.241 9.34355C135.241 16.0622 145.37 13.1355 145.37 16.9275Z"
          fill="#111213"
        />
        <path
          d="M153.251 22.3228H156.483V7.664H160.937V4.5083H148.823V7.664H153.251V22.3228Z"
          fill="#111213"
        />
        <path
          d="M93.6393 15.9073L95.8986 13.7668C95.9067 13.7592 95.919 13.7594 95.927 13.7673L102.525 20.4854C102.533 20.4933 102.533 20.5061 102.525 20.514L100.385 22.654C100.377 22.6619 100.364 22.6619 100.356 22.654L93.6388 15.9364C93.6307 15.9283 93.6307 15.9151 93.6393 15.9073Z"
          fill="#FB723D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M96.1004 13.5964C95.9999 13.4936 95.8351 13.4907 95.7308 13.5897L93.4709 15.7302C93.3634 15.8325 93.3607 16.0036 93.4661 16.1087L100.184 22.8263C100.287 22.9294 100.454 22.9294 100.557 22.8263L102.697 20.6863C102.8 20.5839 102.8 20.4179 102.699 20.3145L96.1004 13.5964ZM95.9068 14.0947L102.195 20.4982L100.37 22.3235L93.9732 15.9263L95.9068 14.0947Z"
          fill="#111213"
        />
      </g>
      <defs>
        <clipPath id="clip0_1646_363">
          <rect width="161" height="26.7442" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default function Navbar2() {
  const [isHamOpen, setIsHamOpen] = useState(false);

  const hamMenuIcon = useRef(null);

  const navigate = useNavigate();

  const items = [
    {
      label: "Sponsors",
      key: "/sponsors",
    },
    {
      label: "Partners",
      key: "/partners",
    },
    {
      label: "Jury",
      key: "/jury",
    },
    {
      label: "Mentors",
      key: "/mentors",
    },
  ];

  const items2 = [
    {
      label: "Team",
      key: "/team",
    },
    {
      label: "FAQs",
      key: "/faq",
    },
  ];

  const onClick = ({ key }) => {
    navigate(key);
  };

  function hamOpenHandler() {
    setIsHamOpen(true);
  }

  function hamCloseHandler() {
    setIsHamOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
            // trigger={['click']}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate("/network");
              }}
              className={styles.mainLink}
            >
              <Space size={3}>
                Network
                <svg
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#111213"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Space>
            </a>
          </Dropdown>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/alumni");
            }}
            className={styles.mainLink}
          >
            Alumni
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/mediapresence");
            }}
            className={styles.mainLink}
          >
            Media Presence
          </a>
        </li>
        <li>
          <Dropdown
            menu={{
              items: items2,
              onClick,
            }}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
              }}
              className={styles.mainLink}
            >
              <Space size={3}>
                About Us
                <svg
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#111213"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Space>
            </a>
          </Dropdown>
        </li>
      </ul>
      <LogoSVG className={styles.logo} />
      <div className={styles.register} onClick={() => navigate("/login")}>
        Login
      </div>
      <section className={styles.hamMenu}>
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
            <HamMenu />
          </Drawer>
        </ConfigProvider>
      </section>
    </nav>
  );
}
