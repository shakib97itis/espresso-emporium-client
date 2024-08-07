import React from 'react'
import logo from '../../assets/espressoEmporiumLogo.png'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import {
    newsLetterInitialValue,
    newsLetterValidationSchema,
    newsLetterHandleSubmit,
} from '../../scripts/formValidation'
import { FaFacebookF } from 'react-icons/fa6'

function Footer() {
    return (
        <>
            <div className="bg-[url('./footer_bg.jpg')] bg-cover pb-12 pt-28">
                <div className="container grid gap-6 lg:grid-cols-2 lg:items-center">
                    {/* Left */}
                    <div className="order-last lg:order-first">
                        <img className="mb-6 w-20" src={logo} alt={logo} />
                        <h3 className="mb-8 font-display text-4xl text-dark-sienna [text-shadow:_0px_0px_9px_rgba(51,26,21,0.8)]">
                            Espresso Emporium
                        </h3>
                        <p className="mb-8 text-xl">
                            Always ready to be your friend. Come & Contact with
                            us to share your memorable moments, to share with
                            your best companion.
                        </p>
                        <div className="mb-8 flex gap-4">
                            {/* <FaFacebook className="h-10 w-10 bg-charcoal text-white"></FaFacebook> */}
                            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white"></div> */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white">
                                <FaFacebookF className="text-xl" />
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white">
                                f
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white">
                                f
                            </div>
                        </div>
                        <h3 className="mb-8 font-display text-4xl text-dark-sienna [text-shadow:_0px_0px_9px_rgba(51,26,21,0.8)]">
                            Get in Touch
                        </h3>
                        <div className="mb-6 space-y-4">
                            <div className="flex items-center gap-6">
                                <div className="">P</div>
                                <a href="">+88 01533 333 333</a>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="">P</div>
                                <a href="">info@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="">P</div>
                                <a href="">72, Wall street, King Road, Dhaka</a>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="mb-10 lg:mb-0">
                        <h3 className="mb-8 font-display text-4xl text-dark-sienna [text-shadow:_0px_0px_9px_rgba(51,26,21,0.8)]">
                            Connect with Us
                        </h3>
                        <Formik
                            initialValues={newsLetterInitialValue}
                            validationSchema={newsLetterValidationSchema}
                            onSubmit={newsLetterHandleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="mb-4">
                                        <Field
                                            name="firstName"
                                            id="firstName"
                                            type="text"
                                            placeholder="Name"
                                            className={`input block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.firstName && touched.firstName ? 'input-error focus:border-error focus:outline-error' : ''}`}
                                        />
                                        <div className="h-[1em] text-error">
                                            <ErrorMessage name="firstName" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            name="email"
                                            id="email"
                                            type="text"
                                            placeholder="Email"
                                            className={`input block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.email && touched.email ? 'input-error focus:border-error focus:outline-error' : ''}`}
                                        />
                                        <div className="h-[1em] text-error">
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            name="message"
                                            id="message"
                                            as="textarea"
                                            placeholder="Type here"
                                            className={`input block min-h-40 w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.message && touched.message ? 'input-error focus:border-error focus:outline-error' : ''}`}
                                        />
                                        <div className="h-[1em] text-error">
                                            <ErrorMessage name="message" />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="rounded-full border-2 border-dark-sienna bg-transparent px-5 py-3 font-display text-2xl text-dark-sienna"
                                    >
                                        Send Message
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div className="bg-[url('./footer_bg_1.jpg')] bg-cover bg-center py-3">
                <div className="container text-center text-white">
                    <p className="font-display text-xl">
                        &copy; Copyright Espresso Emporium ! All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
