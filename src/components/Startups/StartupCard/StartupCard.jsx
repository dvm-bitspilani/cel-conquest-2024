import React, { useState, useEffect } from "react";
import * as styles from "./StartupCard.module.scss";
import { Link, Route } from "react-router-dom";
import profilePic from "../../../assets//images/Dashboard/profilePic.jpg"

export default function StartupCard({ img, name, tags, id, description }) {

  const [convertedImg, setConvertedImg] = useState('');

  useEffect(() => {
    if (img && img.startsWith('https://drive.google.com')) {
      const url = new URL(img);
      const pathParts = url.pathname.split('/');
      const id = pathParts[3];
      if (id) {
        setConvertedImg(`https://drive.google.com/thumbnail?sz=w1000&id=${id}`);
      } else {
        console.error('Invalid Google Drive URL format.');
      }
    }
  }, [img]);

  const checkProfilePic = convertedImg || img;

  const tagsArray = tags ? tags.split(",") : [];
  return (
    <Link
      to={`/dashboard/startup-profile/${id}`}
      style={{ textDecoration: "none", color: "unset" }}
    >
      <div className={styles.cardContainer}>
        <div className={styles.cardPrimary}>
          <div
            className={styles.imgContainer}
            style={{ backgroundImage: `url(${checkProfilePic || profilePic})` }}
          />
          <div className={styles.textContainer}>
            <h6>{name}</h6>
            <p>{description}</p>
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
    </Link>
  );
}
