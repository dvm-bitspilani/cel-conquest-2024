import { useContext } from 'react';
import { WebContext } from '../../store/website-context';

import Countdown from '../../components/Countdown/Countdown';
import GoogleSignOut from '../../components/Login/GoogleSignOut/GoogleSignOut';
import Stepper from '../../components/Stepper/Stepper';
import Stepper2 from '../../components/Login/Stepper2/Stepper2';
import GoogleSignUpPage from '../../components/Login/GoogleSignUpPage/GoogleSignUpPage';
import RegistrationForm from '../../components/Login/RegistrationForm/RegistrationForm';

import logoImage from '../../assets/signUpLogo.png'

import * as styles from './login.module.scss'

export default function Login() {
    const { user } = useContext(WebContext);
    let content = <GoogleSignUpPage />
    if (user) {
        content = <RegistrationForm />
    }
    return (
        <main className={styles.container}>
            <GoogleSignOut />
            <img src={logoImage} alt="" className={styles.logo} />
            <div className={styles.loginContainer}>
                <section className={styles.orangeSection}>
                    <h1>Registration</h1>
                    {/* <Stepper activeCircle={0} /> */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Stepper2 />
                    </div>
                </section>
                <section className={styles.whiteSection}>
                    {content}
                </section>
            </div>
            <div className={styles.countdownContainer}>
                Registration Ends In: <Countdown dateString='June 7, 2024, 00:00:00' className={styles.countdown} />
            </div>
        </main>
    )
}