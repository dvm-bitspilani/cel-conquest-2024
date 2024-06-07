import React from "react";
import * as styles from "./StartupCard.module.scss";

export default function StartupCard({ img, name, tags }) {
  const tagsArray = tags.split(",");
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
        <div className={styles.textContainerSecondary}>
          <h6>{name}</h6>
        </div>
        <div className={styles.tagContainer}>
          {tagsArray.length < (window.innerWidth > 820 ? 6 : 4) ? (
            tagsArray.map((tag, index) => (
              <div key={index} className={styles.cardTag}>
                <p>{tag}</p>
              </div>
            ))
          ) : (
            <>
              {tagsArray.slice(0, 5).map((tag, index) => (
                <div key={index} className={styles.cardTag}>
                  <p>{tag}</p>
                </div>
              ))}
              <div className={styles.moreTag}>
                <p>View More</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
