import * as styles from "./TimelineCard.module.scss";

const TimelineCard = ({ srno, date, title, para, srcolor, index = 0 }) => {
  const srStyles = {
    color: srcolor === "orange" ? "#FFE0D3" : "#F4F4F4",
  };

  const leftPartStyles = {
    display: "flex",
    flexDirection: "column",
    // alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
    alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
    width: "min-content",
  }

  if (index % 2 === 0) {
    srStyles.left = "0";
  }
  else {
    srStyles.right = "0";
  }

  return (
    <div className={styles.Timelinecard}>
      <div
        className={styles.srno}
        style={srStyles}
      >
        {srno}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.leftPart} style={leftPartStyles}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.para}>{para}</div>
      </div>
    </div>
  );
};
export default TimelineCard;
