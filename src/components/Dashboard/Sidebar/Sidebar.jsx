import styles from "./sidebar.module.scss";

import Button from "./Button/Button";
import demoAvatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

import SearchButton from "./SearchButton/SearchButton";

import { useContext, useState } from "react";
import Notifications from "../Notifications/Notifications";
import axios from "axios";
import { WebContext } from "../../../store/website-context";

import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { glogout } = useContext(WebContext);
  const navigate = useNavigate();

  const userData = JSON.parse(
    localStorage.getItem("userData")
  ).user_profile_obj;
  // console.log(userData);

  const [isNotifVisible, setIsNotifVisible] = useState(false);
  const [notifsData, setNotifsData] = useState([]);
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
    // <svg
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M19 12H5"
    //     stroke="#111213"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M12 19L5 12L12 5"
    //     stroke="#111213"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      className={styles.backBtn}
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
        glogout();
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 7L8.41 8.41L5.83 11H16V13H5.83L8.41 15.58L7 17L2 12M20 5H12V3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H12V19H20V5Z" />
    </svg>
  );
  const [activeButton, setActiveButton] = useState("Home");

  const getNotifs = () => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .get(`https://conquest-api.bits-dvm.org/api/staff/notifications/`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).tokens.access
            }`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setNotifsData(res.data.notifications);

          // const newArr = res.data.map((newItm) => {
          //   return (
          //     <MeetingItem
          //       date={newItm.slot_start_time}
          //       avatar={newItm.requested_logo}
          //       mentorName={newItm.requested_name}
          //       duration={45}
          //       key={newItm.id}
          //       data={newItm}
          //       handleClick={handleClick}
          //       dataRef={dataRef}
          //     />
          //   );
          // });

          // setListItms(newArr);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
    getNotifs();
  };

  return (
    <div className={styles.sidebarContainer}>
      <Notifications
        notifsData={notifsData}
        isNotifVisible={isNotifVisible}
        setIsNotifVisible={setIsNotifVisible}
      ></Notifications>
      <div className={styles.sidebar}>
        <div className={styles.headerButtons}>
          {back_arrow}
          <div className={styles.rightButtons}>
            <div className={styles.searchButton}>
              <SearchButton></SearchButton>
            </div>
            <div
              className={styles.bell}
              onClick={() => {
                setIsNotifVisible(!isNotifVisible);
                getNotifs();
              }}
            >
              {bell}
            </div>
          </div>
        </div>
        <div className={styles.profileSection}>
          <Link
            to={
              JSON.parse(localStorage.getItem("userData")).user_profile_obj
                .role === "Startup"
                ? "/dashboard/startup-profile"
                : "/dashboard/profile"
            }
            className={styles.profileAvatar}
          >
            <img
              src={
                JSON.parse(localStorage.getItem("userData")).user_profile_obj
                  .profile_logo
              }
              onError={(e) => {
                e.target.src = demoAvatar;
              }}
            />
          </Link>
          {/* <p>Welcome back,</p> */}
          <p></p>
          <p>{userData.name}</p>
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
            link="/partners/"
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
            link="/dashboard/forms"
          ></Button>
          <Button
            text="Resources"
            active={activeButton === "Resources"}
            handleButtonClick={handleButtonClick}
            link="/dashboard/resources"
          ></Button>
          <Button
            text="Connections"
            active={activeButton === "Connections"}
            handleButtonClick={handleButtonClick}
            link="/dashboard/connections"
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
            link="/dashboard/developers"
          ></Button>
        </div>
        {/* <div className={styles.conquestLogo}>
        <img height={50} width={53} src={dashboard_mountain_circle} />
      </div> */}

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
    </div>
  );
};
export default Sidebar;
