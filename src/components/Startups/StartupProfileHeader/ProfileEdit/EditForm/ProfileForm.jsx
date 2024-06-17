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
            profile_logo: '',
            location: '',
            website: '',
            description: '',
            industries: '',
            functional_areas: '',
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
                <FileUpload
                    key='profile_logo'
                    name='profile_logo'
                    heading='Change Profile Logo'
                    manualValue={setFieldValue}
                    forceType='image'
                // changeFn={handleChange}
                // blurFn={handleBlur}
                // value={values[`subj-${data.subjective_questions[i].id}`]}
                />
                <TextInput2
                    name='location'
                    heading="Change Location HQ"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.location}
                    error={errors.location}
                    type='short'
                />
                <TextInput2
                    name='website'
                    heading="Change Website Link"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.website}
                    error={errors.website}
                    type='link'
                />
                <TextInput2
                    name='description'
                    heading="Change Description"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.description}
                    error={errors.description}
                    type='long'
                />
                <TextInput2
                    name='linkedin'
                    heading="Change LinkedIn URL"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.linkedin}
                    error={errors.linkedin}
                    type='link'
                />
                <TextInput2
                    name='twitter'
                    heading="Change Twitter URL"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.twitter}
                    error={errors.twitter}
                    type='link'
                />
                <button type='submit' className={styles.submit}>Submit</button>
            </form>
        </main>
    )
}