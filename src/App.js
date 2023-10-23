import React from "react";
import "./App.css";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
      if (validateEmail(values.email)) {
        alert("Login Successful");
      } else {
        alert("Username should be an email");
      }
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Field Required";
      } else if (!validateEmail(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field Required";
      }

      return errors;
    },
  });

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="emailField"
        ></input>
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          id="pswField"
        ></input>
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button type="submit" id="submitBtn">
          Submit
        </button>{" "}
      </form>
    </div>
  );
}

export default App;
