import { useEffect, useState } from "react";
import * as styles from "./StartupProfile.module.scss";
import StartupProfileHeader from "../../../components/Startups/StartupProfileHeader/StartupProfileHeader";
import StartupProfileContact from "../../../components/Startups/StartupProfileContact/StartupProfileContact";
import ProfileButton from "../../../components/Startups/ProfileButton/ProfileButton";
import About from "../../../components/Startups/About/About";
import Team from "../../../components/Startups/Team/Team";
import Details from "../../../components/Startups/Details/Details";
import Pitch from "../../../components/Startups/Pitch/Pitch";
import logo from "../../../assets/images/Dashboard/demoAvatar.jpeg";
import axios from "axios";

// const dummyData = {
//     img: logo,
//     name: "Very long startup name",
//     desc: "Lorem ipsum dolor sit amet consectetur. Habitant accumsan feugiat quisque placerat porttitor.",
//     location: "Pilani, Rajasthan",
// }

let startupId = 1

const StartupProfile = () => {

    const [startupProfile, setstartupProfile] = useState({});
    const [selectedTopic, setSelectedTopic] = useState('about');

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userData")).tokens) {
            axios
                .get(
                    `https://conquest-api.bits-dvm.org/api/users/startup_detail/?id=${startupId}`,
                    
                    {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                                }`,
                        },
                        
                    }
                )
                .then(function (response) {
                    // console.log(response.data);
                    setstartupProfile(response.data);
                    // console.log(startupProfile)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("error in fetching data");
        }

    }, [startupId]);
    
    console.log(startupProfile)
    return (
        <>
            <StartupProfileHeader img={startupProfile.profile_logo} name={startupProfile.startup_name} desc={startupProfile.description} location={startupProfile.location_hq} />
        </>
    );
};

export default StartupProfile;