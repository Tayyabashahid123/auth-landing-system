import { Link } from "react-router-dom";
import "../styles/AuthForm.css";

export default function Verification() {

  return (
    <div className="Auth-page">
        <div className="Auth">
            <h2>Email Verification ✉️</h2>
            <span>
                We’ve sent a verification link to your email address. <br />
                Please check your inbox and click on the link to verify your account.
            </span>

            <Link>
            <button className="authButton">Resend Verification</button>
            </Link>
        </div>
    </div>
  );
}
