import { useFormik } from "formik";
import axios from "axios";

import { profileSchemas } from "./schemas/profileEditSchemas";

import TextInput from "../../../../TextInput/TextInput";
import TextInput2 from "../../../../Dashboard/Forms/FormModal/Inputs/Text/TextInput";
import FileUpload from "../../../../Dashboard/Forms/FormModal/Inputs/FileUpload/FileUpload";

import styles from "./form.module.scss";

export default function ProfileForm({ formClose }) {
  const userRole = JSON.parse(localStorage.getItem("userData")).user_profile_obj
    .role;
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    setFieldError,
  } = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirm_password: "",
      email: "",
      contact_email: "",
      profile_logo: "",
      location: "",
      website: "",
      description: "",
      // twitter: "",
      linkedin: "",
      designation: "",
      resume: "",
      expertise: "",
      domain: "",
      company: "",
      pitchdeck: "",
      pitch_video: "",
      stage: "",
      short_term_vision: "",
    },
    onSubmit: (values, action) => {
      console.log(values);
      const requestObject =
        userRole === "Startup"
          ? {
              user_profile: {
                user: {
                  username: values.username.trim(),
                  email: values.email.trim(),
                  password: values.password.trim(),
                  first_name: values.firstName.trim(),
                  last_name: values.lastName.trim(),
                },
              },
              startup_name: values.company.trim(),
              profile_logo: values.profile_logo,
              description: values.description.trim(),
              stage: values.stage,
              industry: "",
              functional_areas: "",
              location_hq: values.location.trim(),
              pitch_deck: values.pitchdeck.trim(),
              linkedin: values.linkedin.trim(),
              twitter: "",
              short_term_vision: values.short_term_vision.trim(),
              contact_email: values.contact_email.trim(),
              website_url: values.website.trim(),
              video_pitch: values.pitch_video.trim(),
              team: "",
            }
          : {
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
              description: values.description.trim(),
              resume: values.resume.trim(),
              sector_of_expertise: values.expertise,
              domain_of_expertise: values.domain,
              company_name: values.company.trim(),
            };
      axios
        .put(
          `https://conquest-api.bits-dvm.org/api/users/profile/${
            userRole === "Startup" ? "startup/" : ""
          }`,
          requestObject,
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).tokens.access
              }`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(requestObject);
          console.log(err);
        });
      action.resetForm();
      formClose();
    },
    validationSchema: profileSchemas,
  });

  return (
    <main className={styles.form}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <TextInput2
          name="username"
          heading="Change Username"
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.username}
          error={errors.username}
          type="short"
        />
        <TextInput2
          name="firstName"
          heading="Change First Name"
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.firstName}
          error={errors.firstName}
          type="short"
        />
        <TextInput2
          name="lastName"
          heading="Change Last Name"
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.lastName}
          error={errors.lastName}
          type="short"
        />
        {userRole === "Startup" ? (
          <TextInput2
            name="contact_email"
            heading="Change Contact Email"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.contact_email}
            error={errors.contact_email}
            type="short"
          />
        ) : (
          <TextInput2
            name="email"
            heading="Change Email"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.email}
            error={errors.email}
            type="short"
          />
        )}

        <TextInput2
          name="password"
          heading="Change Password"
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.password}
          error={errors.password}
          type="short"
        />
        <TextInput2
          name="confirm_password"
          heading="Confirm Password"
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.confirm_password}
          error={errors.confirm_password}
          type="short"
        />
        <FileUpload
          key="profile_logo"
          name="profile_logo"
          heading="Change Profile Logo"
          manualValue={setFieldValue}
          forceType="image"
        />
        {userRole === "Startup" ? (
          <TextInput2
            name="company"
            heading="Change Startup Name"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.company}
            error={errors.company}
            type="short"
          />
        ) : (
          <TextInput2
            name="company"
            heading="Change Company Name"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.company}
            error={errors.company}
            type="short"
          />
        )}
        <TextInput2
          name="location"
          heading={
            userRole === "Startup" ? "Change Location HQ" : "Change Location"
          }
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.location}
          error={errors.location}
          type="short"
        />
        {userRole === "Startup" ? (
          <TextInput2
            name="website"
            heading="Change Website Link"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.website}
            error={errors.website}
            type="link"
          />
        ) : (
          ""
        )}
        {userRole === "Startup" ? (
          ""
        ) : (
          <TextInput2
            name="resume"
            heading="Share your resume as a google drive link"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.resume}
            error={errors.resume}
            type="link"
          />
        )}
        {userRole === "Startup" ? (
          <TextInput2
            name="pitchdeck"
            heading="Share your pitch deck as a google drive link"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.pitchdeck}
            error={errors.pitchdeck}
            type="link"
          />
        ) : (
          ""
        )}
        {userRole === "Startup" ? (
          <TextInput2
            name="pitch_video"
            heading="Share your pitch video as a google drive link"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.pitch_video}
            error={errors.pitch_video}
            type="link"
          />
        ) : (
          ""
        )}
        <TextInput2
          name="description"
          heading="Change Description"
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.description}
          error={errors.description}
          type="long"
        />
        {userRole === "Startup" ? (
          <TextInput2
            name="short_term_vision"
            heading="Change Short Term Vision"
            changeFn={handleChange}
            blurFn={handleBlur}
            value={values.short_term_vision}
            error={errors.short_term_vision}
            type="long"
          />
        ) : (
          ""
        )}
        <TextInput2
          name="linkedin"
          heading="Change LinkedIn URL"
          changeFn={handleChange}
          blurFn={handleBlur}
          value={values.linkedin}
          error={errors.linkedin}
          type="link"
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
        {userRole === "Startup" ? (
          <div className={styles.inputGroup}>
            <label htmlFor="stage">Select Stage</label>
            <select
              name="stage"
              id="stage"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.stage}
              className={styles.selectInput}
            >
              <option value="" label="Select stage" />
              <option value="Pre-seed Stage" label="Pre-Seed" />
              <option value="Seed Stage" label="Seed" />
              <option value="Early Stage" label="Early" />
              <option value="Growth Stage" label="Growth" />
              <option value="Expansion Stage" label="Expansion" />
              <option value="Exit Stage" label="Exit" />
            </select>
            {errors.stage && <div className={styles.error}>{errors.stage}</div>}
          </div>
        ) : (
          ""
        )}
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </main>
  );
}
