import "./Login.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col col-md-3"></div>

          <div className="col">
            <div className="card">

              <div className="card-header">
                Login
              </div>

              <div className="card-body">

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
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

                <Link to="/signup">
                  Don't have an account
                </Link>

                <div className="btn-style">
                  <button type="button" className="btn btn-success">
                    Login
                  </button>
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

export default Login;