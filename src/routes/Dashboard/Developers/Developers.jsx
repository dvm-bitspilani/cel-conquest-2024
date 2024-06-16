import * as styles from "./Developers.module.scss";

const exampleData = [
  {
    vertical: "Vertical",
    members: [
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
    ],
  },
  {
    vertical: "Vertical",
    members: [
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
      {
        name: "Name",
        profile_logo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi%26h%3D160&f=1&ipt=87d56deabe6ecd4dab3cc0672b4ebf6321591a9c8abc2b661650b900e8658ac3&ipo=images",
      },
    ],
  },
];

export default function Developers() {
  return (
    <div className={styles.developers}>
      <div className={styles.title}>Developers</div>
      <div className={styles.container}>
        {exampleData.map((item, index) => (
          <>
            <div className={styles.vertical} key={index}>
              {item.vertical}
            </div>
            <div className={styles.members}>
              {item.members.map((member, memberIndex) => (
                <div key={memberIndex} className={styles.memberCard}>
                  <div className={styles.imgWrapper}>
                    <img
                      src={member.profile_logo}
                      alt={`${member.name} profile`}
                    />
                    <a className={styles.linkedIn} href="/">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.2655 27.2662H22.5241V19.8407C22.5241 18.07 22.4925 15.7906 20.0581 15.7906C17.5886 15.7906 17.2108 17.7198 17.2108 19.7118V27.2657H12.4694V11.9959H17.0211V14.0826H17.0848C17.5404 13.3038 18.1986 12.663 18.9895 12.2287C19.7803 11.7943 20.6742 11.5826 21.5758 11.616C26.3815 11.616 27.2675 14.7771 27.2675 18.8894L27.2655 27.2662ZM7.1195 9.90858C6.57531 9.90868 6.04329 9.7474 5.59076 9.44514C5.13822 9.14287 4.7855 8.71319 4.57716 8.21044C4.36882 7.70769 4.31421 7.15445 4.42029 6.62067C4.52636 6.0869 4.78833 5.59657 5.17307 5.21168C5.5578 4.8268 6.04803 4.56464 6.58174 4.45838C7.11546 4.35211 7.66869 4.4065 8.1715 4.61467C8.67431 4.82284 9.10409 5.17544 9.40651 5.62789C9.70893 6.08033 9.87041 6.61229 9.87051 7.1565C9.87057 7.51785 9.79945 7.87567 9.66124 8.20953C9.52302 8.54339 9.32043 8.84676 9.06497 9.10231C8.80952 9.35787 8.50621 9.5606 8.17241 9.69894C7.8386 9.83728 7.48083 9.90852 7.1195 9.90858ZM9.4902 27.2662H4.74386V11.9959H9.4902V27.2662ZM29.6293 0.00218021H2.36132C1.74241 -0.00480438 1.14602 0.234218 0.703253 0.666723C0.260483 1.09923 0.00755341 1.68983 0 2.30875V29.6908C0.00729489 30.31 0.260076 30.901 0.702831 31.334C1.14559 31.7669 1.74211 32.0064 2.36132 31.9998H29.6293C30.2497 32.0076 30.8479 31.7688 31.2924 31.3358C31.7369 30.9029 31.9914 30.3112 32 29.6908V2.30678C31.9912 1.68663 31.7365 1.09535 31.292 0.662859C30.8475 0.230364 30.2494 -0.00797524 29.6293 0.000203762"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className={styles.memberName}>{member.name}</div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
