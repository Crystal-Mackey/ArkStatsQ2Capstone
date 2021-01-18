import { useState, useEffect } from "react";

const UseEUpdate = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    email2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default UseEUpdate;
