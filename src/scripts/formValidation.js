import * as yup from 'yup'

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const validationSchema = yup.object({
    firstName: yup
        .string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: yup
        .string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup
        .string()
        .min(8, 'Password must be 8 character long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required('Password is required'),
    conformPassword: yup
        .string()
        .oneOf([yup.ref('pass'), null], 'Must match "password" field value')
        .required('Conform password is required'),
})

const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }, 400)
}

export const newsLetterInitialValue = {
    firstName: '',
    email: '',
    message: '',
}
export const newsLetterValidationSchema = yup.object({
    firstName: yup
        .string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    message: yup.string().required('Required'),
})

export const newsLetterHandleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }, 400)
}

export const addCoffeeInitialValue = {
    name: '',
    chef: '',
    supplier: '',
    taste: '',
    category: '',
    details: '',
    photo: '',
}

export const addCoffeeValidationSchema = yup.object({
    name: yup.string().required('Required'),
    chef: yup.string(),
    supplier: yup.string(),
    taste: yup.string(),
    category: yup.string(),
    details: yup.string(),
    photo: yup.string().url('Enter a proper url'),
})

export const addCoffeeHandleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }, 400)
}

export const updateCoffeeInitialValue = {
    name: '',
    chef: '',
    supplier: '',
    taste: '',
    category: '',
    details: '',
    photo: '',
}

export const updateCoffeeValidationSchema = yup.object({
    name: yup.string().required('Required'),
    chef: yup.string(),
    supplier: yup.string(),
    taste: yup.string(),
    category: yup.string(),
    details: yup.string(),
    photo: yup.string().url('Enter a proper url'),
})

export const updateCoffeeHandleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }, 400)
}
