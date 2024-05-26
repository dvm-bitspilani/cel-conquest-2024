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
    const { user, logout } = useContext(WebContext);
    let content = <GoogleSignUpPage />
    if (user) {
        // return (
        //     <main className={styles.container} style={{ justifyContent: 'center' }}>
        //         <button onClick={logout}>Logout</button>
        //     </main>
        // )
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
                    <Stepper2 />
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