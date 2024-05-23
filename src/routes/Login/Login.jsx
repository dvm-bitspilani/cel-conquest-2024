import { useContext } from 'react';
import { WebContext } from '../../store/website-context';

import current from '../../assets/stepperCurrent.svg'
import logoImage from '../../assets/signUpLogo.png'

import * as styles from './login.module.scss'

export default function Login() {
    const { user, login, logout } = useContext(WebContext)
    return (
        <main className={styles.container}>
            <img src={logoImage} alt="" className={styles.logo} />
            <div className={styles.loginContainer}>
                <section className={styles.orangeSection}>
                    <h1>Registration</h1>
                </section>
                <section className={styles.whiteSection}>
                    <h1>Conquest Registration Portal</h1>
                </section>
            </div>
            <p className={styles.endTimer}>Registration ends in</p>
        </main>
    )
}