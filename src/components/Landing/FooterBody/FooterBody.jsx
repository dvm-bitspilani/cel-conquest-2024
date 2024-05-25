import * as styles from "./FooterBody.module.scss";

const FooterBody = () => {
  return (
    <div className={styles.footerBody}>
      <div className={styles.footerPrimary}>
        <div className={styles.newsLetter}>
          <h2>Subscribe</h2>
          <h4>Join our newsletter!</h4>
          <div className={styles.subscribe}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="#A0A0A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 6L12 13L2 6"
                stroke="#A0A0A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Enter your email" />
            <div className={styles.subscribeButton}>Subscribe</div>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <ul>
            <li>
              <span>Quick Links</span>
            </li>
            <li>
              <a href="">Alumni</a>
            </li>
            <li>
              <a href="">Sponsors</a>
            </li>
            <li>
              <a href="">Resource partners</a>
            </li>
            <li>
              <a href="">Mentors</a>
            </li>
          </ul>
        </div>
        <div className={styles.learnMore}>
          <ul>
            <li>
              <span>Learn more</span>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Our progress</a>
            </li>
            <li>
              <a href="">register</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerSecondary}></div>
    </div>
  );
};

export default FooterBody;
