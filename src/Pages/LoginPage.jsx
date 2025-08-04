import React from 'react';
import { useFormik } from 'formik';
import { LoginValidationSchema } from '../Validations/LoginPageValidation';
import LoginFormBgImg from "../assets/LoginFormBgimg.png";
import InputField from '../components/commonComponent/InputField';
import inputFieldCss from '../components/utils/inputFieldCss';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginValidationSchema,
        onSubmit: () => {
            navigate('/home');
        },
    });

    console.log("object", formik.errors)

    return (
        <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center px-4">
            <div
                className="w-full max-w-5xl flex flex-col md:flex-row rounded shadow-lg overflow-hidden"
                style={{
                    backgroundImage: `url(${LoginFormBgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left  ">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-sans text-[#fffff]">
                        Painting
                    </h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-sans text-[#fffff]">
                        Project
                    </h1>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-12 flex items-center justify-center ">
                    <form
                        className="w-full max-w-sm"
                        onSubmit={formik.handleSubmit}
                    >
                        <fieldset className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>

                            <label className="block text-gray-700 font-medium mb-1">Email</label>
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
                            {/* Password Field */}
                            <label className="block mt-4 text-gray-700 font-medium mb-1">Password</label>
                            <InputField
                                type="password"
                                name="password"
                                className={inputFieldCss}
                                placeholder="Enter your password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.password}
                                touched={formik.touched.password}
                            />





                            <button
                                type="submit"
                                className="w-full mt-6 bg-[#A00B43] hover:bg-[#a00b44d6] text-white py-2 rounded font-semibold transition"
                            >
                                Login
                            </button>


                            <p className="text-gray-700 text-sm mt-3 text-center">
                                Forgot password?
                                <span className="ml-1 cursor-pointer hover:text-blue-500 hover:underline">
                                    Click here
                                </span>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
