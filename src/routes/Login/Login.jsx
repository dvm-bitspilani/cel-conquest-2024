import { useContext } from 'react';
import { WebContext } from '../../store/website-context';

import Countdown from '../../components/Countdown/Countdown';
import GoogleSignIn from '../../components/GoogleSignIn/GoogleSignIn';
import Stepper from '../../components/Stepper/Stepper';

import logoImage from '../../assets/signUpLogo.png'

import * as styles from './login.module.scss'

export default function Login() {
    const { user, logout } = useContext(WebContext)
    if (user) {
        return (
            <main className={styles.container} style={{ justifyContent: 'center' }}>
                <button onClick={logout}>Logout</button>
            </main>
        )
    }
    return (
        <main className={styles.container}>
            <img src={logoImage} alt="" className={styles.logo} />
            <div className={styles.loginContainer}>
                <section className={styles.orangeSection}>
                    <h1>Registration</h1>
                    <Stepper activeCircle={0} />
                </section>
                <section className={styles.whiteSection}>
                    <h1>Conquest Registration Portal</h1>
                    <p>Elevate your startup's growth with our tailored program. Gain access to valuable resource pools, mentorship from CXOs, and fundraising opportunities.
                        <br />
                        <br />
                        Tell us about your startup and yourself through our application form.
                        We're excited to learn more about your venture and you.</p>
                    <GoogleSignIn />
                </section>
            </div>
            <div className={styles.countdownContainer}>
                Registration Ends In: <Countdown dateString='June 7, 2024, 00:00:00' className={styles.countdown} />
            </div>
        </main>
    )
}