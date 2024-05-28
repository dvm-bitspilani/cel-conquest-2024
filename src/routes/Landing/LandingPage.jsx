import BackgroundGridFadeImage from "../../assets/images/Landing Page/Background Grid Fade.png";
import HeroSectionCard from "../../components/Landing/HeroSectionCard/HeroSectionCard";
import InvestorCard from "../../components/Landing/InvestorCard/InvestorCard";
import TimelineCard from "../../components/Landing/TimelineCard/TimelineCard";
import NewsCarouselCard from "../../components/Landing/NewsCarouselCard/NewsCarouselCard";
import * as styles from "./LandingPage.module.scss";
import Footer from "../../components/Landing/FooterBody/Footer";

import nasscom from "../../assets/images/Landing Page/nasscom_logo.svg.png";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";

import { heroSectionCardsData, timelineData } from "./data/landingPageData";

import Marquee from "react-fast-marquee";

import ReactGA from "react-ga4";

// temporary function for now
function handleClick() {
  // Track registration click event
  ReactGA.event({
    category: "Button Click",
    action: "Registration Button",
    label: "Landing Page",
  });

  console.log("hello world"); // for debugging

  // rest of the registration click code
}

const LandingPage = () => {
  return (
    <>
      <Navbar2 />
      <img className={styles.backgroundGrid} src={BackgroundGridFadeImage} />
      <div className={styles.pageContainer}>
        <div className={styles.heroSection}>
          <div className={styles.heroSectionUpperPart}>
            <div className={styles.heroSectionLeft}></div>
            <div className={styles.heroSectionRight}>
              <div>
                <p className={styles.titleBitsPilani}>Pilani’s</p>
                <p>Startup</p>
                <p>Accelerator Is</p>
                <p>Back</p>
              </div>
              <div className={styles.conquestDesc}>
                We are India’s largest student-led startup accelerator entirely
                run by Center for Entrepreneurial Leadership, BITS Pilani.
              </div>
              <div className={styles.registerAndSignUp}>
                <button className={styles.register} onClick={handleClick}>
                  Register
                </button>
                <button className={styles.signUp}>Sign Up</button>
              </div>
            </div>
          </div>
          <div className={styles.heroSectionCardContainer}>
            {heroSectionCardsData.map((data) => {
              return (
                <HeroSectionCard
                  key={data.property}
                  {...data}
                ></HeroSectionCard>
              );
            })}
          </div>
        </div>
        <div className={styles.timeline}>
          {timelineData.map((data) => {
            return <TimelineCard key={data.srno} {...data}></TimelineCard>;
          })}
        </div>
        <div className={styles.investors}>
          <h2>
            meet our <span>investors</span>
          </h2>
          <div className={styles.investorCardContainer}>
            <div className={styles.investorCardUpperRow}>
              <Marquee>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
              </Marquee>
            </div>
            <div className={styles.investorCardLowerRow}>
              <Marquee direction="right">
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
                <InvestorCard investorImg={nasscom}></InvestorCard>
              </Marquee>
            </div>
          </div>
        </div>
        <div className={styles.news}>
          <h2>
            in the <span>news</span>
          </h2>
          <div>
            <div>
              <NewsCarouselCard></NewsCarouselCard>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
