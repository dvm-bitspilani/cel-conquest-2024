import { useRef, useState } from "react";
import * as styles from "./StartupProfileHeader.module.scss";
import StartupProfileContact from "../StartupProfileContact/StartupProfileContact";
import ProfileButton from "../ProfileButton/ProfileButton";
import About from "../About/About";
import Team from "../Team/Team";
import Details from "../Details/Details";
import Pitch from "../Pitch/Pitch";
import FormModal from "../../Dashboard/Forms/FormModal/FormModal";
import SlotTimingSelector from "../../Dashboard/Meetings/SlotTimingSelector/SlotTimingSelector";
import BookSlots from "../../Dashboard/Meetings/BookSlots/BookSlots";
// import ProfileModal from "./ProfileEdit/Modal/Modal";

// const dummyContact = {
//     phone: "+91 00001 73314",
//     email: "random@email.com",
//     website: "bits-dvm.org",
//     twitter: "https://x.com",
//     linkedin: "https://linkedin.com",
// }

// const DummyAbout = {
//     description: "Lorem ipsum dolor sit amet consectetur. Adipiscing quisque massa scelerisque dolor est quis sit etiam augue. Risus risus etiam phasellus suspendisse augue placerat nisi arcu.",
//     industries: ["Climate Tech", "EV", "Fin-Tech", "Climate Tech", "Lorem Ipsum", "Lorem Ipsum"],
//     areas: ["Climate Tech", "EV", "Fin-Tech"]
// }

// const dummyDetails = {
//     founder: "A very very very long name",
//     cofounder1: "A very very very long name",
//     cofounder2: "A very very very long name",
//     location: "Pilani, Rajasthan",
//     stage: "Early Stage",
// }

// const profileInfo = {
//     about: <About {...DummyAbout} />,
//     details: <Details {...dummyDetails} />,
//     pitch: <Pitch />,
//     team: <Team />,
// }

export default function StartupProfileHeader({
  img,
  name,
  desc,
  location,
  email,
  website,
  twitter,
  linkedin,
  founder,
  cofounder,
  stage,
  pitchdeck,
  pitchvideo,
  industries,
  areas,
  teamArray,
  schedulebtn,
  startupid
}) {
  const [selectedTopic, setSelectedTopic] = useState("about");

  const formModal = useRef(null);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const profileInfo = {
    about: <About desc={desc} industries={industries} areas={areas} />,
    details: (
      <Details
        founder={founder}
        cofounder={cofounder}
        location={location}
        stage={stage}
        teamArray={teamArray}
      />
    ),
    pitch: <Pitch pitchdeck={pitchdeck} pitchvideo={pitchvideo} />,
    team: <Team teamArray={teamArray} />,
  };

  const [requestSent, setRequestSent] = useState(false);
  const userProfile = JSON.parse(localStorage.getItem("userData")).user_profile_obj;
  const role1_Startup = userProfile.role === "Startup";
  const role1_Mentor = userProfile.role === "Mentor";

  const role = { schedulebtn };
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
              <div className={styles.desc}>{desc}</div>
              <div>
                <span className={styles.location}>Location HQ : </span>
                {location}
              </div>
            </div>
          </div>
          <div className={styles.tabsContainer}>
            <ProfileButton
              isSelected={selectedTopic === "about"}
              onSelect={() => handleSelect("about")}
            >
              About
            </ProfileButton>
            <ProfileButton
              isSelected={selectedTopic === "details"}
              onSelect={() => handleSelect("details")}
            >
              Details
            </ProfileButton>
            <ProfileButton
              isSelected={selectedTopic === "pitch"}
              onSelect={() => handleSelect("pitch")}
            >
              Pitch
            </ProfileButton>
            <ProfileButton
              isSelected={selectedTopic === "team"}
              onSelect={() => handleSelect("team")}
            >
              Team
            </ProfileButton>
          </div>
          <div className={styles.profileInfoContainer}>
            {profileInfo[selectedTopic]}
          </div>

          <div className={styles.mobile}>
            <div className={styles.button}>
              <button className={styles.btn_m}>Message</button>
              <button className={`${styles.btn_m} ${styles.schedule_m}`}>
                Schedule
              </button>
            </div>
            <div className={styles.head}>
              <p className={styles.headings}>About</p>
              <About desc={desc} industries={industries} areas={areas} />
            </div>
            <div className={styles.head}>
              <p className={styles.headings}>Details</p>
              <Details
                founder={founder}
                cofounder={cofounder}
                location={location}
                stage={stage}
              />
            </div>
            <div className={styles.head}>
              <p className={styles.headings}>Pitch</p>
              <Pitch pitchdeck={pitchdeck} pitchvideo={pitchvideo} />
            </div>
            <div className={styles.head}>
              <p className={styles.headings}>Team</p>
              <Team teamArray={teamArray} />
            </div>
            <div className={styles.head}>
              <p className={styles.headings}>Contact</p>
              <StartupProfileContact
                email={email}
                website={website}
                twitter={twitter}
                linkedin={linkedin}
              />
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.buttonContainer}>
            {/* <div className={styles.btn}>Message</div> */}
            <div
              className={`${styles.btn} ${styles.schedule}`}
              onClick={() => formModal.current.openForm()}
            >
              Edit
            </div>

            <div>
              <button
                style={{ zIndex: 2, display: role1_Mentor && startup.startupid !== undefined ? null : "none" }}
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
          <StartupProfileContact
            email={email}
            website={website}
            twitter={twitter}
            linkedin={linkedin}
          />
        </div>
      </div>
    </>
  );
}
