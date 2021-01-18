import React from "react";
import UseEUpdate from "./UseEUpdate";
import ValidateEmail from "./ValidateEmail";
import "./Email.css";

const UpdateEmail = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UseEUpdate(submitForm, ValidateEmail);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h3>Change Your Email Address</h3>
        <div className="current-form-inputs">
          <label className="current-label">Enter Your Current Email Address:</label>
          <input
            className="current-input"
            type="email"
            name="email"
            placeholder="Your Current Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="new-form-inputs">
          <label className="new-label">Enter Your New Email Address:</label>
          <input
            className="new-input"
            type="email"
            name="email2"
            placeholder="Confirm Your New Email Address"
            value={values.email2}
            onChange={handleChange}
          />
          {errors.email2 && <p>{errors.email2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default UpdateEmail;
