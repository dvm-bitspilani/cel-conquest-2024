import { useContext, useEffect, useRef, useState } from "react";
import * as styles from "./MentorProfileHeader.module.scss";
import axios from "axios";
import MentorProfileContact from "../MentorProfileContact/MentorProfileContact";
import MentorAbout from "../MentorAbout/MentorAbout";
import FormModal from "../../Dashboard/Forms/FormModal/FormModal";
import SlotTimingSelector from "../../Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";
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
  resume,
  twitter,
  linkedin,
  companyname,
  schedulebtn,
  startupid,
  connection,
  user
}) {
  const { displayMessage } = useContext(WebContext)
  const formModal = useRef(null);
  const [requestSent, setRequestSent] = useState(false);
  const [connectionState, setConnectionState] = useState(connection)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setConnectionState(connection)
  }, [connection])

  let connectionBtnText;
  switch (connectionState) {
    case 'not-connected':
      connectionBtnText = 'Add Connection';
      break;
    case 'connected':
      connectionBtnText = 'Remove Connection';
      break;
    case 'sent':
      connectionBtnText = 'Sent Connection';
      break;
    case 'received':
      connectionBtnText = 'Accept Connection';
      break;
  }

  function connectionHandler() {
    if (connectionState === 'not-connected') {
      setIsLoading(true)
      axios.post('https://conquest-api.bits-dvm.org/api/users/connections/send/', {
        username: user.username
      }, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('tokens')).access}`
        }
      })
        .then(res => {
          setConnectionState('sent')
          displayMessage('success', res.data.message)
          setIsLoading(false)
        })
        .catch(err => {
          displayMessage('error', "An error occured")
          console.log(err)
          setIsLoading(false)
        })
    }
    else if (connectionState === 'connected') {
      setIsLoading(true)
      axios.post('https://conquest-api.bits-dvm.org/api/users/connections/delete/', {
        id: startupid
      }, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('tokens')).access}`
        }
      })
        .then(res => {
          setConnectionState('not-connected')
          displayMessage('success', res.data.message)
          setIsLoading(false)
        })
        .catch(err => {
          displayMessage('error', "An error occured")
          console.log(err)
          setIsLoading(false)
        })
    }
    else if (connectionState === 'received') {
      setIsLoading(true)
      axios.post("https://conquest-api.bits-dvm.org/api/users/connections/accept/", {
        status: true,
        id: startupid
      }, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('tokens')).access}`
        }
      })
        .then(res => {
          setConnectionState('connected')
          displayMessage('success', res.data.message)
          setIsLoading(false)
        })
        .catch(err => {
          displayMessage('error', "An error occured")
          console.log(err)
          setIsLoading(false)
        })
    }
  }

  const userProfile = JSON.parse(
    localStorage.getItem("userData")
  ).user_profile_obj;
  const role1_Startup = userProfile.role === "Startup";
  const role1_Mentor = userProfile.role === "Mentor";

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

  return (
    <>
      <FormModal ref={formModal} title="Edit Profile" formType="profile edit" />
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.contentContainer}>
            <div className={styles.logoContainer}>
              <div>
                <img src={img} alt="" />
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
              {!startupid && (
                <div
                  className={styles.mobileButton}
                  onClick={() => formModal.current.openForm()}
                >
                  Edit
                </div>
              )}

              <div>
                <button
                  style={{
                    zIndex: 2,
                    display:
                      (role1_Mentor || role1_Startup) &&
                        startup.startupid !== undefined
                        ? null
                        : "none",
                  }}
                  className={styles.mobileButton1}
                  onClick={
                    role1_Mentor ? showHideSelectSlotTiming : showHideBookSlots
                  }
                >
                  {role1_Mentor ? "Select Slot" : "Book Slot"}
                </button>

                {(() => {
                  if (role1_Mentor && startup.startupid !== undefined) {
                    if (selectSlotTiming) {
                      return (
                        <SlotTimingSelector
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
                resume={resume}
                twitter={twitter}
                linkedin={linkedin}
              />
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.buttonContainer}>
            {!startupid && (
              <div
                className={styles.schedule}
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
                  className={styles.schedule}
                  onClick={
                    role1_Mentor ? showHideSelectSlotTiming : showHideBookSlots
                  }
                >
                  {role1_Mentor ? "Select Slot" : "Book Slot"}
                </button>

                <button
                  className={styles.schedule}
                  onClick={connectionHandler}
                  disabled={connectionState === 'sent' || isLoading}
                >{connectionBtnText}</button>
              </div>

              {(() => {
                if (role1_Mentor && startup.startupid !== undefined) {
                  if (selectSlotTiming) {
                    return (
                      <SlotTimingSelector
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
            resume={resume}
            twitter={twitter}
            linkedin={linkedin}
          />
        </div>
      </div>
    </>
  );
}
