import React from "react";
import * as styles from "./CoachCard.module.scss";
import { Link, Route } from "react-router-dom";

export default function CoachCard({ img, name, tags, designation, id }) {
  const tagsArray = tags ? tags.split(",") : [];
  return (
    <Link
      to={`/dashboard/startup-profile/${id}`}
      style={{ textDecoration: "none", color: "unset" }}
    >
      <div className={styles.cardContainer}>
        <div className={styles.cardPrimary}>
          <div className={styles.cardImg}>
            <div
              className={styles.imgContainer}
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
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
          <div className={styles.textContainerTertiary}>
            <h6>{designation}</h6>
          </div>
          <div className={styles.tagContainer}>
            {tagsArray.length < (window.innerWidth > 820 ? 4 : 4) ? (
              tagsArray.map((tag, index) => (
                <div key={index} className={styles.cardTag}>
                  <p>{tag}</p>
                </div>
              ))
            ) : (
              <>
                {tagsArray.slice(0, 3).map((tag, index) => (
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
    </Link>
  );
}
