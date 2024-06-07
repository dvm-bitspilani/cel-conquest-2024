import React from 'react';
import styles from './unauthorised.module.scss';

const Unauthorised = () => {
    return (
        <div className={styles.container}>
            <h1>401</h1>
            <h2>Unauthorised Access</h2>
            <p>Please contact the administrator for access.</p>
        </div>
    );
};

export default Unauthorised;