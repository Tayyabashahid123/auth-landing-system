import "../styles/Contact.css";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="Contact-page">
        <div className="Contact">
            <h2>Thank You 💌</h2>
            <span>
            Your message has been sent successfully! <br />
            We’ll get back to you as soon as possible.
            </span>

            <div style={{ marginTop: "30px" }}>
            <Link to="/" className="contactButtonLink">
                Back to Home
            </Link>
            </div>
        </div>
      
    </div>
  );
}
