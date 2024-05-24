import * as styles from "./TimelineCard.module.scss";

const TimelineCard = ({ srno, date, title, para, srcolor }) => {
  return (
    <div className={styles.Timelinecard}>
      <div
        className={styles.srno}
        style={{ color: srcolor == "orange" ? "#FFE0D3" : "#F4F4F4" }}
      >
        {srno}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.leftPart}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.para}>{para}</div>
      </div>
    </div>
  );
};
export default TimelineCard;
