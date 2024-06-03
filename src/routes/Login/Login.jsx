import { useContext } from 'react';
import { useFormik } from 'formik';

import { WebContext } from '../../store/website-context';
import { loginSchemas } from './schemas/loginSchema';

import { Divider } from 'antd';

import GoogleSignOut from '../../components/Login/GoogleSignOut/GoogleSignOut';
import RegistrationForm from '../../components/Login/RegistrationForm/RegistrationForm';
import GoogleSignIn from '../../components/GoogleSignIn/GoogleSignIn';
import TextInput from '../../components/TextInput/TextInput';

import logoImage from '../../assets/loginPageLogo.png'

import * as styles from './login.module.scss'

export default function Login() {
    const { user } = useContext(WebContext);

    const { values, errors, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchemas,
        onSubmit: (values, action) => {
            console.log(values)
        },
        // validateOnChange: false
    })
    return (
        <main className={styles.container}>
            <GoogleSignOut />
            <img src={logoImage} alt="" className={styles.logo} />
            <div className={styles.loginContainer}>
                <section className={styles.orangeSection}>
                    <div className={styles.logoContainer}>
                        <svg width="247" height="247" viewBox="0 0 247 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M123.5 0C55.2926 0 0 55.2928 0 123.5C0 191.707 55.2926 247 123.5 247C191.707 247 247 191.707 247 123.5C247 55.2928 191.707 0 123.5 0ZM225.442 123.5C225.442 125.533 225.383 127.553 225.266 129.556L185.935 69.8837L145.723 141.137L120.326 105.863L80.8188 162.654L62.8289 140.079L34.6589 173.531C26.3177 158.751 21.5581 141.681 21.5581 123.5C21.5581 67.1989 67.1992 21.5581 123.5 21.5581C179.801 21.5581 225.442 67.1989 225.442 123.5Z" fill="#FFB16B" />
                        </svg>
                    </div>
                </section>
                <section className={styles.whiteSection}>
                    <h1>Conquest Registration Portal</h1>
                    <p>Elevate your startup's growth with our tailored program. Gain access to valuable resource pools, mentorship from CXOs, and fundraising opportunities.
                        <br />
                        <br />
                        Tell us about your startup and yourself through our application form.
                        We're excited to learn more about your venture and you.</p>
                    <form className={styles.login} onSubmit={handleSubmit}>
                        <TextInput
                            name='username'
                            heading="Username"
                            changeFn={handleChange}
                            blurFn={handleBlur}
                            value={values.username}
                            error={errors.username}
                        />
                        <TextInput
                            name='password'
                            heading="Password"
                            changeFn={handleChange}
                            blurFn={handleBlur}
                            value={values.password}
                            error={errors.password}
                            type='password'
                        />
                        <input type="submit" value="Log In" className={styles.submitBtn} />
                    </form>
                    <GoogleSignIn />
                </section>
            </div>
        </main>
    )
}