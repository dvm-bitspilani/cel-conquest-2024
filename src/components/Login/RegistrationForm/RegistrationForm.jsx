import { useFormik } from 'formik';

import { registrationSchema } from './schemas/registrationSchemas';
import * as styles from './regi.module.scss'
import TextInput from '../../TextInput/TextInput';

export default function RegistrationForm() {
    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            startup_name: '',
            web_url: '',
            team_size: '',
            city: '',
            founder_name: '',
            email: '',
            phone: '',
            linkedin_url: ''
        },
        validationSchema: registrationSchema,
        onSubmit: (values, action) => {
            console.log(values)
        }
    })

    return (
        <form className={styles.register} onSubmit={handleSubmit}>
            <div className={styles.inputGrid}>
                <TextInput
                    name='startup_name'
                    heading='Startup Name'
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.startup_name}
                    error={errors.startup_name}
                />
            </div>
            <footer>
                <button className={styles.prev}>Previous Page</button>
                <input type="submit" value="Next Page" className={styles.next} />
            </footer>
        </form>
    )
}