import React,{useEffect,useState} from 'react'
import InputField from './commonComponent/InputField';
import { useFormik } from 'formik';
import inputFieldCss from './utils/inputFieldCss';
import { ContactValidationSchema } from '../Validations/ContactUsValidation';
import contactUsFormImg from "../assets/contactUsFromImg.jpg";
import emailjs from '@emailjs/browser';
import Logo from "../assets/Logo.png";
import Heading from './Heading';
import { Phone } from 'lucide-react';
import Snackbar from '@mui/material/Snackbar';


const ContactUsForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [snackbarState, setSnackbarState] = React.useState({
        open: false,
        message: "",
        type: "success", // "success" | "error"
    });

    const showSuccess = () => {
        setSnackbarState({
            open: true,
            message: "Your message has been sent successfully!",
            type: "success",
        });
    };

    const showError = () => {
        setSnackbarState({
            open: true,
            message: "There was a problem sending your message.",
            type: "error",
        });
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setSnackbarState({ ...snackbarState, open: false });
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
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
                    showSuccess()
                    
                    resetForm(); // Optional: reset form fields after submission
                })
                .catch((err) => {

                    showError();
                    console.error('Failed to send email:', err);
                    
                }).finally(() => {
                    setIsLoading(false)
                });
        },
    });
    return (

        <div className='w-full '>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={snackbarState.open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={snackbarState.message}
                key="topcenter"
                sx={{
                    "& .MuiPaper-root": {
                        backgroundColor:
                            snackbarState.type === "success" ? "#A00B43" : "red", 
                        color: "white",
                    },
                }}
            />

            
            <Heading text={"Contact Us"}/>


            <div className='md:h-[500px] w-full md:px-[150px]  rounded overflow-hidden'>
                <div className='w-full h-full md:flex bg-white  rounded shadow overflow-hidden'>
                    <div className=' h-[40px] md:h-full md:w-1/2   flex items-center justify-center'>
                        <img className='h-[50px] md:h-[120px]' src={ Logo } alt="" />

                    </div>
                    <div className='h-full w-full md:w-1/2 p-10 flex items-center justify-center'>
                        <form
                            className="w-full space-y-4"
                            onSubmit={formik.handleSubmit}
                        >

                            {/* <h2 className="text-xl font-semibold text-left text-gray-700 mb-4 uppercase">Get in touch with us</h2> */}


                            {/* Email Field */}

                            <div>
                                <InputField
                                    type="name"
                                    name="name"
                                    className={inputFieldCss}
                                    placeholder="Enter your name*"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.name}
                                    touched={formik.touched.name}
                                />
                            </div>

                            <div>
                                <InputField
                                    type="tel"
                                    name="phone"
                                    className={inputFieldCss}
                                    placeholder="Enter your phone number*"
                                    value={formik.values.phone}
                                    onChange={(e) => {
    
                                        const numericValue = e.target.value.replace(/\D/g, '');
                                        formik.setFieldValue('phone', numericValue);
                                    }}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.phone}
                                    touched={formik.touched.phone}
                                    inputMode="numeric"
                                />
                            </div>

                            <div>
                                <InputField
                                    type="email"
                                    name="email"
                                    className={inputFieldCss}
                                    placeholder="Enter your email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.email}
                                    touched={formik.touched.email}
                                />
                            </div>

                            <div>
                                <InputField
                                    type="textarea"
                                    name="message"
                                    className="w-full text-gray-800 p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[100px]"
                                    placeholder="Enter your message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.message}
                                    touched={formik.touched.message}
                                />
                            </div>


                            <button
                                type="submit"
                                className="text-white w-full flex items-center justify-center h-10 rounded cursor-pointer bg-gradient-to-r from-[#A00B43] to-[#ff5f6d] hover:opacity-90 transition duration-200 transform hover:scale-[101%]"
                                disabled={isLoading}
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

                </div>
            </div>

        </div>

    )
}

export default ContactUsForm;
