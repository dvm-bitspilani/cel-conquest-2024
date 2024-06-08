import * as styles from "./Team.module.scss";
import TeamCard from "../TeamCard/TeamCard";
import avatar from "../../../assets/images/Dashboard/demoAvatar.jpeg";

// const dummyTeamData = {
//     img: avatar,
//     name: "Short Name",
//     position: "Co-Founder",
//     linkedin: "https://www.linkedin.com"
// }


export default function Team({ teamArray }) {
    const validTeamArray = Array.isArray(teamArray) ? teamArray : [];

    return (
        <>
            <div className={styles.teamContainer}>
                {validTeamArray.map((member) => (
                    <TeamCard
                        key={member.id}
                        img={member.img || avatar}
                        name={member.name}
                        position={member.position}
                        linkedin={member.linkedin}
                    />
                ))}
            </div>
        </>
    );
}
