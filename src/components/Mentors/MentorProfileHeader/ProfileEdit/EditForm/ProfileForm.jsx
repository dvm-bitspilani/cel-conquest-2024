import { useFormik } from 'formik'
import axios from 'axios'

import { profileSchemas } from './schemas/profileEditSchemas'

import TextInput from '../../../../TextInput/TextInput'
import TextInput2 from '../../../../Dashboard/Forms/FormModal/Inputs/Text/TextInput'
import FileUpload from '../../../../Dashboard/Forms/FormModal/Inputs/FileUpload/FileUpload'

import styles from './form.module.scss'

export default function ProfileForm({ formClose }) {
    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue, setFieldError } = useFormik({
        initialValues: {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            confirm_password: '',
            email: '',
            profile_logo: '',
            location: '',
            website: '',
            description: '',
            twitter: '',
            linkedin: '',
            designation: '',
            resume: '',
            expertise: '',
            domain: '',
            company: '',
        },
        onSubmit: (values, action) => {
            console.log(values)
            const requestObject = {
                user: {
                    username: values.username.trim(),
                    password: values.password.trim(),
                    first_name: values.firstName.trim(),
                    last_name: values.lastName.trim(),
                },
                profile_logo: values.profile_logo,
                google_email: values.email.trim(),
                designation: values.designation.trim(),
                linkedin: values.linkedin.trim(),
                location: values.location.trim(),
                description: values.description,
                resume: values.resume.trim(),
                sector_of_expertise: values.expertise,
                domain_of_expertise: values.domain,
                company_name: values.company,
            }
            axios.put('https://conquest-api.bits-dvm.org/api/users/profile/', requestObject, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).tokens.access}`
                }
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            action.resetForm()
            formClose()
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
                    name='username'
                    heading="Change Username"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.username}
                    error={errors.username}
                    type='short'
                />
                <TextInput2
                    name='firstName'
                    heading="Change First Name"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.firstName}
                    error={errors.firstName}
                    type='short'
                />
                <TextInput2
                    name='lastName'
                    heading="Change Last Name"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.lastName}
                    error={errors.lastName}
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
                />
                <TextInput2
                    name='company'
                    heading="Change Company Name"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.company}
                    error={errors.company}
                    type='short'
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
                    name='resume'
                    heading="Share your resume as a google drive link"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.resume}
                    error={errors.resume}
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
                {/* <TextInput2
                    name='twitter'
                    heading="Change Twitter URL"
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.twitter}
                    error={errors.twitter}
                    type='link'
                /> */}
                <button type='submit' className={styles.submit}>Submit</button>
            </form>
        </main>
    )
}