import { Link } from "react-router-dom";
import logo from "../../assets/images/Navbar/conquest-logo.png";

import * as styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <div>
                <Link to="/network">Network</Link>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#111213"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.rectangle}></div>
              <div className={styles.dropDownGap}></div>
              <ul className={styles.networks}>
                <li>Sponsors</li>
                <li>Partners</li>
                <li>Jury</li>
                <li>Mentors</li>
              </ul>
            </li>
            <li>
              <div>
                <Link to="/alumni">Alumni</Link>
              </div>
              <div className={styles.rectangle}></div>
            </li>
            <li>
              <div>
                <Link to="/">Media Presence</Link>
              </div>
              <div className={styles.rectangle}></div>
            </li>
            <li>
              <div>
                <Link to="/about">About us</Link>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#111213"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.rectangle}></div>
              <div className={styles.dropDownGap}></div>
              <ul className={styles.aboutUs}>
                <li>Team</li>
                <li>FAQs</li>
              </ul>
            </li>
          </ul>
        </div>
        <img src={logo} className={styles.logo} />
        <Link className={styles.register} to="/login">
          <div>Register</div>
        </Link>
      </nav>
    </>
  );
}
