import * as styles from "./Details.module.scss";

export default function Details({ founder, cofounder, location, stage, teamArray }) {
    const validTeamArray = Array.isArray(teamArray) ? teamArray : [];

    console.log(validTeamArray);

    const founderMember = validTeamArray.find(member => member.position === "founder");
    const cofounderMember = validTeamArray.find(member => member.position === "co founder");

    const founderName = founderMember ? founderMember.name : "N/A";
    const cofounderName = cofounderMember ? cofounderMember.name : "N/A";

    console.log(founderName);

    return (
        <>
            <div className={styles.title}>Startup <span>Details</span></div>
            <div className={styles.contentContainer}>
                <div><span className={styles.heading}>Founder : </span>{founderName}</div>
                <div><span className={styles.heading}>Co-Founder : </span>{cofounderName}</div>
                <div><span className={styles.heading}>Location HQ : </span>{location}</div>
                <div><span className={styles.heading}>Stage : </span>{stage}</div>
            </div>
        </>
    );
}

