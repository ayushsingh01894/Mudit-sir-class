import { Link } from "react-router-dom";
import "./AdminPanel.css";

function AdminPanel() {
  return (
    <div className="admin-panel">
      <div className="admin-container">
        {/* Header Section */}
        <div className="admin-header">
          <div className="header-content">
            <h1>Admin Dashboard</h1>
            <p>Manage your organization efficiently</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary">+ Add Employee</button>
            <Link to="/login" className="btn-logout">
              Logout
            </Link>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon employees">👥</div>
            <div className="stat-content">
              <h3>Total Employees</h3>
              <p className="stat-number">245</p>
              <span className="stat-change">+12 this month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon attendance">📋</div>
            <div className="stat-content">
              <h3>Present Today</h3>
              <p className="stat-number">198</p>
              <span className="stat-change">80.8% attendance</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon leave">🏖️</div>
            <div className="stat-content">
              <h3>On Leave</h3>
              <p className="stat-number">12</p>
              <span className="stat-change">5 approved requests</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon pending">⏳</div>
            <div className="stat-content">
              <h3>Pending Approvals</h3>
              <p className="stat-number">8</p>
              <span className="stat-change">3 leave, 5 overtime</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/employees" className="action-btn">
              <span className="action-icon">👥</span>
              <span>Manage Employees</span>
            </Link>
            <Link to="/attendance" className="action-btn">
              <span className="action-icon">✓</span>
              <span>Check Attendance</span>
            </Link>
            <Link to="/leave" className="action-btn">
              <span className="action-icon">📅</span>
              <span>Manage Leave</span>
            </Link>
            <Link to="/dashbord" className="action-btn">
              <span className="action-icon">📊</span>
              <span>View Reports</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">📝</div>
              <div className="activity-details">
                <p className="activity-title">New Leave Request</p>
                <p className="activity-desc">John Doe requested 3 days leave</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">✅</div>
              <div className="activity-details">
                <p className="activity-title">Attendance Marked</p>
                <p className="activity-desc">Ayush singh marked attendance</p>
                <span className="activity-time">4 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">👤</div>
              <div className="activity-details">
                <p className="activity-title">New Employee Added</p>
                <p className="activity-desc">Prince joined the team</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🔄</div>
              <div className="activity-details">
                <p className="activity-title">Overtime Approved</p>
                <p className="activity-desc">Aman overtime request approved</p>
                <span className="activity-time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;