import "./sign.css";
import {Link} from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col col-md-3"></div>

          <div className="col">
            <div className="card">

              <div className="card-header">
                Signup
              </div>

              <div className="card-body">

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="youremail@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="terms"
                  >
                    {" "}I agree to terms and conditions
                  </label>
                </div>

                <div className="btn-style">
                  <button type="button" className="btn btn-success">
                    Signup
                  </button>
                </div>

                <div className="mt-3">
                  <Link to="/login">
                    Already have an account? Login
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <div className="col col-md-3"></div>

        </div>
      </div>
    </>
  );
}

export default Signup;