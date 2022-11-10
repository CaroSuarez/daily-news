import { useFormik } from "formik";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const Contact = () => {
  const isRequiredMsg = "Sorry, this is required";
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Sorry, the email is invalid")
        .required(isRequiredMsg),
      firstname: Yup.string().required(isRequiredMsg),
      lastname: Yup.string().required(isRequiredMsg),
      message: Yup.string()
        .required(isRequiredMsg)
        .max(500, "Sorry, the message is too long"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1>Contact us</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email@example.com"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <Alert variant="danger"> {formik.errors.email} </Alert>
          ) : null}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            {...formik.getFieldProps("firstname")}
          />
          {formik.errors.firstname && formik.touched.firstname ? (
            <Alert variant="danger"> {formik.errors.firstname} </Alert>
          ) : null}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            {...formik.getFieldProps("lastname")}
          />
          {formik.errors.lastname && formik.touched.lastname ? (
            <Alert variant="danger"> {formik.errors.lastname} </Alert>
          ) : null}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows={3}
            {...formik.getFieldProps("message")}
          />
          {formik.errors.message && formik.touched.message ? (
            <Alert variant="danger"> {formik.errors.message} </Alert>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Send message
        </button>
      </form>
    </>
  );
};

export default Contact;
