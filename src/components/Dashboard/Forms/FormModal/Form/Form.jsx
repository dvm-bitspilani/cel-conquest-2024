import { useFormik } from 'formik';
import axios from 'axios';

import TextInput2 from '../Inputs/Text/TextInput'
import Score from '../Inputs/Score/Score'
import FileUpload from '../Inputs/FileUpload/FileUpload'
import Preference from '../Inputs/Preference/Preference';

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

    function responseObjectGenerator(obj) {
        const subjResponse = []
        const fileResponse = []
        const prefResponse = []
        const scoreResponse = []

        for (let key in obj) {
            const ident = key.split('-')

            if (ident[0] === 'subj') {
                const newAnswer = {
                    "id": parseInt(ident[1]),
                    "ans": obj[key] ? obj[key] : ''
                }
                subjResponse.push(newAnswer)
            }

            if (ident[0] === 'file') {
                const newAnswer = {
                    "id": parseInt(ident[1]),
                    "ans": obj[key] ? obj[key] : ''
                }
                fileResponse.push(newAnswer)
            }

            if (ident[0] === 'pref') {
                const newAnswer = {
                    "id": parseInt(ident[1]),
                    "preferences": obj[key]
                }
                prefResponse.push(newAnswer)
            }

            if (ident[0] === 'score') {
                const newAnswer = {
                    "id": parseInt(ident[1]),
                    "ans": `${parseInt(obj[key])}` === 'NaN' ? 0 : parseInt(obj[key])
                }
                scoreResponse.push(newAnswer)
            }
        }

        const responseObject = {
            "subjective_questions": subjResponse,
            "scoring_questions": scoreResponse,
            "file_upload_questions": fileResponse,
            "preference_questions": prefResponse,
        }

        return responseObject
    }

    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            console.log("In Form.jsx")
            const response = responseObjectGenerator(values)
            // axios.post(`https://conquest-api.bits-dvm.org/api/forms/${data.form_id}/answers/`, response, {
            //     headers: {
            //         Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).tokens.access}`
            //     }
            // })
            //     .then(res => {
            //         console.log(res)
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
            console.log(values)
            console.log(response)
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
    if (data.preference_questions.length > 0) {
        for (let i = 0; i < data.preference_questions.length; i++) {
            prefQuestions.push(
                <Preference
                    key={`pref-${data.preference_questions[i].id}`}
                    name={`pref-${data.preference_questions[i].id}`}
                    heading={data.preference_questions[i].question}
                    options={data.preference_questions[i].preferences}
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
                {prefQuestions}
                <button type='submit' className={styles.submit}>Submit</button>
            </form>
        </main>
    )
}