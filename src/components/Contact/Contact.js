import React from "react";

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="contact__left_col">
        <h1 className="contact__pri_header">Contact Us</h1>
        <h2 className="contact__sec_header">Ask Us Anything</h2>
        <p>Fill in the adjacent form and someone will get back to you as soon as
          possible.</p>
        <p> Please note: We operate from 9am - 5:30pm Monday - Friday.</p>
        <p>Phone Number: <a href="tel:7049999999">(704) 999-9999</a></p>
        <p>Email: <a href="mailto:duragsrus@gmail.com">duragsrus@gmail.com</a></p>
      </div>
      <form className="contact__form" method="POST" action="https://duragsrus-220620.appspot.com/contact" required>
        <label htmlFor="cusName">Name:</label>
        <input id="cusName" type="text" name="customerName" />

        <label htmlFor="cusEmail">Email:</label>
        <input id="cusEmail" type="email" name="customerEmail" />

        <label htmlFor="cusPhone">Phone Number:</label>
        <input id="cusPhone" type="tel" name="customerPhoneNum" />

        <label htmlFor="cusMessage">Message:</label>
        <textarea id="cusMessage" type="text" name="customerMessage" />

        <input type="submit" id="submitButton" />
      </form>
    </div>
  );
};

export default Contact;
