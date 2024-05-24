import BackgroundGridFadeImage from "../../assets/images/Landing Page/Background Grid Fade.png";
import HeroSectionCard from "../../components/Landing/HeroSectionCard/HeroSectionCard";
import * as styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <>
      <img className={styles.backgroundGrid} src={BackgroundGridFadeImage} />
      <div className={styles.pageContainer}>
        <div className={styles.heroSection}>
          <div className={styles.heroSectionUpperPart}>
            <div></div>
            <div></div>
          </div>
          <HeroSectionCard value="75+" property="Investors" />
          <HeroSectionCard value="₹30L" property="Prize Money" />
          <HeroSectionCard value="250" property="Mentors" />
          <HeroSectionCard value="$100k" property="Resources" />
        </div>
        <div className={styles.timeline}></div>
        <div className={styles.investors}></div>
        <div className={styles.news}></div>
      </div>
    </>
  );
};
export default LandingPage;
