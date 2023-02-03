import { useFormik } from "formik";
import { Step1Schema } from "../../schemas";
import { FaLock } from "react-icons/fa";



const FormStep1 = ({ setView, setPhoneNumber }) => {
    const onSubmit = async (values, actions) => {
        setView('step2');
        setPhoneNumber(values.phone);
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
            phone: "",
        },
        validationSchema: Step1Schema,
        onSubmit,
    });

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col">
            {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
            <input
                value={values.phone}
                onChange={handleChange}
                id="phone"
                type="text"
                placeholder="Phone number"
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? "input-error" : ""}
            />

            <button disabled={errors.phone} type="submit" className="submit">
                <FaLock />
                Sign in
            </button>
        </form>
    );
};
export default FormStep1;