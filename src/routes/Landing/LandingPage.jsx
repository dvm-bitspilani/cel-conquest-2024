import BackgroundGridFadeImage from "../../assets/images/Landing Page/Background Grid Fade.png";
import HeroSectionCard from "../../components/Landing/HeroSectionCard/HeroSectionCard";
import InvestorCard from "../../components/Landing/InvestorCard/InvestorCard";
import TimelineCard from "../../components/Landing/TimelineCard/TimelineCard";
import NewsCarouselCard from "../../components/Landing/NewsCarouselCard/NewsCarouselCard";
import * as styles from "./LandingPage.module.scss";
import Footer from "../../components/Landing/FooterBody/Footer";

import nasscom from "../../assets/images/Landing Page/nasscom_logo.svg.png";
import Navbar2 from "../../components/Navbar2/Navbar2";

import { heroSectionCardsData, timelineData } from "./data/landingPageData";

import Marquee from "react-fast-marquee";

import ReactGA from "react-ga4";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1500, min: 1050 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1050, min: 0 },
    items: 1,
  },
};

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
          <div className={styles.carouselCenter}>
            <div className={styles.carouselContainer}>
              {/* <div className={styles.leftButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_145_1784)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.29279 12.7073C8.10532 12.5198 8 12.2655 8 12.0003C8 11.7352 8.10532 11.4809 8.29279 11.2933L13.9498 5.63634C14.042 5.54083 14.1524 5.46465 14.2744 5.41224C14.3964 5.35983 14.5276 5.33225 14.6604 5.33109C14.7932 5.32994 14.9248 5.35524 15.0477 5.40552C15.1706 5.4558 15.2823 5.53006 15.3762 5.62395C15.4701 5.71784 15.5443 5.82949 15.5946 5.95239C15.6449 6.07529 15.6702 6.20696 15.669 6.33974C15.6679 6.47252 15.6403 6.60374 15.5879 6.72575C15.5355 6.84775 15.4593 6.9581 15.3638 7.05034L10.4138 12.0003L15.3638 16.9503C15.5459 17.1389 15.6467 17.3915 15.6445 17.6537C15.6422 17.9159 15.537 18.1668 15.3516 18.3522C15.1662 18.5376 14.9154 18.6427 14.6532 18.645C14.391 18.6473 14.1384 18.5465 13.9498 18.3643L8.29279 12.7073Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_145_1784">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div> */}
              <Carousel
                focusOnSelect={true}
                infinite={true}
                draggable={true}
                swipeable={true}
                responsive={responsive}
                itemClass={styles.carouselItem}
              >
                <NewsCarouselCard data={1}></NewsCarouselCard>
                <NewsCarouselCard data={2}></NewsCarouselCard>
                <NewsCarouselCard data={3}></NewsCarouselCard>
                <NewsCarouselCard data={4}></NewsCarouselCard>
                <NewsCarouselCard data={5}></NewsCarouselCard>
                <NewsCarouselCard data={6}></NewsCarouselCard>
              </Carousel>
              {/* <div
                className={styles.carouselCardsContainer}
              >
                <NewsCarouselCard data={1}></NewsCarouselCard>
                <NewsCarouselCard data={2}></NewsCarouselCard>
                <NewsCarouselCard data={3}></NewsCarouselCard>
                <NewsCarouselCard data={4}></NewsCarouselCard>
                <NewsCarouselCard data={5}></NewsCarouselCard>
                <NewsCarouselCard data={6}></NewsCarouselCard>
              </div> */}
              {/* <div className={styles.rightButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7072 11.2927C15.8947 11.4802 16 11.7345 16 11.9997C16 12.2648 15.8947 12.5191 15.7072 12.7067L10.0502 18.3637C9.95797 18.4592 9.84762 18.5353 9.72562 18.5878C9.60361 18.6402 9.47239 18.6678 9.33961 18.6689C9.20684 18.6701 9.07516 18.6448 8.95226 18.5945C8.82936 18.5442 8.71771 18.4699 8.62382 18.3761C8.52993 18.2822 8.45567 18.1705 8.40539 18.0476C8.35511 17.9247 8.32981 17.793 8.33096 17.6603C8.33212 17.5275 8.3597 17.3963 8.41211 17.2743C8.46452 17.1522 8.5407 17.0419 8.63621 16.9497L13.5862 11.9997L8.63621 7.04966C8.45405 6.86105 8.35326 6.60845 8.35554 6.34626C8.35782 6.08406 8.46299 5.83325 8.64839 5.64784C8.8338 5.46243 9.08461 5.35726 9.34681 5.35498C9.60901 5.3527 9.86161 5.4535 10.0502 5.63566L15.7072 11.2927Z"
                    fill="black"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
