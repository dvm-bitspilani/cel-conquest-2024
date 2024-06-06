import * as Yup from 'yup';

export const loginSchemas = Yup.object({
    username: Yup.string().max(150, "Username must be less than 10 characters").required("Please enter your username"),
    password: Yup.string().min(3, "Password must be longer than 8 characters").required("Please enter your password")
})