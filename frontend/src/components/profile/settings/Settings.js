import React from "react";
import Modal from "react-modal";
import Links from "../../navigation/Links";
import EmailUpdateForm from "./email/EmailUpdateForm";

Modal.setAppElement("#root");

export default function Settings() {
  return (
    <>
      <Links />
      <EmailUpdateForm />
    </>
  );
}
