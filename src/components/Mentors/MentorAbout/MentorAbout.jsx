import React from 'react';
import styles from "./MentorAbout.module.scss";

export default function MentorAbout({ desc, sector, domain }) {
    const sectorArray = typeof sector === 'string' ? sector.split(',').map(item => item.trim()) : [];
    const domainArray = typeof domain === 'string' ? domain.split(',').map(item => item.trim()) : [];

    return (
        <div className={styles.about}>
            <div className={styles.desc}>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
            <div className={styles.indust}>
              <h5>Sector of Expertise</h5>
              <div className={styles.incontainer}>
                {sectorArray.map((sector, index) => (
                  <span key={index} className={styles.industries}>{sector}</span>
                ))}
              </div>
            </div>
            <div className={styles.areas}>
              <h5>Domain of Expertise</h5>
              <div className={styles.areacontainer}>
                {domainArray.map((domain, index) => (
                  <span key={index} className={styles.area}>{domain}</span>
                ))}
              </div>
            </div>
        </div>
    );
}
