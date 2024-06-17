import { useFormik } from 'formik'
import axios from 'axios'

import { profileSchemas } from './schemas/profileEditSchemas'

import TextInput from '../../../../TextInput/TextInput'
import TextInput2 from '../../../../Dashboard/Forms/FormModal/Inputs/Text/TextInput'
import FileUpload from '../../../../Dashboard/Forms/FormModal/Inputs/FileUpload/FileUpload'

import styles from './form.module.scss'

export default function ProfileForm() {
    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue, setFieldError } = useFormik({
        initialValues: {
            name: '',
            password: '',
            confirm_password: '',
            email: '',
            location: '',
            website: '',
            description: '',
            industries: '',
            functional_areas: '',
            website: '',
            twitter: '',
            linkedin: '',
            stage: ''
        },
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        },
        validationSchema: profileSchemas
    })

    return (
        <main className={styles.form}>
            <form
                className={styles.wrapper}
                onSubmit={handleSubmit}
            >
                <TextInput2
                    name='name'
                    heading="Change Name"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.name}
                    error={errors.name}
                    type='short'
                />
                <TextInput2
                    name='email'
                    heading="Change Email"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.email}
                    error={errors.email}
                    type='short'
                />
                <TextInput2
                    name='password'
                    heading="Change Password"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.password}
                    error={errors.password}
                    type='short'
                />
                <TextInput2
                    name='confirm_password'
                    heading="Confirm Password"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.confirm_password}
                    error={errors.confirm_password}
                    type='short'
                />
                <button type='submit' className={styles.submit}>Submit</button>
            </form>
        </main>
    )
}