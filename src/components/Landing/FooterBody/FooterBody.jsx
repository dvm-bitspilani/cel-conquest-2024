import * as styles from "./FooterBody.module.scss";

const FooterBody = () => {
  return (
    <div className={styles.footerBody}>
      <div className={styles.footerPrimary}>
        <div className={styles.newsLetter}>
          <div className={styles.subscribeTextWrapper}>
            <h2>Subscribe</h2>
            <h4>Join our newsletter!</h4>
          </div>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6L12 13L2 6"
                stroke="#A0A0A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" placeholder="Enter your email" />
            <div className={styles.subscribeButton}>Subscribe</div>
          </div>
          <div className={styles.contactUs}>
            <h3>Contact Us</h3>
            <p>
              +91 98110 83948 <br /> contact@conquest.org.in
            </p>
          </div>
        </div>
        <div className={styles.links}>
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
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerSecondary}>
        <div className={styles.copyright}>
          ©2024 Conquest. All rights reserved.
        </div>
        <div className={styles.socials}>
          <a href="">
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4659 0H24.4337L15.7671 10.1867L26 24H17.9598L11.6948 15.6267L4.48996 24H0.522088L9.81526 13.12L0 0H8.249L13.9398 7.68L20.4659 0ZM19.0562 21.5467H21.249L7.04819 2.29333H4.64659L19.0562 21.5467Z"
                fill="#FB723D"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4491 20.4496H16.8931V14.8805C16.8931 13.5525 16.8694 11.8429 15.0436 11.8429C13.1915 11.8429 12.9081 13.2899 12.9081 14.7838V20.4492H9.35203V8.99689H12.7658V10.562H12.8136C13.1553 9.97782 13.649 9.49726 14.2421 9.17149C14.8352 8.84572 15.5056 8.68693 16.1819 8.71203C19.7861 8.71203 20.4506 11.0828 20.4506 14.167L20.4491 20.4496ZM5.33963 7.43144C4.93148 7.43151 4.53247 7.31055 4.19307 7.08385C3.85367 6.85715 3.58913 6.53489 3.43287 6.15783C3.27661 5.78077 3.23566 5.36584 3.31521 4.96551C3.39477 4.56517 3.59125 4.19743 3.8798 3.90876C4.16835 3.6201 4.53602 3.42348 4.93631 3.34378C5.3366 3.26408 5.75152 3.30488 6.12863 3.46101C6.50573 3.61713 6.82807 3.88158 7.05489 4.22091C7.2817 4.56025 7.40281 4.95922 7.40288 5.36738C7.40293 5.63839 7.34959 5.90675 7.24593 6.15715C7.14227 6.40754 6.99032 6.63507 6.79873 6.82674C6.60714 7.0184 6.37966 7.17045 6.12931 7.27421C5.87895 7.37796 5.61062 7.43139 5.33963 7.43144ZM7.11765 20.4496H3.5579V8.99689H7.11765V20.4496ZM22.222 0.00163516H1.77099C1.30681 -0.00360329 0.859518 0.175663 0.52744 0.500042C0.195362 0.824421 0.00566506 1.26737 0 1.73156V22.2681C0.00547117 22.7325 0.195057 23.1758 0.527123 23.5005C0.85919 23.8252 1.30658 24.0048 1.77099 23.9999H22.222C22.6873 24.0057 23.136 23.8266 23.4693 23.5019C23.8027 23.1772 23.9936 22.7334 24 22.2681V1.73008C23.9934 1.26497 23.8024 0.821515 23.469 0.497144C23.1356 0.172773 22.6871 -0.00598143 22.222 0.000152822"
                fill="#FB723D"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12.0733C24 5.40541 18.6274 -1.90735e-06 12 -1.90735e-06C5.37258 -1.90735e-06 0 5.40541 0 12.0733C0 18.0995 4.38823 23.0943 10.125 24V15.5633H7.07813V12.0733H10.125V9.41343C10.125 6.38755 11.9165 4.71615 14.6576 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3399 7.92313 13.875 8.85379 13.875 9.80857V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0995 24 12.0733Z"
                fill="#FB723D"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0301 0.0839251C5.7533 0.144165 4.88138 0.347925 4.11914 0.647445C3.33026 0.954885 2.66162 1.36745 1.99634 2.03513C1.33106 2.70281 0.921379 3.37193 0.616099 4.16201C0.320659 4.92593 0.120499 5.79857 0.0640995 7.07609C0.00769946 8.35361 -0.00478054 8.76425 0.00145946 12.023C0.00769946 15.2817 0.0220995 15.6902 0.0840195 16.9703C0.144979 18.2469 0.348019 19.1186 0.647539 19.881C0.955459 20.6699 1.36754 21.3383 2.03546 22.0038C2.70338 22.6694 3.37202 23.0781 4.16402 23.3838C4.92722 23.6788 5.8001 23.8799 7.07738 23.9358C8.35466 23.9918 8.76578 24.0047 12.0235 23.9985C15.2813 23.9922 15.6915 23.9778 16.9714 23.9171C18.2513 23.8564 19.1184 23.6519 19.8811 23.3538C20.67 23.0452 21.3389 22.6338 22.0039 21.9657C22.669 21.2975 23.0784 20.6279 23.3835 19.8374C23.6791 19.0742 23.88 18.2013 23.9355 16.925C23.9914 15.6441 24.0046 15.2351 23.9983 11.9769C23.9921 8.71865 23.9775 8.31017 23.9167 7.03049C23.856 5.75081 23.6527 4.88177 23.3535 4.11881C23.0451 3.32993 22.6335 2.66201 21.9658 1.99601C21.2981 1.33001 20.628 0.920805 19.8377 0.616485C19.074 0.321045 18.2016 0.119685 16.9243 0.0644851C15.6471 0.00928514 15.2359 -0.00487487 11.977 0.00136513C8.71802 0.00760513 8.31002 0.0215251 7.0301 0.0839251ZM7.17026 21.777C6.00026 21.7262 5.36498 21.5318 4.94162 21.369C4.38098 21.153 3.98162 20.8919 3.5597 20.4741C3.13778 20.0562 2.87858 19.6554 2.6597 19.096C2.4953 18.6726 2.2973 18.0381 2.24258 16.8681C2.18306 15.6035 2.17058 15.2238 2.16362 12.0201C2.15666 8.81633 2.1689 8.43713 2.22434 7.17209C2.27426 6.00305 2.46986 5.36705 2.63234 4.94393C2.84834 4.38257 3.1085 3.98393 3.5273 3.56225C3.9461 3.14057 4.3457 2.88089 4.90562 2.66201C5.3285 2.49689 5.96306 2.30057 7.13258 2.24489C8.3981 2.18489 8.7773 2.17289 11.9806 2.16593C15.1839 2.15897 15.564 2.17097 16.83 2.22664C17.9991 2.27753 18.6353 2.4712 19.0579 2.63464C19.6188 2.85065 20.0179 3.11009 20.4396 3.52961C20.8613 3.94913 21.1212 4.34729 21.3401 4.90841C21.5055 5.33009 21.7018 5.96441 21.757 7.13465C21.8172 8.40017 21.8309 8.7796 21.8367 11.9826C21.8424 15.1857 21.8311 15.5661 21.7757 16.8306C21.7246 18.0006 21.5307 18.6362 21.3677 19.06C21.1517 19.6204 20.8913 20.02 20.4723 20.4414C20.0532 20.8629 19.6541 21.1226 19.0939 21.3414C18.6715 21.5063 18.0363 21.7031 16.8677 21.7588C15.6022 21.8183 15.223 21.8308 12.0185 21.8378C8.81402 21.8447 8.43602 21.8318 7.1705 21.777M16.9529 5.58641C16.9534 5.87123 17.0383 6.14952 17.1969 6.38607C17.3556 6.62262 17.5808 6.80681 17.8442 6.91535C18.1075 7.02389 18.3971 7.05189 18.6764 6.99583C18.9556 6.93976 19.212 6.80214 19.413 6.60037C19.614 6.3986 19.7507 6.14174 19.8058 5.86228C19.8608 5.58283 19.8317 5.29333 19.7222 5.03039C19.6127 4.76746 19.4277 4.5429 19.1906 4.38512C18.9534 4.22735 18.6748 4.14344 18.39 4.14401C18.0082 4.14477 17.6423 4.29715 17.3728 4.56764C17.1033 4.83813 16.9523 5.20458 16.9529 5.58641ZM5.8385 12.0119C5.84522 15.4151 8.60906 18.1677 12.0115 18.1612C15.414 18.1547 18.1685 15.3911 18.162 11.9879C18.1555 8.58473 15.391 5.83145 11.988 5.83817C8.58506 5.84489 5.83202 8.60921 5.8385 12.0119ZM7.99994 12.0076C7.99837 11.2165 8.23144 10.4426 8.66968 9.78395C9.10791 9.12527 9.73162 8.61134 10.4619 8.30714C11.1923 8.00294 11.9964 7.92213 12.7726 8.07494C13.5489 8.22774 14.2624 8.6073 14.8229 9.16561C15.3834 9.72393 15.7658 10.4359 15.9217 11.2115C16.0776 11.9872 15.9999 12.7916 15.6986 13.5231C15.3973 14.2547 14.8859 14.8804 14.2289 15.3212C13.572 15.7621 12.7991 15.9982 12.0079 15.9998C11.4826 16.0009 10.9622 15.8985 10.4765 15.6984C9.99076 15.4984 9.54918 15.2046 9.17699 14.8339C8.8048 14.4632 8.50929 14.0228 8.30733 13.5378C8.10537 13.0529 8.00091 12.5329 7.99994 12.0076Z"
                fill="#FB723D"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="31"
              height="24"
              viewBox="0 0 31 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3293 17.0649V6.93507L20.4316 12.0002L12.3293 17.0649ZM30.3519 3.74768C29.9954 2.27245 28.9449 1.11077 27.6112 0.716516C25.1938 0 15.4998 0 15.4998 0C15.4998 0 5.80579 0 3.38825 0.716516C2.05449 1.11077 1.00401 2.27245 0.647538 3.74768C-0.000244141 6.42141 -0.000244141 12 -0.000244141 12C-0.000244141 12 -0.000244141 17.5785 0.647538 20.2523C1.00401 21.7275 2.05449 22.8892 3.38825 23.2836C5.80579 24 15.4998 24 15.4998 24C15.4998 24 25.1938 24 27.6112 23.2836C28.9449 22.8892 29.9954 21.7275 30.3519 20.2523C30.9998 17.5785 30.9998 12 30.9998 12C30.9998 12 30.9998 6.42141 30.3519 3.74768Z"
                fill="#FB723D"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
