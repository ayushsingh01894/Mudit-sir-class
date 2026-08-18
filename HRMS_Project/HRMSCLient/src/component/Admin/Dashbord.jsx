import "./Dashbord.css";
import { Link } from "react-router-dom";

function Dashbord() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-content">
            <h1>Reports & Analytics</h1>
            <p>Track performance metrics and insights</p>
          </div>
          <Link to="/adminpanel" className="btn-back">
            ← Back to Admin
          </Link>
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Total Employees</h3>
              <span className="kpi-icon">👥</span>
            </div>
            <div className="kpi-body">
              <p className="kpi-value">245</p>
              <p className="kpi-metric">+12 new this month</p>
            </div>
            <div className="kpi-footer">
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Attendance Rate</h3>
              <span className="kpi-icon">📊</span>
            </div>
            <div className="kpi-body">
              <p className="kpi-value">92.5%</p>
              <p className="kpi-metric">Present today</p>
            </div>
            <div className="kpi-footer">
              <div className="progress-bar success">
                <div className="progress" style={{ width: "92.5%" }}></div>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Leave Balance</h3>
              <span className="kpi-icon">🏖️</span>
            </div>
            <div className="kpi-body">
              <p className="kpi-value">156</p>
              <p className="kpi-metric">Available days</p>
            </div>
            <div className="kpi-footer">
              <div className="progress-bar warning">
                <div className="progress" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Departments</h3>
              <span className="kpi-icon">🏢</span>
            </div>
            <div className="kpi-body">
              <p className="kpi-value">8</p>
              <p className="kpi-metric">Active departments</p>
            </div>
            <div className="kpi-footer">
              <div className="progress-bar info">
                <div className="progress" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card">
            <h2>Monthly Attendance Trend</h2>
            <div className="chart-placeholder">
              <div className="chart-bar" style={{ height: "60%" }}></div>
              <div className="chart-bar" style={{ height: "75%" }}></div>
              <div className="chart-bar" style={{ height: "88%" }}></div>
              <div className="chart-bar" style={{ height: "92%" }}></div>
              <div className="chart-bar" style={{ height: "85%" }}></div>
              <div className="chart-bar" style={{ height: "95%" }}></div>
            </div>
            <p className="chart-note">Jan - Jun 2024</p>
          </div>

          <div className="chart-card">
            <h2>Department Distribution</h2>
            <div className="dept-list">
              <div className="dept-item">
                <span className="dept-name">IT</span>
                <div className="dept-bar" style={{ width: "30%" }}>
                  <span>45 employees</span>
                </div>
              </div>
              <div className="dept-item">
                <span className="dept-name">HR</span>
                <div className="dept-bar" style={{ width: "15%" }}>
                  <span>25 employees</span>
                </div>
              </div>
              <div className="dept-item">
                <span className="dept-name">Sales</span>
                <div className="dept-bar" style={{ width: "25%" }}>
                  <span>38 employees</span>
                </div>
              </div>
              <div className="dept-item">
                <span className="dept-name">Operations</span>
                <div className="dept-bar" style={{ width: "20%" }}>
                  <span>32 employees</span>
                </div>
              </div>
              <div className="dept-item">
                <span className="dept-name">Finance</span>
                <div className="dept-bar" style={{ width: "12%" }}>
                  <span>20 employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Table */}
        <div className="performance-section">
          <h2>Top Performers</h2>
          <table className="performance-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Attendance %</th>
                <th>Projects</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="employee-name">Sarah Johnson</td>
                <td>IT</td>
                <td>
                  <span className="badge success">98%</span>
                </td>
                <td>12</td>
                <td>
                  <span className="rating">⭐⭐⭐⭐⭐</span>
                </td>
              </tr>
              <tr>
                <td className="employee-name">Michael Chen</td>
                <td>Sales</td>
                <td>
                  <span className="badge success">95%</span>
                </td>
                <td>8</td>
                <td>
                  <span className="rating">⭐⭐⭐⭐⭐</span>
                </td>
              </tr>
              <tr>
                <td className="employee-name">Emma Davis</td>
                <td>HR</td>
                <td>
                  <span className="badge success">96%</span>
                </td>
                <td>5</td>
                <td>
                  <span className="rating">⭐⭐⭐⭐</span>
                </td>
              </tr>
              <tr>
                <td className="employee-name">John Doe</td>
                <td>Finance</td>
                <td>
                  <span className="badge warning">85%</span>
                </td>
                <td>10</td>
                <td>
                  <span className="rating">⭐⭐⭐⭐</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
}

export default Dashbord;