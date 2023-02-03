import * as yup from "yup";

const phoneRegex = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;

export const Step1Schema = yup.object().shape({
    phone: yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required"),
});

export const Step2Schema = yup.object().shape({
    otp: yup.string()
        .required()
        .matches(/^[0-9]+$/, "OTP must be only digits")
        .min(6, 'OTP must be exactly 6 digits')
        .max(6, 'OTP must be exactly 6 digits'),
});