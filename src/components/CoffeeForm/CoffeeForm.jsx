import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'

function CoffeeForm({
    coffeeInitialValue,
    coffeeValidationSchema,
    coffeeHandleSubmit,
}) {
    return (
        <div>
            <Formik
                initialValues={coffeeInitialValue}
                validationSchema={coffeeValidationSchema}
                onSubmit={coffeeHandleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="grid grid-cols-2 gap-5">
                        <div className="">
                            <label
                                htmlFor="name"
                                className="mb-4 block text-xl font-semibold"
                            >
                                Name:{' '}
                            </label>
                            <Field
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Enter coffee name"
                                className={`input mb-1 block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.name && touched.name ? 'input-error focus:border-error focus:outline-error' : ''}`}
                            />
                            <div className="h-[1em] text-error">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="chef"
                                className="mb-4 block text-xl font-semibold"
                            >
                                Chef:
                            </label>
                            <Field
                                name="chef"
                                id="chef"
                                type="text"
                                placeholder="Enter coffee chef"
                                className={`input mb-1 block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.chef && touched.chef ? 'input-error focus:border-error focus:outline-error' : ''}`}
                            />
                            <div className="h-[1em] text-error">
                                <ErrorMessage name="chef" />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="supplier"
                                className="mb-4 block text-xl font-semibold"
                            >
                                Supplier:
                            </label>
                            <Field
                                name="supplier"
                                id="supplier"
                                type="text"
                                placeholder="Enter coffee chef"
                                className={`input mb-1 block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.supplier && touched.supplier ? 'input-error focus:border-error focus:outline-error' : ''}`}
                            />
                            <div className="h-[1em] text-error">
                                <ErrorMessage name="supplier" />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="taste"
                                className="mb-4 block text-xl font-semibold"
                            >
                                Taste:
                            </label>
                            <Field
                                name="taste"
                                id="taste"
                                type="text"
                                placeholder="Enter coffee chef"
                                className={`input mb-1 block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.taste && touched.taste ? 'input-error focus:border-error focus:outline-error' : ''}`}
                            />
                            <div className="h-[1em] text-error">
                                <ErrorMessage name="taste" />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="category"
                                className="mb-4 block text-xl font-semibold"
                            >
                                Category:
                            </label>
                            <Field
                                name="category"
                                id="category"
                                type="text"
                                placeholder="Enter coffee chef"
                                className={`input mb-1 block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.category && touched.category ? 'input-error focus:border-error focus:outline-error' : ''}`}
                            />
                            <div className="h-[1em] text-error">
                                <ErrorMessage name="category" />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="details"
                                className="mb-4 block text-xl font-semibold"
                            >
                                Details:
                            </label>
                            <Field
                                name="details"
                                id="details"
                                type="text"
                                placeholder="Enter coffee chef"
                                className={`input mb-1 block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.details && touched.details ? 'input-error focus:border-error focus:outline-error' : ''}`}
                            />
                            <div className="h-[1em] text-error">
                                <ErrorMessage name="details" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="photo"
                                className="mb-4 block text-xl font-semibold"
                            >
                                Photo :
                            </label>
                            <Field
                                name="photo"
                                id="photo"
                                type="text"
                                placeholder="Enter coffee chef"
                                className={`input mb-1 block w-full hover:border-tan focus:border-tan focus:outline-tan ${errors.photo && touched.photo ? 'input-error focus:border-error focus:outline-error' : ''}`}
                            />
                            <div className="h-[1em] text-error">
                                <ErrorMessage name="photo" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="col-span-2 rounded border-2 border-dark-sienna bg-tan px-5 py-3 font-display text-2xl text-dark-sienna"
                        >
                            Send Message
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CoffeeForm
