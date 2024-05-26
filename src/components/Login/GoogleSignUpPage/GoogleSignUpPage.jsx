import GoogleSignIn from '../../GoogleSignIn/GoogleSignIn';

import * as styles from './gsign.module.scss';

export default function GoogleSignUpPage() {
    return (
        <>
            <h1>Conquest Registration Portal</h1>
            <p>Elevate your startup's growth with our tailored program. Gain access to valuable resource pools, mentorship from CXOs, and fundraising opportunities.
                <br />
                <br />
                Tell us about your startup and yourself through our application form.
                We're excited to learn more about your venture and you.</p>
            <GoogleSignIn />
        </>
    )
}