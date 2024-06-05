import React from "react";
import { Button } from "antd";
import * as styles from "./StartupProfile.module.scss";
import StartupProfileHeader from "../../../components/Startups/StartupProfileHeader/StartupProfileHeader";
import logo from "../../../assets/images/Dashboard/demoAvatar.jpeg";

const dummyData = {
    img: logo,
    name: "Very long startup name",
    desc: "Lorem ipsum dolor sit amet consectetur. Habitant accumsan feugiat quisque placerat porttitor.",
    location: "Pilani, Rajasthan",
}

const StartupProfile = () => {
    return (
        <>
            <StartupProfileHeader {...dummyData}/>
        </>
    );
};

export default StartupProfile;