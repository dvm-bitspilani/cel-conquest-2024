import { useFormik } from 'formik';

import { registrationSchema } from './schemas/registrationSchemas';
import * as styles from './regi.module.scss'
import TextInput from '../../TextInput/TextInput';
import { TextDropdown, NumDropdown } from '../../Dropdown/Dropdown';

export default function RegistrationForm() {
    const { values, errors, touched, handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: {
            startup_name: '',
            web_url: '',
            team_size: 1,
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
                <TextInput
                    name='web_url'
                    heading='Website URL'
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.web_url}
                    error={errors.web_url}
                />
                <NumDropdown
                    name='team_size'
                    heading='Team Size'
                    changeFn={(newVal) => setFieldValue('team_size', newVal)}
                    blurFn={handleBlur}
                    value={values.team_size}
                    error={errors.team_size}
                    min={1}
                    max={10}
                />
            </div>
            <footer>
                <button className={styles.prev}>Previous Page</button>
                <input type="submit" value="Next Page" className={styles.next} />
            </footer>
        </form>
    )
}