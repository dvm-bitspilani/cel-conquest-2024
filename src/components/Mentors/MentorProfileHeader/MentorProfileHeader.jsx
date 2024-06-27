import { useContext, useEffect, useRef, useState } from "react";
import * as styles from "./MentorProfileHeader.module.scss";
import axios from "axios";
import MentorProfileContact from "../MentorProfileContact/MentorProfileContact";
import MentorAbout from "../MentorAbout/MentorAbout";
import FormModal from "../../Dashboard/Forms/FormModal/FormModal";
import BookMeeting from "../../Dashboard/Meetings/BookMeeting/BookMeeting";
import profilePic from "../../../assets/profilePic.svg";
import BookSlots from "../../Dashboard/Meetings/BookSlots/BookSlots";
import { WebContext } from "../../../store/website-context";
// import ProfileModal from "./ProfileEdit/Modal/Modal";

export default function MentorProfileHeader({
  img,
  name,
  desg,
  desc,
  location,
  sector,
  domain,
  // resume,
  // twitter,
  linkedin,
  companyname,
  schedulebtn,
  startupid,
  connection,
  user,
}) {
  const { displayMessage } = useContext(WebContext);
  const formModal = useRef(null);
  const [requestSent, setRequestSent] = useState(false);
  const [connectionState, setConnectionState] = useState(connection);
  const [startupBookingState, setStartupBookingState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setConnectionState(connection);
  }, [connection]);

  let connectionBtnText;
  switch (connectionState) {
    case "not-connected":
      connectionBtnText = "Add Connection";
      break;
    case "connected":
      connectionBtnText = "Remove Connection";
      break;
    case "sent":
      connectionBtnText = "Sent Connection";
      break;
    case "received":
      connectionBtnText = "Accept Connection";
      break;
  }

  function connectionHandler() {
    if (connectionState === "not-connected") {
      setIsLoading(true);
      axios
        .post(
          "https://conquest-api.bits-dvm.org/api/users/connections/send/",
          {
            username: user.username,
          },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("tokens")).access
              }`,
            },
          }
        )
        .then((res) => {
          setConnectionState("sent");
          displayMessage("success", res.data.message);
          setIsLoading(false);
        })
        .catch((err) => {
          displayMessage("error", "An error occured");
          console.log(err);
          setIsLoading(false);
        });
    } else if (connectionState === "connected") {
      setIsLoading(true);
      axios
        .post(
          "https://conquest-api.bits-dvm.org/api/users/connections/delete/",
          {
            id: startupid,
          },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("tokens")).access
              }`,
            },
          }
        )
        .then((res) => {
          setConnectionState("not-connected");
          displayMessage("success", res.data.message);
          setIsLoading(false);
        })
        .catch((err) => {
          displayMessage("error", "An error occured");
          console.log(err);
          setIsLoading(false);
        });
    } else if (connectionState === "received") {
      setIsLoading(true);
      axios
        .post(
          "https://conquest-api.bits-dvm.org/api/users/connections/accept/",
          {
            status: true,
            id: startupid,
          },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("tokens")).access
              }`,
            },
          }
        )
        .then((res) => {
          setConnectionState("connected");
          displayMessage("success", res.data.message);
          setIsLoading(false);
        })
        .catch((err) => {
          displayMessage("error", "An error occured");
          console.log(err);
          setIsLoading(false);
        });
    }
  }

  const userProfile = JSON.parse(
    localStorage.getItem("userData")
  ).user_profile_obj;
  const role1_Startup = userProfile.role === "Startup";
  const role1_Mentor = userProfile.role === "Mentor";

  useEffect(() => {
    if (role1_Startup) {
      axios
        .get("https://conquest-api.bits-dvm.org/api/meetings/portal_state/", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("tokens")).access
            }`,
          },
        })
        .then((res) => {
          setStartupBookingState(res.data.is_active);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // const role = { schedulebtn };
  const startup = { startupid };

  const changeRequestSent = () => {
    setRequestSent(!requestSent);
  };

  const [selectSlotTiming, setselectSlotTiming] = useState(false);
  const [bookSlots, setBookSlots] = useState(false);

  let showHideSelectSlotTiming = () => {
    setselectSlotTiming(!selectSlotTiming);
  };

  let showHideBookSlots = () => {
    setBookSlots(!bookSlots);
  };

  const [convertedImg, setConvertedImg] = useState('');

  useEffect(() => {
    if (img && img.startsWith('https://drive.google.com')) {
      const url = new URL(img);
      const pathParts = url.pathname.split('/');
      const id = pathParts[3];
      if (id) {
        setConvertedImg(`https://drive.google.com/thumbnail?sz=w1000&id=${id}`);
      } else {
        console.error('Invalid Google Drive URL format.');
      }
    }
  }, [img]);

  const checkProfilePic = convertedImg || img || profilePic;

  const combinedStyle = {
    ...(connectionState === "sent" || isLoading
      ? { filter: "grayscale(1)", cursor: "not-allowed" }
      : {}),
    zIndex: 2,
    marginRight: "10px",
    display:
      (role1_Mentor || role1_Startup) && startup.startupid !== undefined
        ? null
        : "none",
  };

  return (
    <>
      <FormModal ref={formModal} title="Edit Profile" formType="profile edit" />
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.contentContainer}>
            <div className={styles.logoContainer}>
              <div>
                <img src={checkProfilePic} alt="" />
              </div>
            </div>

            <div className={styles.headerContainer}>
              <div className={styles.name}>{name}</div>
              <div>
                <span className={styles.location}>Company : </span>
                {companyname}
              </div>
              <div>
                <span className={styles.location}>Designation : </span>
                {desg}
              </div>
              <div>
                <span className={styles.location}>Location : </span>
                {location}
              </div>
            </div>
          </div>

          <div className={styles.profileInfoContainer}>
            <MentorAbout desc={desc} sector={sector} domain={domain} />
          </div>

          <div className={styles.mobile}>
            <div className={styles.button}>
              <div>
                <div className={styles.btnWrapper}>
                  {!startupid && (
                    <div
                      className={styles.mobileButton}
                      onClick={() => formModal.current.openForm()}
                    >
                      Edit
                    </div>
                  )}
                  <button
                    style={{
                      zIndex: 2,
                      marginRight: "10px",
                      display:
                        (role1_Mentor || role1_Startup) &&
                        startup.startupid !== undefined
                          ? null
                          : "none",
                    }}
                    className={
                      role1_Startup
                        ? startupBookingState
                          ? `${styles.mobileButton1}`
                          : `${styles.mobileButton1} ${styles.disabledMobile}`
                        : connectionState === "connected"
                        ? `${styles.mobileButton1}`
                        : `${styles.mobileButton1} ${styles.disabledMobile}`
                    }
                    disabled={
                      role1_Startup
                        ? !startupBookingState
                        : connectionState !== "connected"
                    }
                    onClick={
                      role1_Mentor
                        ? showHideSelectSlotTiming
                        : showHideBookSlots
                    }
                  >
                    {role1_Mentor ? "Book Meeting" : "Book Slot"}
                  </button>

                  <button
                    className={styles.mobileButton1}
                    onClick={connectionHandler}
                    disabled={connectionState === "sent" || isLoading}
                    style={combinedStyle}
                  >
                    {connectionBtnText}
                  </button>
                </div>

                {(() => {
                  if (role1_Mentor && startup.startupid !== undefined) {
                    if (selectSlotTiming) {
                      return (
                        <BookMeeting
                          selectSlotTiming={selectSlotTiming}
                          showHideSelectSlotTiming={showHideSelectSlotTiming}
                          removeModal={showHideSelectSlotTiming}
                          changeRequestSent={changeRequestSent}
                        />
                      );
                    }
                  } else {
                    if (
                      role1_Startup &&
                      startup.startupid !== undefined &&
                      bookSlots
                    ) {
                      return (
                        <BookSlots
                          bookSlots={bookSlots}
                          showHideBookSlots={showHideBookSlots}
                        />
                      );
                    }
                  }
                  return null;
                })()}
              </div>
            </div>
            <div className={styles.head}>
              <p className={styles.headings}>About</p>
              <MentorAbout desc={desc} sector={sector} domain={domain} />
            </div>

            <div className={styles.head}>
              <MentorProfileContact
                // resume={resume}
                // twitter={twitter}
                linkedin={linkedin}
              />
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.buttonContainer}>
            {!startupid && (
              <div
                className={styles.edit}
                onClick={() => formModal.current.openForm()}
              >
                Edit
              </div>
            )}

            <div>
              <div className={styles.btnWrapper}>
                <button
                  style={{
                    zIndex: 2,
                    marginRight: "10px",
                    display:
                      (role1_Mentor || role1_Startup) &&
                      startup.startupid !== undefined
                        ? null
                        : "none",
                  }}
                  className={
                    role1_Startup
                      ? startupBookingState
                        ? `${styles.schedule}`
                        : `${styles.schedule} ${styles.disabled}`
                      : connectionState === "connected"
                      ? `${styles.schedule}`
                      : `${styles.schedule} ${styles.disabled}`
                  }
                  disabled={
                    role1_Startup
                      ? !startupBookingState
                      : connectionState !== "connected"
                  }
                  onClick={
                    role1_Mentor ? showHideSelectSlotTiming : showHideBookSlots
                  }
                >
                  {role1_Mentor ? "Book Meeting" : "Book Slot"}
                </button>

                <button
                  className={styles.schedule}
                  onClick={connectionHandler}
                  disabled={connectionState === "sent" || isLoading}
                  style={combinedStyle}
                >
                  {connectionBtnText}
                </button>
              </div>

              {(() => {
                if (role1_Mentor && startup.startupid !== undefined) {
                  if (selectSlotTiming) {
                    return (
                      <BookMeeting
                        selectSlotTiming={selectSlotTiming}
                        showHideSelectSlotTiming={showHideSelectSlotTiming}
                        removeModal={showHideSelectSlotTiming}
                        changeRequestSent={changeRequestSent}
                      />
                    );
                  }
                } else {
                  if (
                    role1_Startup &&
                    startup.startupid !== undefined &&
                    bookSlots
                  ) {
                    return (
                      <BookSlots
                        bookSlots={bookSlots}
                        showHideBookSlots={showHideBookSlots}
                      />
                    );
                  }
                }
                return null;
              })()}
            </div>
          </div>
          <MentorProfileContact
            // resume={resume}
            // twitter={twitter}
            linkedin={linkedin}
          />
        </div>
      </div>
    </>
  );
}
