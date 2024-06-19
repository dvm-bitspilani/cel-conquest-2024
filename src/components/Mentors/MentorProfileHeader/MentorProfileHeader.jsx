import { useRef, useState } from "react";
import * as styles from "./MentorProfileHeader.module.scss";
import MentorProfileContact from "../MentorProfileContact/MentorProfileContact";
import MentorAbout from "../MentorAbout/MentorAbout";
import FormModal from "../../Dashboard/Forms/FormModal/FormModal";
import SlotTimingSelector from "../../Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";
import BookSlots from "../../Dashboard/Meetings/BookSlots/BookSlots";
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
  startupid
}) {
  

  const formModal = useRef(null);

  const [requestSent, setRequestSent] = useState(false);
  const userProfile = JSON.parse(localStorage.getItem("userData")).user_profile_obj;
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
      <FormModal ref={formModal} title='Edit Profile' formType='profile edit' />
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
              {!startupid && (<div
                className={styles.mobileButton}
                onClick={() => formModal.current.openForm()}
              >
                Edit
              </div>)}

              <div>
                <button
                  style={{ zIndex: 2, display: (role1_Mentor || role1_Startup) && startup.startupid !== undefined ? null : "none" }}
                  className={styles.mobileButton1}
                  onClick={role1_Mentor ? showHideSelectSlotTiming : showHideBookSlots}
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
                    if (role1_Startup && startup.startupid !== undefined && bookSlots) {
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
            {!startupid && (<div
              className={styles.schedule}
              onClick={() => formModal.current.openForm()}
            >
              Edit
            </div>)}

            <div>
              <button
                style={{ zIndex: 2, display: (role1_Mentor || role1_Startup) && startup.startupid !== undefined ? null : "none" }}
                className={styles.schedule}
                onClick={role1_Mentor ? showHideSelectSlotTiming : showHideBookSlots}
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
                  if (role1_Startup && startup.startupid !== undefined && bookSlots) {
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
