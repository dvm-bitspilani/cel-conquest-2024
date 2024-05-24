import BackgroundGridFadeImage from "../../assets/images/Landing Page/Background Grid Fade.png";
import HeroSectionCard from "../../components/Landing/HeroSectionCard/HeroSectionCard";
import InvestorCard from "../../components/Landing/InvestorCard/InvestorCard";
import TimelineCard from "../../components/Landing/TimelineCard/TimelineCard";
import * as styles from "./LandingPage.module.scss";

import nasscom from "../../assets/images/Landing Page/nasscom_logo.svg.png";
import NewsCarouselCard from "../../components/Landing/NewsCarouselCard/NewsCarouselCard";

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
          <div className={styles.heroSectionCardContainer}>
            <HeroSectionCard value="75+" property="Investors" />
            <HeroSectionCard value="₹30L" property="Prize Money" />
            <HeroSectionCard value="250" property="Mentors" />
            <HeroSectionCard value="$100k" property="Resources" />
          </div>
        </div>
        <div className={styles.timeline}>
          <TimelineCard
            srno="01"
            date="15th April - 25th May"
            title="Registration Begins"
            para="Conquest would be accepting registrations from 3rd April and would go on till 31st May. The registration is free of charge, just fill out a simple hassle-free application form, and voila! you're good to go."
          ></TimelineCard>
          <TimelineCard
            srno="02"
            date="10th June - 25th July"
            title="Online Mentoring Program"
            para="Transcending the boundaries of geography and time, our Top 15 startups get an opportunity to receive online mentoring over a 6 week period. Each session revolves around a critical aspect of startup growth, ranging across pitching, fundraising, building MVP, GTM Strategy and finding a product-market fit."
            srcolor="orange"
          ></TimelineCard>
          <TimelineCard
            srno="03"
            date="29th July - 3rd August"
            title="Accelerator Program"
            para="The Top 10 startups move to Bangalore for a 7-day accelerator program where they are provided free accommodation and co-working space. We create an environment of co-learning that helps startups grow together at an exponential pace. The program comprises sessions with successful founders, investment workshops by VCs and Angels and networking events."
          ></TimelineCard>
          <TimelineCard
            srno="04"
            date="4th August"
            title="Demo Day"
            para="Demo Day provides startups with the perfect stage to pitch in front of investors, industry leaders, policymakers and media houses to #MakeAMark. The finale is a day where all the stakeholders of the startup ecosystem come together, engage in thought-provoking conversations, share ideas and create solutions."
          ></TimelineCard>
        </div>
        <div className={styles.investors}>
          <h2>
            meet our <span>investors</span>
          </h2>
          <div className={styles.investorCardContainer}>
            <div>
              <InvestorCard investorImg={nasscom}></InvestorCard>
            </div>
          </div>
        </div>
        <div className={styles.news}>
          <h2>
            in the <span>news</span>
          </h2>
          <div>
            <NewsCarouselCard></NewsCarouselCard>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </>
  );
};
export default LandingPage;
