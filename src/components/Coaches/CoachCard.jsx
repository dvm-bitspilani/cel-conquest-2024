import React from "react";
import * as styles from "./CoachCard.module.scss";

export default function CoachCard({ img, name, tags, designation }) {
  //   const tagsArray = tags.split(",");
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardPrimary}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className={styles.textContainer}>
          <h6>{name}</h6>
        </div>
      </div>
      <div className={styles.cardTertiary}>
        <h6>{designation}</h6>
      </div>
      <div className={styles.cardSecondary}>
        <div className={styles.textContainerSecondary}>
          <h6>{name}</h6>
        </div>
        <div className={styles.tagContainer}>
          <div className={styles.cardTag}>
            <p>{tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
