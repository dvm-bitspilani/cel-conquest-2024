import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    startup_name: Yup.string().required("Please enter your startup's name")
})