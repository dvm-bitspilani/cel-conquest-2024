import * as styles from "./Team.module.scss"
import TeamCard from "../TeamCard/TeamCard";
import avatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

const dummyTeamData = {
    img: avatar,
    name: "Short Name",
    position: "Co-Founder",
}

const arrayofData = Array.from({ length: 18 }, () => ({ ...dummyTeamData }));

export default function Team() {
    return (
        <>
            <div className={styles.teamContainer}>
                {arrayofData.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </>
    )
}