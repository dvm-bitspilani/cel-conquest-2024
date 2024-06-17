import * as Yup from 'yup';

export const profileSchemas = Yup.object({
    email: Yup.string().email('Invalid email address'),
    password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
})