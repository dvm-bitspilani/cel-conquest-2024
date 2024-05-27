import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    startup_name: Yup.string().min(2).max(75).required("Please enter your startup's name"),
    web_url: Yup.string().url("Please enter a valid URL").required("Please enter your website's URL"),
    team_size: Yup.number().positive().required("Please enter a team size"),
    state: Yup.string().required("Please enter your state"),
    city: Yup.string().required("Please enter your city"),
    founder_name: Yup.string().required("Please enter Founder's Name"),
    email: Yup.string().email("Invalid format").required("Please enter your email"),
    phone: Yup.number().typeError("Invalid number").required("Please enter mobile number"),
    linkedin_url: Yup.string().url("Please enter a valid URL").required("Please enter your LinkedIn URL").matches(/^(https:\/\/www\.linkedin\.com).*/i, "Enter a valid LinkedIn URL"),
})