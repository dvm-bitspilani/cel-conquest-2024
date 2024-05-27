import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { TextDropdown, NumDropdown } from '../../Dropdown/Dropdown';
import TextInput from '../../TextInput/TextInput';

import * as styles from './regi.module.scss';

import { registrationSchema } from './schemas/registrationSchemas';
import statesData from '../../../data/states.json'

export default function RegistrationForm() {
    const [stateOptions, setStateOptions] = useState([])
    const [allCities, setAllCities] = useState([])
    const [allStates, setAllStates] = useState([])
    const [availableCities, setAvailableCities] = useState([]);

    useEffect(() => {
        const allStatesList = statesData.map((state) => {
            return ({
                value: state.name,
                label: state.name
            })
        })
        setStateOptions(allStatesList)
        setAllStates(allStatesList)
    }, [])


    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: {
            startup_name: '',
            web_url: 'https://',
            team_size: 1,
            state: '',
            city: '',
            founder_name: '',
            email: '',
            phone: '',
            linkedin_url: ''
        },
        validationSchema: registrationSchema,
        onSubmit: (values, action) => {
            console.log(values)
        }
    })

    useEffect(() => {
        const state = statesData.find(state => state.name === values.state)

        setFieldValue('city', "")

        if (state) {
            const cities = state.cities.map(city => {
                return ({
                    value: city.name,
                    label: city.name
                })
            })
            setAvailableCities(cities)
            setAllCities(cities)
        }
    }, [values.state])

    function handleCitySearch(value) {
        const regex = new RegExp(value)
        setAvailableCities(() => {
            const newCity = allCities.filter((city) => regex.test(city.value))
            return newCity
        })
    }

    function handleStateSearch(value) {
        const regex = new RegExp(value)
        setStateOptions(() => {
            const newStates = allStates.filter((state) => regex.test(state.value))
            return newStates
        })
    }

    return (
        <form className={styles.register} onSubmit={handleSubmit}>
            <div className={styles.inputGrid}>
                <TextInput
                    name='startup_name'
                    heading='Startup Name'
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.startup_name}
                    error={errors.startup_name}
                />
                <TextInput
                    name='web_url'
                    heading='Website URL'
                    changeFn={handleChange}
                    blurFn={handleBlur}
                    value={values.web_url}
                    error={errors.web_url}
                />
                <NumDropdown
                    name='team_size'
                    heading='Team Size'
                    changeFn={(newVal) => setFieldValue('team_size', newVal)}
                    blurFn={handleBlur}
                    value={values.team_size}
                    error={errors.team_size}
                    min={1}
                    max={10}
                />
                <TextDropdown
                    name='state'
                    heading='State'
                    changeFn={(newVal) => setFieldValue('state', newVal)}
                    blurFn={handleBlur}
                    searchFn={handleStateSearch}
                    options={stateOptions}
                    value={values.state}
                    error={errors.state}
                />
                <TextDropdown
                    name='city'
                    heading='City'
                    changeFn={(newVal) => setFieldValue('city', newVal)}
                    blurFn={handleBlur}
                    searchFn={handleCitySearch}
                    options={availableCities}
                    value={values.city}
                    error={errors.city}
                />
            </div>
            <footer>
                <button className={styles.prev}>Previous Page</button>
                <input type="submit" value="Next Page" className={styles.next} />
            </footer>
        </form>
    )
}