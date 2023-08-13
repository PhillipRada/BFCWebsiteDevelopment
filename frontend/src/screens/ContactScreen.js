import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aksvbom",
        "template_a9x3noj",
        form.current,
        "tDVaHCx9MOgebxNvC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (!userInfo) {
    navigate("/login");
    return null; // Return null so that the component doesn't render anything
  }

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="form-control"
          defaultValue={userInfo.name}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="form-control"
          defaultValue={userInfo.email}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="form-control"
          required
        ></textarea>
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
