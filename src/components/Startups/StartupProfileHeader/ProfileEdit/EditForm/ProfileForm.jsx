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
                    heading="Name"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.name}
                    error={errors.name}
                    type='short'
                />
                <TextInput2
                    name='email'
                    heading="Email"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.email}
                    error={errors.email}
                    type='short'
                />
                <button type='submit' className={styles.submit}>Submit</button>
            </form>
        </main>
    )
}