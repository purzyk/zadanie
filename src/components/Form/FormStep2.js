import * as React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { Step2Schema } from "../../schemas";
import { FaLock } from "react-icons/fa";

const FormStep2 = ({ phoneNumber }) => {
    const [reSend, setReSend] = useState(false);
    const [counter, setCounter] = React.useState(60);
    const onSubmit = async (values, actions) => {
        alert('submitted');
        actions.resetForm();
    };
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            otp: "",
        },
        validationSchema: Step2Schema,
        onSubmit,
    });

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0) {
            setReSend(true)
        }
    }, [counter]);

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col">
            <input
                id="phone"
                type="text"
                disabled
                value={phoneNumber}
            >
            </input>
            {errors.otp && touched.otp && <p className="error">{errors.otp}</p>}
            <input
                value={values.otp}
                onChange={handleChange}
                id="otp"
                type="text"
                placeholder="OTP Code"
                onBlur={handleBlur}
                className={errors.otp && touched.otp ? "input-error" : ""}
            />
            <div className="flex justify-between items-center text-sm mb-6">
                <div>{counter}</div>
                <button className="button__resend" disabled={!reSend}>Re-send OTP</button>
            </div>
            <button disabled={errors.otp} type="submit" className="submit">
                <FaLock />
                Verify
            </button>
        </form>
    );
};
export default FormStep2;