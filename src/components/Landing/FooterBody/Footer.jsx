import * as styles from "./Footer.module.scss";
import FooterBody from "./FooterBody";
import footerImg from "../../../assets/images/Landing Page/footer-conquest-logo.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={footerImg} alt="footer image" className={styles.footerImg} />
      <FooterBody />
    </div>
  );
}

export default Footer;
