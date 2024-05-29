import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
