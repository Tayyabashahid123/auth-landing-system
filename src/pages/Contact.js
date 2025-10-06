import "../styles/Contact.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!name.trim()) formErrors.name = "Please enter your full name.";
    if (!email.trim()) formErrors.email = "Please enter your email.";
    else if (!validateEmail(email)) formErrors.email = "Please enter a valid email address.";
    if (!message.trim()) formErrors.message = "Please enter your message.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Contact form submitted!");
      navigate("/thank-you");
    }
  };

  return (
    <div className="contact-page">
        <div className="Contact">
            <h2>Contact Us 📬</h2>
            <span>
            We’d love to hear from you! Please reach out with any questions or feedback.
            </span>

            <form onSubmit={handleSubmit} noValidate>
            <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
                className="contact-textarea"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit" className="ContactBtn">Send Message</button>
            </form>
        </div>
    </div>
  );
}
