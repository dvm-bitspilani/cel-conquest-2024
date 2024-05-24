import * as styles from "./HeroSectionCard.module.scss";

const HeroSectionCard = ({ value, property }) => {
  return (
    <div className={styles.card}>
      <p className={styles.value}>{value}</p>
      <p className={styles.property}>{property}</p>
    </div>
  );
};
export default HeroSectionCard;
