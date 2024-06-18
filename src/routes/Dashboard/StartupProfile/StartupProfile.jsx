import { useEffect, useState } from "react";
import StartupProfileHeader from "../../../components/Startups/StartupProfileHeader/StartupProfileHeader";
import axios from "axios";
import { useParams } from "react-router-dom";

const StartupProfile = () => {
  const { id } = useParams();
  const [startupProfile, setstartupProfile] = useState({});
  const [userProfile, setuserProfile] = useState({});
  const [team, setTeam] = useState({});

  useEffect(() => {
    if (id) {
      if (JSON.parse(localStorage.getItem("userData")).tokens) {
        axios
          .get(
            `https://conquest-api.bits-dvm.org/api/users/startup_detail/?id=${id}`,
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
    } else {
      setstartupProfile(
        JSON.parse(localStorage.getItem("userData")).user_profile_obj
      );
    }
  }, [JSON.parse(localStorage.getItem("userData")).tokens.access, id]);

  return (
    <>
      <StartupProfileHeader
        img={startupProfile.profile_logo}
        name={startupProfile.startup_name}
        desc={startupProfile.description}
        location={startupProfile.location_hq}
        email={startupProfile.contact_email}
        website={startupProfile.website_url}
        twitter={startupProfile.twitter}
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
      />
    </>
  );
};

export default StartupProfile;
