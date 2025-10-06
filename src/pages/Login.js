import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/AuthForm.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) formErrors.email = "Please enter your email.";
    else if (!email.includes("@") || !email.includes("."))
      formErrors.email = "Enter a valid email address.";

    if (!password) formErrors.password = "Please enter your password.";
    else if (password.length < 8)
      formErrors.password = "Password must be at least 6 characters long.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccess("Login successful! 🎉");
      console.log("Login successful!");
    } else {
      setSuccess("");
    }
  };

  return (
    <>
        <div className="Auth-page">
            <div className="Auth">
                <h2>Welcome Back 👋</h2>
                <span>Log in to continue managing your projects efficiently.</span>

                <form onSubmit={handleLogin} noValidate>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <button type="submit" className="authButton">
                    Login
                </button>
                {success && <p className="success">{success}</p>}
                </form>

                <span>
                Don’t have an account? <Link to="/signup">Sign Up</Link>
                </span>
            </div>
        </div>
    </>
  );
}
