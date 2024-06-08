import { useEffect } from "react";
import * as styles from "./StartupProfile.module.scss";
import StartupProfileHeader from "../../../components/Startups/StartupProfileHeader/StartupProfileHeader";
import logo from "../../../assets/images/Dashboard/demoAvatar.jpeg";
import axios from "axios";

const dummyData = {
    img: logo,
    name: "Very long startup name",
    desc: "Lorem ipsum dolor sit amet consectetur. Habitant accumsan feugiat quisque placerat porttitor.",
    location: "Pilani, Rajasthan",
}

let startupId = 1

const StartupProfile = () => {

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
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("error in fetching data");
        }

    }, [JSON.parse(localStorage.getItem("userData")).tokens.access]);
    return (
        <>
            <StartupProfileHeader {...dummyData} />
        </>
    );
};

export default StartupProfile;