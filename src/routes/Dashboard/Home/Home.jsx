import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as timestamp from "unix-timestamp";

import { Avatar, ConfigProvider } from "antd";

import MeetingList from "../../../components/MeetingList/MeetingList";
import MeetingItem from "../../../components/MeetingList/MeetingItem/MeetingItem";
import UserPill from "../../../components/UserPill/UserPill";
import FormPillList from "../../../components/Dashboard/Forms/FormPillList/FormPillList";
import avatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";
import profilePic from "../../../assets/images/Dashboard/profilePic.jpg";

import * as styles from "./home.module.scss";
import { WebContext } from "../../../store/website-context";

export default function Home() {
  const { customDate } = useContext(WebContext);

  const navigate = useNavigate();
  const [listItms, setListItms] = useState([]);
  const [activeMeet, setActiveMeet] = useState({});
  const userRole = JSON.parse(localStorage.getItem("userData")).user_profile_obj
    .role;

  // GETTING MEETING DATA FROM CLICK
  const dataRef = useRef(null);

  function handleClick() {
    console.log(dataRef.current);
    try {
      const startTime = new customDate(
        dataRef.current.slot_start_time
      ).getTime();
      const endTime = new customDate(dataRef.current.slot_end_time).getTime();

      const date = new customDate(dataRef.current.slot_start_time).getDate();

      const month = new customDate(dataRef.current.slot_start_time).getMonth();

      const stateObject = {
        ...dataRef.current,
        startTime,
        endTime,
        date,
        month,
      };
      setActiveMeet(stateObject);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .get(`https://portal.conquest.org.in/api/meetings/meetings/upcoming/`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
              }`,
          },
        })
        .then((res) => {
          console.log(res.data);

          const newArr = res.data.meetings
            .filter((item) => item.status === "accepted")
            .map((newItm) => {
              return (
                <MeetingItem
                  date={newItm.slot_start_time}
                  avatar={
                    newItm.requested_name ===
                      JSON.parse(localStorage.getItem("userData"))
                        .user_profile_obj.name
                      ? newItm.requester_logo
                      : newItm.requested_logo
                  }
                  mentorName={
                    newItm.requested_name ===
                      JSON.parse(localStorage.getItem("userData"))
                        .user_profile_obj.name
                      ? newItm.requester_name
                      : newItm.requested_name
                  }
                  duration={45}
                  key={newItm.id}
                  data={newItm}
                  handleClick={handleClick}
                  dataRef={dataRef}
                  isGlobal={false}
                  type="join"
                />
              );
            });
          let newArr2 = res.data.global_events.map((newItm) => {
            return (
              <MeetingItem
                date={newItm.slot_start_time}
                avatar={
                  newItm.requested_name ===
                    JSON.parse(localStorage.getItem("userData")).user_profile_obj
                      .name
                    ? newItm.requester_logo
                    : newItm.requested_logo
                }
                mentorName={newItm.name}
                duration={45}
                key={newItm.id}
                data={newItm}
                handleClick={handleClick}
                dataRef={dataRef}
                isGlobal={true}
                type="join"
              />
            );
          });
          newArr.push(newArr2);
          console.log("abc", newArr);
          setListItms(newArr);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  }, [JSON.parse(localStorage.getItem("userData")).tokens.access]);

  let underGuidanceOf = null;
  let coach;
  let mentors;
  let experts;
  let partners;
  let angels;
  let startups;
  let guests;
  let alumni;
  let community;
  let startupChampion;
  let startupPOC;

  if (JSON.parse(localStorage.getItem("userData")).startup_profile) {
    underGuidanceOf = JSON.parse(
      localStorage.getItem("userData")
    ).startup_profile.under_guidance_of.map((item, index) => {
      return {
        role: item.role,
        pill: (
          <UserPill
            avatar={item.profile_logo}
            name={item.name}
            profilePage={
              item.role === "Startup"
                ? `/dashboard/startup-profile/${item.id}`
                : `/dashboard/profile/${item.id}`
            }
            key={index}
          />
        ),
      };
    });
    coach = underGuidanceOf
      .filter((item) => item.role === "Coach")
      .map((item) => item.pill);
    mentors = underGuidanceOf
      .filter((item) => item.role === "Mentor")
      .map((item) => item.pill);
    experts = underGuidanceOf
      .filter((item) => item.role === "Function Expert")
      .map((item) => item.pill);
    partners = underGuidanceOf
      .filter(
        (item) =>
          item.role === "Partner - Company" ||
          item.role === "Partner - Individual Connected"
      )
      .map((item) => item.pill);
    angels = underGuidanceOf
      .filter((item) => item.role === "Angel")
      .map((item) => item.pill);
    startups = underGuidanceOf
      .filter((item) => item.role === "Startup")
      .map((item) => item.pill);
    guests = underGuidanceOf
      .filter(
        (item) =>
          item.role === "Guest - Tier 2" || item.role === "Guest - Tier 1"
      )
      .map((item) => item.pill);
    alumni = underGuidanceOf
      .filter((item) => item.role === "Alumni")
      .map((item) => item.pill);
    community = underGuidanceOf
      .filter((item) => item.role === "Community")
      .map((item) => item.pill);
    // startups = underGuidanceOf
    //   .filter((item) => item.role === "Startup")
    //   .map((item) => item.pill);
  }
  let startupChampionData;
  if (
    JSON.parse(localStorage.getItem("userData")).user_profile_obj.role ===
    "Startup"
  ) {
    startupChampion = JSON.parse(localStorage.getItem("userData"))
      .startup_profile.startup_champion;

    startupChampion = startupChampionData ? (
      <UserPill
        avatar={startupChampionData.profile_logo}
        name={startupChampionData.name}
      />
    ) : null;

    let startupPOCData;
    if (
      JSON.parse(localStorage.getItem("userData")).user_profile_obj.role ===
      "Startup"
    ) {
      startupPOCData = JSON.parse(localStorage.getItem("userData"))
        .startup_profile.startup_poc;
    }

    startupPOC = startupPOCData ? (
      <UserPill
        avatar={startupPOCData.profile_logo}
        name={startupPOCData.name}
      />
    ) : null;
  }

  const requester = activeMeet.requester_logo;
  const [convertedRequester, setConvertedRequester] = useState("");

  useEffect(() => {
    if (requester && requester.startsWith("https://drive.google.com")) {
      const url = new URL(img);
      const pathParts = url.pathname.split("/");
      const id = pathParts[3];
      if (id) {
        setConvertedRequester(
          `https://drive.google.com/thumbnail?sz=w1000&id=${id}`
        );
      } else {
        console.error("Invalid Google Drive URL format.");
      }
    }
  }, [requester]);

  const checkRequester = convertedRequester || requester || profilePic;

  return (
    <div className={styles.container}>
      <div className={styles.meetings}>
        <h1 className={styles.heading}>
          Conquest <span>Calendar:</span>
        </h1>
        <section className={styles.ongoing}>
          {dataRef.current ? (
            <>
              <h2>Meeting Info</h2>
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.30384 0.0350037C6.77721 0.0350037 5.28487 0.4877 4.01553 1.33585C2.74619 2.18399 1.75686 3.3895 1.17264 4.79992C0.588427 6.21033 0.43557 7.76232 0.7334 9.25961C1.03123 10.7569 1.76637 12.1322 2.84586 13.2117C3.92534 14.2912 5.30069 15.0264 6.79798 15.3242C8.29527 15.622 9.84726 15.4692 11.2577 14.8849C12.6681 14.3007 13.8736 13.3114 14.7217 12.0421C15.5699 10.7727 16.0226 9.28038 16.0226 7.75375C16.0204 5.70728 15.2065 3.74524 13.7594 2.29816C12.3124 0.851082 10.3503 0.0371648 8.30384 0.0350037ZM8.30384 14.285C7.01208 14.285 5.74933 13.902 4.67527 13.1843C3.60121 12.4666 2.76408 11.4466 2.26975 10.2532C1.77541 9.05972 1.64607 7.74651 1.89808 6.47957C2.15009 5.21263 2.77213 4.04887 3.68555 3.13546C4.59896 2.22205 5.76271 1.60001 7.02965 1.348C8.29659 1.09599 9.60981 1.22533 10.8032 1.71967C11.9967 2.214 13.0167 3.05113 13.7344 4.12519C14.452 5.19924 14.8351 6.46199 14.8351 7.75375C14.8331 9.48535 14.1444 11.1455 12.92 12.3699C11.6955 13.5943 10.0354 14.283 8.30384 14.285ZM13.0538 7.75375C13.0538 7.91123 12.9913 8.06225 12.8799 8.1736C12.7686 8.28495 12.6176 8.3475 12.4601 8.3475H8.30384C8.14636 8.3475 7.99534 8.28495 7.88399 8.1736C7.77264 8.06225 7.71009 7.91123 7.71009 7.75375L7.71009 3.5975C7.71009 3.44003 7.77264 3.28901 7.88399 3.17766C7.99534 3.06631 8.14636 3.00375 8.30384 3.00375C8.46131 3.00375 8.61233 3.06631 8.72368 3.17766C8.83503 3.28901 8.89759 3.44003 8.89759 3.5975L8.89759 7.16L12.4601 7.16C12.6176 7.16 12.7686 7.22256 12.8799 7.33391C12.9913 7.44526 13.0538 7.59628 13.0538 7.75375Z"
                    fill="black"
                  />
                </svg>
                {activeMeet.startTime} - {activeMeet.endTime}
              </span>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.50377 1.52057C6.67174 1.52057 6.83283 1.58729 6.9516 1.70607C7.07037 1.82484 7.1371 1.98593 7.1371 2.1539V2.78724H13.4704V2.1539C13.4704 1.98593 13.5372 1.82484 13.6559 1.70607C13.7747 1.58729 13.9358 1.52057 14.1038 1.52057C14.2717 1.52057 14.4328 1.58729 14.5516 1.70607C14.6704 1.82484 14.7371 1.98593 14.7371 2.1539V2.78724H16.6371C17.141 2.78724 17.6243 2.98741 17.9806 3.34373C18.3369 3.70005 18.5371 4.18332 18.5371 4.68724V16.0872C18.5371 16.5911 18.3369 17.0744 17.9806 17.4307C17.6243 17.7871 17.141 17.9872 16.6371 17.9872H3.97043C3.46652 17.9872 2.98325 17.7871 2.62693 17.4307C2.27061 17.0744 2.07043 16.5911 2.07043 16.0872V4.68724C2.07043 4.18332 2.27061 3.70005 2.62693 3.34373C2.98325 2.98741 3.46652 2.78724 3.97043 2.78724H5.87043V2.1539C5.87043 1.98593 5.93716 1.82484 6.05593 1.70607C6.17471 1.58729 6.3358 1.52057 6.50377 1.52057ZM13.4704 4.0539V4.68724C13.4704 4.85521 13.5372 5.0163 13.6559 5.13507C13.7747 5.25384 13.9358 5.32057 14.1038 5.32057C14.2717 5.32057 14.4328 5.25384 14.5516 5.13507C14.6704 5.0163 14.7371 4.85521 14.7371 4.68724V4.0539H16.6371C16.8051 4.0539 16.9662 4.12063 17.0849 4.2394C17.2037 4.35817 17.2704 4.51926 17.2704 4.68724V6.58724H3.3371V4.68724C3.3371 4.51926 3.40383 4.35817 3.5226 4.2394C3.64137 4.12063 3.80246 4.0539 3.97043 4.0539H5.87043V4.68724C5.87043 4.85521 5.93716 5.0163 6.05593 5.13507C6.17471 5.25384 6.3358 5.32057 6.50377 5.32057C6.67174 5.32057 6.83283 5.25384 6.9516 5.13507C7.07037 5.0163 7.1371 4.85521 7.1371 4.68724V4.0539H13.4704ZM3.3371 7.8539V16.0872C3.3371 16.2552 3.40383 16.4163 3.5226 16.5351C3.64137 16.6538 3.80246 16.7206 3.97043 16.7206H16.6371C16.8051 16.7206 16.9662 16.6538 17.0849 16.5351C17.2037 16.4163 17.2704 16.2552 17.2704 16.0872V7.8539H3.3371ZM9.67043 9.7539C9.67043 9.58593 9.73716 9.42484 9.85593 9.30607C9.97471 9.18729 10.1358 9.12057 10.3038 9.12057C10.4717 9.12057 10.6328 9.18729 10.7516 9.30607C10.8704 9.42484 10.9371 9.58593 10.9371 9.7539C10.9371 9.92187 10.8704 10.083 10.7516 10.2017C10.6328 10.3205 10.4717 10.3872 10.3038 10.3872C10.1358 10.3872 9.97471 10.3205 9.85593 10.2017C9.73716 10.083 9.67043 9.92187 9.67043 9.7539ZM12.8371 9.12057C12.6691 9.12057 12.508 9.18729 12.3893 9.30607C12.2705 9.42484 12.2038 9.58593 12.2038 9.7539C12.2038 9.92187 12.2705 10.083 12.3893 10.2017C12.508 10.3205 12.6691 10.3872 12.8371 10.3872C13.0051 10.3872 13.1662 10.3205 13.2849 10.2017C13.4037 10.083 13.4704 9.92187 13.4704 9.7539C13.4704 9.58593 13.4037 9.42484 13.2849 9.30607C13.1662 9.18729 13.0051 9.12057 12.8371 9.12057ZM14.7371 9.7539C14.7371 9.58593 14.8038 9.42484 14.9226 9.30607C15.0414 9.18729 15.2025 9.12057 15.3704 9.12057C15.5384 9.12057 15.6995 9.18729 15.8183 9.30607C15.937 9.42484 16.0038 9.58593 16.0038 9.7539C16.0038 9.92187 15.937 10.083 15.8183 10.2017C15.6995 10.3205 15.5384 10.3872 15.3704 10.3872C15.2025 10.3872 15.0414 10.3205 14.9226 10.2017C14.8038 10.083 14.7371 9.92187 14.7371 9.7539ZM15.3704 11.6539C15.2025 11.6539 15.0414 11.7206 14.9226 11.8394C14.8038 11.9582 14.7371 12.1193 14.7371 12.2872C14.7371 12.4552 14.8038 12.6163 14.9226 12.7351C15.0414 12.8538 15.2025 12.9206 15.3704 12.9206C15.5384 12.9206 15.6995 12.8538 15.8183 12.7351C15.937 12.6163 16.0038 12.4552 16.0038 12.2872C16.0038 12.1193 15.937 11.9582 15.8183 11.8394C15.6995 11.7206 15.5384 11.6539 15.3704 11.6539ZM12.2038 12.2872C12.2038 12.1193 12.2705 11.9582 12.3893 11.8394C12.508 11.7206 12.6691 11.6539 12.8371 11.6539C13.0051 11.6539 13.1662 11.7206 13.2849 11.8394C13.4037 11.9582 13.4704 12.1193 13.4704 12.2872C13.4704 12.4552 13.4037 12.6163 13.2849 12.7351C13.1662 12.8538 13.0051 12.9206 12.8371 12.9206C12.6691 12.9206 12.508 12.8538 12.3893 12.7351C12.2705 12.6163 12.2038 12.4552 12.2038 12.2872ZM10.3038 11.6539C10.1358 11.6539 9.97471 11.7206 9.85593 11.8394C9.73716 11.9582 9.67043 12.1193 9.67043 12.2872C9.67043 12.4552 9.73716 12.6163 9.85593 12.7351C9.97471 12.8538 10.1358 12.9206 10.3038 12.9206C10.4717 12.9206 10.6328 12.8538 10.7516 12.7351C10.8704 12.6163 10.9371 12.4552 10.9371 12.2872C10.9371 12.1193 10.8704 11.9582 10.7516 11.8394C10.6328 11.7206 10.4717 11.6539 10.3038 11.6539ZM7.1371 12.2872C7.1371 12.1193 7.20383 11.9582 7.3226 11.8394C7.44137 11.7206 7.60246 11.6539 7.77043 11.6539C7.93841 11.6539 8.0995 11.7206 8.21827 11.8394C8.33704 11.9582 8.40377 12.1193 8.40377 12.2872C8.40377 12.4552 8.33704 12.6163 8.21827 12.7351C8.0995 12.8538 7.93841 12.9206 7.77043 12.9206C7.60246 12.9206 7.44137 12.8538 7.3226 12.7351C7.20383 12.6163 7.1371 12.4552 7.1371 12.2872ZM5.2371 11.6539C5.06913 11.6539 4.90804 11.7206 4.78927 11.8394C4.67049 11.9582 4.60377 12.1193 4.60377 12.2872C4.60377 12.4552 4.67049 12.6163 4.78927 12.7351C4.90804 12.8538 5.06913 12.9206 5.2371 12.9206C5.40507 12.9206 5.56616 12.8538 5.68494 12.7351C5.80371 12.6163 5.87043 12.4552 5.87043 12.2872C5.87043 12.1193 5.80371 11.9582 5.68494 11.8394C5.56616 11.7206 5.40507 11.6539 5.2371 11.6539ZM4.60377 14.8206C4.60377 14.6526 4.67049 14.4915 4.78927 14.3727C4.90804 14.254 5.06913 14.1872 5.2371 14.1872C5.40507 14.1872 5.56616 14.254 5.68494 14.3727C5.80371 14.4915 5.87043 14.6526 5.87043 14.8206C5.87043 14.9885 5.80371 15.1496 5.68494 15.2684C5.56616 15.3872 5.40507 15.4539 5.2371 15.4539C5.06913 15.4539 4.90804 15.3872 4.78927 15.2684C4.67049 15.1496 4.60377 14.9885 4.60377 14.8206ZM7.77043 14.1872C7.60246 14.1872 7.44137 14.254 7.3226 14.3727C7.20383 14.4915 7.1371 14.6526 7.1371 14.8206C7.1371 14.9885 7.20383 15.1496 7.3226 15.2684C7.44137 15.3872 7.60246 15.4539 7.77043 15.4539C7.93841 15.4539 8.0995 15.3872 8.21827 15.2684C8.33704 15.1496 8.40377 14.9885 8.40377 14.8206C8.40377 14.6526 8.33704 14.4915 8.21827 14.3727C8.0995 14.254 7.93841 14.1872 7.77043 14.1872ZM9.67043 14.8206C9.67043 14.6526 9.73716 14.4915 9.85593 14.3727C9.97471 14.254 10.1358 14.1872 10.3038 14.1872C10.4717 14.1872 10.6328 14.254 10.7516 14.3727C10.8704 14.4915 10.9371 14.6526 10.9371 14.8206C10.9371 14.9885 10.8704 15.1496 10.7516 15.2684C10.6328 15.3872 10.4717 15.4539 10.3038 15.4539C10.1358 15.4539 9.97471 15.3872 9.85593 15.2684C9.73716 15.1496 9.67043 14.9885 9.67043 14.8206ZM12.8371 14.1872C12.6691 14.1872 12.508 14.254 12.3893 14.3727C12.2705 14.4915 12.2038 14.6526 12.2038 14.8206C12.2038 14.9885 12.2705 15.1496 12.3893 15.2684C12.508 15.3872 12.6691 15.4539 12.8371 15.4539C13.0051 15.4539 13.1662 15.3872 13.2849 15.2684C13.4037 15.1496 13.4704 14.9885 13.4704 14.8206C13.4704 14.6526 13.4037 14.4915 13.2849 14.3727C13.1662 14.254 13.0051 14.1872 12.8371 14.1872Z"
                    fill="black"
                  />
                </svg>
                {activeMeet.date} {activeMeet.month}
              </span>
              <div className={styles.join}>
                <div className={styles.mentor}>
                  <ConfigProvider
                    theme={{
                      token: {
                        lineWidth: 0,
                      },
                    }}
                  >
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 42,
                        lg: 42,
                        xl: 42,
                        xxl: 42,
                      }}
                      icon={<img src={checkRequester} alt="icon" />}
                    />
                  </ConfigProvider>
                  <span>
                    With
                    <br />
                    {activeMeet.requester_name}
                  </span>
                </div>
                <button>
                  Join{" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.5321 14.8972L26.6774 25.0237M26.5321 14.8972L16.4051 14.7991M26.5321 14.8972L14.8867 26.5969"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <h2>No meeting selected</h2>
          )}
        </section>
        <MeetingList listItms={listItms} />
      </div>
      <div className={styles.right}>
        {userRole === "Startup" && underGuidanceOf && (
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>
              Your <span>Pod:</span>
            </h1>
            <section className={styles.pillsWrapper}>
              {startupChampion && (
                <div className={styles.userPills}>
                  <h3>Startup Champion</h3>
                  <div className={styles.pillGrid}>{startupChampion}</div>
                </div>
              )}
              {startupPOC && (
                <div className={styles.userPills}>
                  <h3>Startup POC</h3>
                  <div className={styles.pillGrid}>{startupPOC}</div>
                </div>
              )}
              {coach[0] ? (
                <div className={styles.userPills}>
                  <h3>Coach</h3>
                  <div className={styles.pillGrid}>{coach}</div>
                </div>
              ) : null}
              {mentors[0] ? (
                <div className={styles.userPills}>
                  <h3>Mentors</h3>
                  <div className={styles.pillGrid}>{mentors}</div>
                </div>
              ) : null}
              {experts[0] ? (
                <div className={styles.userPills}>
                  <h3>Experts</h3>
                  <div className={styles.pillGrid}>{experts}</div>
                </div>
              ) : null}
              {partners[0] ? (
                <div className={styles.userPills}>
                  <h3>Partners</h3>
                  <div className={styles.pillGrid}>{partners}</div>
                </div>
              ) : null}
              {angels[0] ? (
                <div className={styles.userPills}>
                  <h3>Angels</h3>
                  <div className={styles.pillGrid}>{angels}</div>
                </div>
              ) : null}
              {startups[0] ? (
                <div className={styles.userPills}>
                  <h3>Startups</h3>
                  <div className={styles.pillGrid}>{startups}</div>
                </div>
              ) : null}
              {community[0] ? (
                <div className={styles.userPills}>
                  <h3>Community</h3>
                  <div className={styles.pillGrid}>{community}</div>
                </div>
              ) : null}
              {alumni[0] ? (
                <div className={styles.userPills}>
                  <h3>Alumni</h3>
                  <div className={styles.pillGrid}>{alumni}</div>
                </div>
              ) : null}
              {guests[0] ? (
                <div className={styles.userPills}>
                  <h3>Guests</h3>
                  <div className={styles.pillGrid}>{guests}</div>
                </div>
              ) : null}
              {/* {startups[0] ? <div className={styles.userPills}>
              <h3>Startups</h3>
              <div className={styles.pillGrid}>
                {startups}
              </div>
            </div> : null} */}
            </section>
          </div>
        )}
        <div className={styles.formsContainer}>
          <h1 className={styles.heading}>
            <div onClick={() => navigate("/dashboard/forms")}>
              Pending <span>Forms</span>
            </div>
            <span>
              <svg
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9165 21.9582L19.3748 15.4998L12.9165 9.0415"
                  stroke="#FB723D"
                  strokeWidth="3.22917"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>
          <FormPillList />
        </div>
      </div>
    </div>
  );
}
