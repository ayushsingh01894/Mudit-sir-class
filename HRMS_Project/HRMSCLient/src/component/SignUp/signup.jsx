import "./sign.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    console.log("Name:", value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    console.log("Email:", value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log("Password:", value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    console.log("Confirm Password:", value);
  };

  const handleTermsChange = (e) => {
    const value = e.target.checked;
    setTerms(value);
    console.log("Terms Agreed:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=== SIGNUP FORM SUBMITTED ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Terms Agreed:", terms);
    console.log("=====================================");
  };

  return (
    <div className="login-page">
      <div className="login-shell">
        <div className="login-visual">
          <div className="brand-badge">HRMS</div>
          <h1>Join Our Team</h1>
          <p>
            Create your account to manage employees, attendance, and performance
            from one intelligent dashboard.
          </p>

          <ul className="feature-list">
            <li>Easy registration</li>
            <li>Secure access</li>
            <li>Instant account setup</li>
          </ul>
        </div>

        <div className="login-card">
          <div className="login-card-header">
            <p className="eyebrow">Create account</p>
            <h2>Sign Up</h2>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="field-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="field-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="field-group">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>

            <div className="form-row">
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  id="terms"
                  checked={terms}
                  onChange={handleTermsChange}
                />
                <span>I agree to terms and conditions</span>
              </label>
            </div>

            <button type="submit" className="primary-btn">
              Sign Up
            </button>

            <p className="signup-text">
              Already have an account? <Link to="/">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;