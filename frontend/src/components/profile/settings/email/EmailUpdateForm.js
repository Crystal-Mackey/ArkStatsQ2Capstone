import React, { useState } from "react";
import UpdateEmail from "./UpdateEmail";
import SuccessfulUpdate from "./SuccessfulUpdate";

const UpdateEmailForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? <UpdateEmail submitForm={submitForm} /> : <SuccessfulUpdate />}
      </div>
    </>
  );
};

export default UpdateEmailForm;
