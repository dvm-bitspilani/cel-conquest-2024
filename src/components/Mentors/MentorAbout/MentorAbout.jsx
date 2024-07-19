import React from 'react';
import styles from "./MentorAbout.module.scss";

export default function MentorAbout({ desc, sector, domain, verticals, horizontals, functionsOfExpertise, businessModels, role }) {
  const sectorArray = typeof sector === 'string' ? sector.split(',').map(item => item.trim()) : [];
  const domainArray = typeof domain === 'string' ? domain.split(',').map(item => item.trim()) : [];
  const verticalsArray = typeof verticals === 'string' ? sector.split(',').map(item => item.trim()) : [];
  const horizontalsArray = typeof horizontals === 'string' ? domain.split(',').map(item => item.trim()) : [];
  const functionsOEArray = typeof functionsOfExpertise === 'string' ? sector.split(',').map(item => item.trim()) : [];
  const businessModelsArray = typeof businessModels === 'string' ? domain.split(',').map(item => item.trim()) : [];

  return (
    <div className={styles.about}>
      <div className={styles.desc}>
        <h5>Description</h5>
        <p>{desc}</p>
      </div>
      {role !== 'Angel' && (
        <>
          <div className={styles.indust}>
            <h5>Verticals</h5>
            <div className={styles.incontainer}>
              {verticalsArray.map((vertical, index) => (
                <span key={index} className={styles.industries}>{vertical}</span>
              ))}
            </div>
          </div>
          <div className={styles.areas}>
            <h5>Horizontals</h5>
            <div className={styles.areacontainer}>
              {horizontalsArray.map((horizontal, index) => (
                <span key={index} className={styles.area}>{horizontal}</span>
              ))}
            </div>
          </div>
          <div className={styles.indust}>
            <h5>Business Models</h5>
            <div className={styles.incontainer}>
              {businessModelsArray.map((model, index) => (
                <span key={index} className={styles.industries}>{model}</span>
              ))}
            </div>
          </div>
          <div className={styles.areas}>
            <h5>Functions Of Expertise</h5>
            <div className={styles.areacontainer}>
              {functionsOEArray.map((functionOE, index) => (
                <span key={index} className={styles.area}>{functionOE}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
