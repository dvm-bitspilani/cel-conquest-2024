import * as styles from "./Details.module.scss";

export default function Details({ location, stage, teamArray }) {
    const validTeamArray = Array.isArray(teamArray) ? teamArray : [];

    const founders = validTeamArray.filter(member => member.position.toLowerCase() === "founder");
    const cofounders = validTeamArray.filter(member => member.position.toLowerCase() === "co founder");

    const founderNames = founders.map(member => member.name).join(", ");
    const cofounderNames = cofounders.map(member => member.name).join(", ");

    // console.log(founderNames, cofounderNames);

    return (
        <>
            <div className={styles.title}>Startup <span>Details</span></div>
            <div className={styles.contentContainer}>
                {founderNames && (
                    <div>
                        <span className={styles.heading}>Founder : </span>{founderNames}
                    </div>
                )}
                {cofounderNames && (
                    <div>
                        <span className={styles.heading}>Co-Founder : </span>{cofounderNames}
                    </div>
                )}
                <div><span className={styles.heading}>Location HQ : </span>{location}</div>
                <div><span className={styles.heading}>Stage : </span>{stage}</div>
            </div>
        </>
    );
}
