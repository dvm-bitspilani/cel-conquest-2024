import React from 'react';
import styles from "./About.module.scss";

const DummyAbout = {
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing quisque massa scelerisque dolor est quis sit etiam augue. Risus risus etiam phasellus suspendisse augue placerat nisi arcu.",
    industries: ["Climate Tech", "EV", "Fin-Tech", "Climate Tech", "Lorem Ipsum", "Lorem Ipsum"],
    areas: ["Climate Tech", "EV", "Fin-Tech"]
}


export default function About({ desc, industries, areas }) {
    const industriesArray = typeof industries === 'string' ? industries.split(',').map(item => item.trim()) : [];
    const areasArray = typeof areas === 'string' ? areas.split(',').map(item => item.trim()) : [];

    return (
        <div className={styles.about}>
            <div className={styles.desc}>
                <h5>Description</h5>
                <p>{desc}</p>
            </div>
            <div className={styles.indust}>
                <h5>Industries</h5>
                <div className={styles.incontainer}>
                    {industriesArray.map((industry, index) => (
                        <span key={index} className={styles.industries}>{industry}</span>
                    ))}
                </div>
            </div>
            <div className={styles.areas}>
                <h5>Functional Areas</h5>
                <div className={styles.areacontainer}>
                    {areasArray.map((area, index) => (
                        <span key={index} className={styles.area}>{area}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
