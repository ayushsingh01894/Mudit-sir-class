import {Link} from "react-router-dom";

function AdminPanel() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/admin">
            Admin Panel
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link active" to="/dashbord">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/employees">
                  Employees
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/attendance">
                  Attendance
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/leave">
                  Leave
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Logout
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      <div className="container mt-4">
        <h2>Welcome to Admin Panel</h2>
        <p>Manage employees, attendance and leave.</p>
      </div>
    </>
  );
}

export default AdminPanel;