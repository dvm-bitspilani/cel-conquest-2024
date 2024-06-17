import * as Yup from 'yup';

export const profileSchemas = Yup.object({
    email: Yup.string().email('Invalid email address'),
})