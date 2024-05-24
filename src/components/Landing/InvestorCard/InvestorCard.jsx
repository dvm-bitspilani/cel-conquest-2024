import * as styles from "./InvestorCard.module.scss";

const InvestorCard = ({ investorImg }) => {
  return (
    <div className={styles.card}>
      <img src={investorImg} />
    </div>
  );
};
export default InvestorCard;
