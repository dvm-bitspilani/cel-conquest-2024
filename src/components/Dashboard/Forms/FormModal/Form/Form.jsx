import { useEffect, useState } from 'react'
import { useFormik } from 'formik'

import TextInput2 from '../Inputs/Text/TextInput'
import Score from '../Inputs/Score/Score'
import FileUpload from '../Inputs/FileUpload/FileUpload'

import styles from './form.module.scss'

export default function Form({ data, formClose }) {
    const initialValues = {}
    const subjQuestions = []
    const prefQuestions = []
    const fileQuestions = []
    const scoreQuestions = []
    if (data.preference_questions.length > 0) {
        for (let i = 0; i < data.preference_questions.length; i++) {
            initialValues[`pref-${data.preference_questions[i].id}`] = ''
        }
    }
    if (data.subjective_questions.length > 0) {
        for (let i = 0; i < data.subjective_questions.length; i++) {
            initialValues[`subj-${data.subjective_questions[i].id}`] = ''
        }
    }
    if (data.file_upload_questions.length > 0) {
        for (let i = 0; i < data.file_upload_questions.length; i++) {
            initialValues[`file-${data.file_upload_questions[i].id}`] = ''
        }
    }
    if (data.scoring_questions.length > 0) {
        for (let i = 0; i < data.scoring_questions.length; i++) {
            initialValues[`score-${data.scoring_questions[i].id}`] = ''
        }
    }

    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            console.log("In Form.jsx")
            console.log(values)
            action.resetForm()
            formClose()
        }
    })

    if (data.subjective_questions.length > 0) {
        for (let i = 0; i < data.subjective_questions.length; i++) {
            subjQuestions.push(
                <TextInput2
                    key={`subj-${data.subjective_questions[i].id}`}
                    name={`subj-${data.subjective_questions[i].id}`}
                    heading={data.subjective_questions[i].question}
                    changeFn={handleChange}
                    blurFn={handleBlur}
                // value={values[`subj-${data.subjective_questions[i].id}`]}
                />
            )
        }
    }
    if (data.scoring_questions.length > 0) {
        for (let i = 0; i < data.scoring_questions.length; i++) {
            scoreQuestions.push(
                <Score
                    key={`score-${data.scoring_questions[i].id}`}
                    name={`score-${data.scoring_questions[i].id}`}
                    heading={data.scoring_questions[i].question}
                    changeFn={handleChange}
                // blurFn={handleBlur}
                // value={values[`subj-${data.subjective_questions[i].id}`]}
                />
            )
        }
    }
    if (data.file_upload_questions.length > 0) {
        for (let i = 0; i < data.file_upload_questions.length; i++) {
            fileQuestions.push(
                <FileUpload
                    key={`file-${data.file_upload_questions[i].id}`}
                    name={`file-${data.file_upload_questions[i].id}`}
                    heading={data.file_upload_questions[i].question}
                    manualValue={setFieldValue}
                // changeFn={handleChange}
                // blurFn={handleBlur}
                // value={values[`subj-${data.subjective_questions[i].id}`]}
                />
            )
        }
    }

    return (
        <main className={styles.form}>
            <form
                className={styles.wrapper}
                onSubmit={handleSubmit}
            >
                {subjQuestions}
                {scoreQuestions}
                {fileQuestions}
                <button type='submit' className={styles.submit}>Submit</button>
            </form>
        </main>
    )
}