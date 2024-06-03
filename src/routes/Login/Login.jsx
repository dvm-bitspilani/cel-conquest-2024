import { useContext } from 'react';
import { WebContext } from '../../store/website-context';

import { Divider } from 'antd';

import GoogleSignOut from '../../components/Login/GoogleSignOut/GoogleSignOut';
import RegistrationForm from '../../components/Login/RegistrationForm/RegistrationForm';
import GoogleSignIn from '../../components/GoogleSignIn/GoogleSignIn';

import logoImage from '../../assets/loginPageLogo.png'

import * as styles from './login.module.scss'

export default function Login() {
    const { user } = useContext(WebContext);
    return (
        <main className={styles.container}>
            <GoogleSignOut />
            <img src={logoImage} alt="" className={styles.logo} />
            <div className={styles.loginContainer}>
                <section className={styles.orangeSection}>

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
        </main>
    )
}