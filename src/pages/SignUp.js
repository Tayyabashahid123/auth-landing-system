import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/AuthForm.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();


    function validateEmail(email) {
      // Basic regex for email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }

    function validatePassword(password) {
      // Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|;:'",.<>/?]).{8,}$/;
      return passwordRegex.test(password);
    }

    const handleSignup = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!name.trim()) formErrors.name = "Please enter your full name.";

    if (!email.trim()) formErrors.email = "Please enter your email.";
    else if (!validateEmail(email))
        formErrors.email = "Enter a valid email address.";

    if (!password) formErrors.password = "Please enter a password.";
    else if (!validatePassword(password))
        formErrors.password =
        "Password must be minimum 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.";

    if (!confirmPassword)
        formErrors.confirmPassword = "Please confirm your password.";
    else if (password !== confirmPassword)
        formErrors.confirmPassword = "Passwords do not match.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
        setSuccess("Signup successful! 🎉");
        console.log("Signup successful!");
        navigate("/verification");
    }
    };


  return (
    <>
        <div className="Auth-page">
            <div className="Auth">
                <h2>Create Account 🌟</h2>
                <span>Join our platform and start your productivity journey today.</span>

                <form onSubmit={handleSignup} noValidate>
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

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                )}

                <button type="submit" className="authButton">
                    Sign Up
                </button>

                {success && <p className="success">{success}</p>}
                </form>

                <span>
                Already have an account? <Link to="/login">Login</Link>
                </span>
            </div>
        </div>
    </>
  );
}
