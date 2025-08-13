import { Phone } from "lucide-react";
import * as Yup from "yup";

export const ContactValidationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    phone: Yup.string()
        .matches(/^\d{10,12}$/, 'Phone number must be 10 to 12 digits')
        .required('Please enter a phone number'),

    email: Yup.string()
        .email('Invalid email address'),

    message: Yup.string()
});
