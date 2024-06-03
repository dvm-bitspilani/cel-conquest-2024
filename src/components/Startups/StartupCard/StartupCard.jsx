import React from "react";
import * as styles from "./StartupCard.module.scss";

export default function StartupCard({ img, name, tags }) {
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
      <div className={styles.cardSecondary}>
        <div className={styles.tagContainer}>
          {tags.length < 7 ? (
            tags.map((tag, index) => (
              <div key={index} className={styles.cardTag}>
                <p>{tag}</p>
              </div>
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
