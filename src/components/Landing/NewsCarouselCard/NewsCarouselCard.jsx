import * as styles from "./NewsCarouselCard.module.scss";
import background from "../../../assets/images/Landing Page/landing-carousel-background.png";

const NewsCarouselCard = ({data}) => {
  return (
    <div className={styles.newsCardCarousel}>
      <p className={styles.newsCardTitle}>BITS Pilani Launches student-run start-up accelerator</p>
      <button className={styles.newCardButton}>Read the article {data}</button>
    </div>
  );
};
export default NewsCarouselCard;
