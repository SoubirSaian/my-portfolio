import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const nameRef= useRef()
  const emailRef= useRef()
  const messageRef= useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irtzksm",
        "template_lhbvsok",
        form.current, 
        "user_9iC6IruVMPuB3IPI2dMAW"
      )
      .then(
        (result) => {
          alert("Thank You For Your Message")
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

  };
  return (
    <div className="container w-100 my-5" id="contact">
      <h1 className="text-center">Get In Touch</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="d-flex flex-column mx-auto w-50"
      >
        <label>Name*</label>
        <input type="text" name="user_name" placeholder="Name" required ref={nameRef} />
        <label>Email*</label>
        <input type="email" name="user_email" placeholder="email" required ref={emailRef}/>
        <label>Message*</label>
        <textarea name="message" placeholder="Message" required ref={messageRef}/>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
