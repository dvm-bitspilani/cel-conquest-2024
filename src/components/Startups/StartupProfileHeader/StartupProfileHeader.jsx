import React from "react";
import * as styles from "./StartupProfileHeader.module.scss";

export default function StartupProfileHeader({ img, name, desc, location }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.logoContainer}>
                        <img src={img} alt="" />
                    </div>

                    <div className={styles.headerContainer}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.desc}>{desc}</div>
                        <div><span className={styles.location}>Location HQ : </span>{location}</div>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.contactContainer}></div>
            </div>
        </>
    );
}