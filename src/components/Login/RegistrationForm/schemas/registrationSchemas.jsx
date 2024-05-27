import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    startup_name: Yup.string().required("Please enter your startup's name"),
    web_url: Yup.string().url("Please enter a valid URL").required("Please enter your website's URL"),
})