import React, { useState } from "react";
import { useFormik } from "formik";
import { ContactValidationSchema } from "../Validations/ContactUsValidation";
import { Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const HeroSectionForm = () => {



    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
        validationSchema: ContactValidationSchema,
        onSubmit: (values, { resetForm }) => {

            setIsLoading(true);

            emailjs.send(
                'service_uyizmlb', // service ID
                'template_fqsoz9a', // EmailJS template ID
                {
                    name: values.name,
                    phone: values.phone,
                    email: values.email,
                    message: values.message,
                },
                '9Gyk9_yOU75jSj829' // Replace with your public key (not user ID anymore)
            )
                .then(() => {
                    
                    alert('Thank you! Your message has been sent.');
                    resetForm(); 
                })
                .catch((err) => {
                    console.error('Failed to send email:', err);
                    alert('Something went wrong. Please try again.');
                }).finally(() => {
                    setIsLoading(false)
                });
        },
    });

    return (
        <div className="py-2 pt-1 w-[450px] bg-[#ffffff] shadow-lg rounded-lg flex items-center justify-center">
            <form
                onSubmit={formik.handleSubmit}
                className="grid grid-cols-1 gap-4 w-full p-4"
            >

                <h2 className="text-gray-900 text-2xl font-light leading-tight capitalize">
                    Let us contact you
                </h2>

                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name*"
                        className="bg-gray-50 border h-[35px] border-gray-300 text-gray-700 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.name}</p>
                    )}
                </div>


                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number*"
                        className="bg-gray-50 border h-[35px] border-gray-300 text-gray-700 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.phone}</p>
                    )}
                </div>


                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="bg-gray-50 border h-[35px] border-gray-300 text-gray-700 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>


                <div>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        rows="3"
                        className="bg-gray-50 border border-gray-300 text-gray-700 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.message}</p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="text-white flex items-center justify-center h-10 rounded cursor-pointer bg-gradient-to-r from-[#A00B43] to-[#ff5f6d] hover:opacity-90 transition duration-200 transform hover:scale-[101%]"
                >

                    {isLoading ?
                        <div className="flex items-center justify-center">
                            <span className="loading loading-spinner loading-md"></span>
                        </div> :
                        <div className="flex items-center justify-center">
                            <Phone size={15} />
                            Get a call back
                        </div>
                    }

                </button>
            </form>
        </div>
    );
};

export default HeroSectionForm;
