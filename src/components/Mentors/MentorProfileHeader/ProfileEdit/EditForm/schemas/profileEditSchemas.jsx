import * as Yup from 'yup';

export const profileSchemas = Yup.object({
    username: Yup.string(),
    firstName: Yup.string(),
    lastName: Yup.string(),
    designation: Yup.string(),
    company: Yup.string(),
    email: Yup.string().email('Invalid email address'),
    password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    website: Yup.string().url('Invalid URL'),
    // resume: Yup.string().url('Invalid URL'),
    description: Yup.string(),
    location: Yup.string(),
    // twitter: Yup.string().url('Invalid URL').matches(/^(https:\/\/x\.com\/)/gi, { excludeEmptyString: true, message: 'Invalid Twitter / X.com URL' }),
    linkedin: Yup.string().url('Invalid URL').matches(/^(https:\/\/www\.linkedin\.com\/company\/)/gi, { excludeEmptyString: true, message: 'Invalid LinkedIn URL' })
})