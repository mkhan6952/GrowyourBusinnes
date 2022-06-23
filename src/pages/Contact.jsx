import React from "react";
import "../style/contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Provide a valid email")
          .required("Provide a email"),
        password: Yup.string()
          .min(4, "character should be more than 4")
          .max(10, "character should be less  than 11")
          .required("Provide a password "),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="outer-container">
      <form onSubmit={handleSubmit} className="inner-container">
        <div class="row mb-3">
          <label htmlFor="email" class="col-sm-2 col-form-label">
            Email:
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
              class="form-control"
              id="email"
              placeholder="Enter Email:"
            />
            <p style={{ color: "red" }}>
              {touched.email && errors.email ? errors.email : null}
            </p>
          </div>
        </div>
        <div class="row mb-3">
          <label htmlFor="password" class="col-sm-2 col-form-label">
            Password:
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
              class="form-control"
              id="password"
              placeholder="Enter Password:"
            />
            <p style={{ color: "red" }}>
              {touched.password && errors.password ? errors.password : null}
            </p>
          </div>
        </div>

        <button type="submit" class="btn btn-success">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Contact;
