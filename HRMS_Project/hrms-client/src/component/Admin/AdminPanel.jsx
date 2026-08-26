import "./AdminPanel.css";
import { useState } from "react";
import { Link , outlet} from "react-router-dom";

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="admin-container">
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>HR System</h2>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle Sidebar"
          >
            ☰
          </button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin/dashbord" className="nav-item active">
            <span className="icon">📊</span>
            <span className="label">Dashboard</span>
          </Link>
          <a href="#" className="nav-item">
            <span className="icon">👥</span>
            <span className="label">Employees</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">📅</span>
            <span className="label">Attendance</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">💼</span>
            <span className="label">Projects</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">📈</span>
            <span className="label">Reports</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">⚙️</span>
            <span className="label">Settings</span>
          </a>
        </nav>
        <div className="sidebar-footer">
          <Link to="/" className="logout-btn">
            🚪 Logout
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <h1>Admin Dashboard</h1>
            <p>Welcome back, Admin! Manage your HR operations efficiently.</p>
          </div>
          <div className="header-right">
            <input
              type="text"
              placeholder="Search employees..."
              className="search-box"
            />
            <div className="admin-profile">
              <img src="https://i.pravatar.cc/150?img=1" alt="Admin" />
              <div className="profile-info">
                <p className="admin-name">Admin User</p>
                <p className="admin-role">Administrator</p>
              </div>
            </div>
          </div>
        </header>
      </outlet>
      </main>
    </div>
  );
}
