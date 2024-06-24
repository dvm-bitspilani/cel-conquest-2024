import { useContext, useEffect, useState } from "react";
import StartupProfileHeader from "../../../components/Startups/StartupProfileHeader/StartupProfileHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { WebContext } from "../../../store/website-context";

const StartupProfile = () => {
  const { setBookSlotRequestedID, contextHolder } = useContext(WebContext);

  const { id } = useParams();
  const [startupProfile, setstartupProfile] = useState({});
  const [userProfile, setuserProfile] = useState({});
  const [team, setTeam] = useState({});

  useEffect(() => {
    if (id) {
      if (JSON.parse(localStorage.getItem("userData")).tokens) {
        axios
          .get(
            `https://portal.conquest.org.in/api/users/startup_detail/?id=${id}`,
            {
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("userData")).tokens.access
                }`,
              },
              params: {
                id: id,
              },
            }
          )
          .then(function (response) {
            setstartupProfile(response.data);
            setuserProfile(response.data.user_profile);
            setTeam(response.data.team_member);
            console.log(startupProfile);
            setBookSlotRequestedID(response.data.user_profile.id);
          })
          .catch(function (error) {
            console.log(error);
            console.log(id);
          });
      } else {
        console.log("error in fetching data");
      }
    } else {
      if (JSON.parse(localStorage.getItem("userData")).tokens) {
        axios
          .get(
            `https://portal.conquest.org.in/api/users/startup_detail/?id=${
              JSON.parse(localStorage.getItem("userData")).startup_profile.id
            }`,
            {
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("userData")).tokens.access
                }`,
              },
              params: {
                id: id,
              },
            }
          )
          .then(function (response) {
            setstartupProfile(response.data);
            setuserProfile(response.data.user_profile);
            setTeam(response.data.team_member);
            console.log(startupProfile);
          })
          .catch(function (error) {
            console.log(error);
            console.log(id);
          });
      } else {
        console.log("error in fetching data");
      }
    }
  }, [JSON.parse(localStorage.getItem("userData")).tokens.access, id]);

  return (
    <>
      {contextHolder}
      <StartupProfileHeader
        img={startupProfile.profile_logo}
        name={startupProfile.startup_name}
        desc={startupProfile.description}
        location={startupProfile.location_hq}
        email={startupProfile.contact_email}
        website={startupProfile.website_url}
        // twitter={startupProfile.twitter}
        linkedin={startupProfile.linkedin}
        founder={startupProfile.location_hq}
        cofounder={startupProfile.location_hq}
        stage={startupProfile.stage}
        pitchdeck={startupProfile.pitch_deck}
        pitchvideo={startupProfile.video_pitch}
        industries={startupProfile.industry}
        areas={startupProfile.functional_areas}
        teamArray={startupProfile.team_members}
        schedulebtn={startupProfile.role}
        startupid={id}
        vision={startupProfile.short_term_vision}
      />
    </>
  );
};

export default StartupProfile;
