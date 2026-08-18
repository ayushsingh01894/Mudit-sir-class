import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleRememberMeChange = (e) => {
    const value = e.target.checked;
    setRememberMe(value);
    console.log("Remember Me:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=== LOGIN FORM SUBMITTED ===");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    console.log("=====================================");
  };

  return (
    <div className="login-page">
      <div className="login-shell">
        <div className="login-visual">
          <div className="brand-badge">HRMS</div>
          <h1>Welcome back</h1>
          <p>
            Manage employees, attendance, and performance from one intelligent
            dashboard.
          </p>

          <ul className="feature-list">
            <li>Employee dashboard</li>
            <li>Attendance tracking</li>
            <li>Fast approvals</li>
          </ul>
        </div>

        <div className="login-card">
          <div className="login-card-header">
            <p className="eyebrow">Access portal</p>
            <h2>Login</h2>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
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

            <div className="form-row">
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="primary-btn">
              Login
            </button>

            <p className="signup-text">
              Don&apos;t have an account? <Link to="/signup">Create one</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;