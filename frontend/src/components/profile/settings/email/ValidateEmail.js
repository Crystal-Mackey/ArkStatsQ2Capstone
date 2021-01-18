export default function ValidateEmail(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.email2) {
    errors.email2 = "Email required";
  } else if (values.email2 !== values.email) {
    errors.email2 = "Emails do not match";
  }
  return errors;
}
