import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { WebContext } from '../../store/website-context';
import { loginSchemas } from './schemas/loginSchema';

import { Divider, ConfigProvider } from 'antd';

import GoogleSignOut from '../../components/Login/GoogleSignOut/GoogleSignOut';
import GoogleSignIn from '../../components/GoogleSignIn/GoogleSignIn';
import TextInput from '../../components/TextInput/TextInput';

import logoImage from '../../assets/loginPageLogo.png'

import * as styles from './login.module.scss'

export default function Login() {
    const [firstSubmit, setFirstSubmit] = useState(false)

    const navigate = useNavigate();

    const { user, isUserLoginBtnDisabled, usernameLogin } = useContext(WebContext);

    const { values, errors, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchemas,
        onSubmit: (values, action) => {
            // console.log("In login.jsx")
            // console.log(values)
            usernameLogin(values)
        },
        validateOnChange: firstSubmit,
        validateOnBlur: firstSubmit
    })

    useEffect(() => {
        if (user) {
            // navigate('/dashboard')
        }
    }, [user])

    return (
        <main className={styles.container}>
            <Link to='/' className={styles.backBtn}><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0625 31.25L7.8125 20L19.0625 8.75M9.375 20H32.1875" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </Link>
            <img src={logoImage} alt="" className={styles.logo} />
            <div className={styles.loginContainer}>
                <section className={styles.orangeSection}>
                    <div className={styles.logoContainer}>
                        <svg width="247" height="247" viewBox="0 0 247 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M123.5 0C55.2926 0 0 55.2928 0 123.5C0 191.707 55.2926 247 123.5 247C191.707 247 247 191.707 247 123.5C247 55.2928 191.707 0 123.5 0ZM225.442 123.5C225.442 125.533 225.383 127.553 225.266 129.556L185.935 69.8837L145.723 141.137L120.326 105.863L80.8188 162.654L62.8289 140.079L34.6589 173.531C26.3177 158.751 21.5581 141.681 21.5581 123.5C21.5581 67.1989 67.1992 21.5581 123.5 21.5581C179.801 21.5581 225.442 67.1989 225.442 123.5Z" fill="#FFB16B" />
                        </svg>
                    </div>
                </section>
                <section
                    style={user && {
                        justifyContent: 'space-evenly',
                    }}
                    className={styles.whiteSection}
                >
                    {user && <h1 className={styles.alrLoggedIn}>You are already logged in</h1>}
                    {user && <GoogleSignOut />}
                    {!user && <h1>Login Portal</h1>}
                    {!user && <p>Elevate your startup's growth with our tailored program. Gain access to valuable resource pools, mentorship from CXOs, and fundraising opportunities.</p>}
                    {!user && <form className={styles.login} onSubmit={handleSubmit}>
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
                        {/* <input type="submit" value="Log In" className={styles.submitBtn} /> */}
                        <button
                            className={styles.submitBtn}
                            type='submit'
                            onClick={() => {
                                setFirstSubmit(true)
                            }}
                            disabled={isUserLoginBtnDisabled}
                            style={isUserLoginBtnDisabled ? { backgroundColor: '#A0A0A0', cursor: 'not-allowed' } : {}}
                        >Log In</button>
                    </form>}
                    {!user && <div className={styles.dividerContainer}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorTextHeading: '#A0A0A0'
                                }
                            }}
                        >
                            <Divider>OR</Divider>
                        </ConfigProvider>
                    </div>}
                    {!user && <GoogleSignIn />}
                </section>
            </div>
        </main>
    )
}