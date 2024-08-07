import React from 'react'
import { ErrorMessage, Form, Field, Formik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be 8 character long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required('Password is required'),
    conformPassword: Yup.string()
        .oneOf([Yup.ref('pass'), null], 'Must match "password" field value')
        .required('Conform password is required'),
})

function FormPage() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 400)
            }}
        >
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" id="firstName" type="text" />
                    <ErrorMessage name="firstName" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" id="lastName" type="text" />
                    <ErrorMessage name="lastName" />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" id="email" type="email" />
                    <ErrorMessage name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" id="password" type="password" />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <label htmlFor="conformPassword">Conform Password</label>
                    <Field name="conformPassword" id="conformPassword" type="conformPassword" />
                    <ErrorMessage name="conformPassword" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default FormPage
