import { useContext, useEffect, useState } from "react";
import MentorProfileHeader from "../../../components/Mentors/MentorProfileHeader/MentorProfileHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { WebContext } from "../../../store/website-context";

const MentorProfile = () => {
  const { contextHolder } = useContext(WebContext);
  const { id } = useParams();
  const [startupProfile, setstartupProfile] = useState({});
  // const [userProfile, setuserProfile] = useState({});
  // const [team, setTeam] = useState({});

  useEffect(() => {
    if (id) {
      if (JSON.parse(localStorage.getItem("userData")).tokens) {
        axios
          .get(
            `https://conquest-api.bits-dvm.org/api/users/profile_detail/?id=${id}`,
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                  }`,
              },
              params: {
                id: id,
              },
            }
          )
          .then(function (response) {
            setstartupProfile(response.data);
            // setuserProfile(response.data.user_profile);
            // console.log(response.data.user_profile);
            // setTeam(response.data.team_member);
            console.log(response);
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
            `https://conquest-api.bits-dvm.org/api/users/profile_detail/?id=${JSON.parse(localStorage.getItem("userData")).user_profile_obj.id
            }`,
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                  }`,
              },
              params: {
                id: id,
              },
            }
          )
          .then(function (response) {
            setstartupProfile(response.data);
            // setuserProfile(response.data.user_profile);
            // setTeam(response.data.team_member);
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
      <MentorProfileHeader
        img={startupProfile.profile_logo}
        name={startupProfile.name}
        desg={startupProfile.designation}
        desc={startupProfile.description}
        location={startupProfile.location}
        sector={startupProfile.sector_of_expertise}
        verticals={startupProfile.verticals}
        horizontals={startupProfile.horizontals}
        functionsOfExpertise={startupProfile.function_of_expertise}
        businessModels={startupProfile.business_models}
        domain={startupProfile.domain_of_expertise}
        // resume={startupProfile.resume}
        // twitter={startupProfile.twitter}
        linkedin={startupProfile.linkedin}
        companyname={startupProfile.company_name}
        schedulebtn={startupProfile.role}
        connection={startupProfile.connection}
        user={startupProfile.user}
        startupid={id}
      />
    </>
  );
};

export default MentorProfile;
