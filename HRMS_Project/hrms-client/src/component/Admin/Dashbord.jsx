import { useState } from "react";

function Dashbord() {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
  });

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ayush Singh",
      email: "ayush@example.com",
      department: "Engineering",
      position: "Senior Developer",
      joinDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Prince",
      email: "prince@example.com",
      department: "HR",
      position: "HR Manager",
      joinDate: "2021-05-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Shivam",
      email: "shivam@example.com",
      department: "Sales",
      position: "Sales Executive",
      joinDate: "2022-09-10",
      status: "Active",
    },
    {
      id: 4,
      name: "Neeraj",
      email: "neeraj@example.com",
      department: "Marketing",
      position: "Marketing Lead",
      joinDate: "2023-03-05",
      status: "Active",
    },
  ]);

  const stats = [
    {
      label: "Total Employees",
      value: employees.length,
      icon: "👥",
      color: "#667eea",
    },
    {
      label: "Active Today",
      value: employees.filter((e) => e.status === "Active").length,
      icon: "✓",
      color: "#10b981",
    },
    {
      label: "Departments",
      value: new Set(employees.map((e) => e.department)).size,
      icon: "🏢",
      color: "#f59e0b",
    },
    { label: "Total Salary", value: "$250K", icon: "💰", color: "#8b5cf6" },
  ];
  return (
    <>
      <section className="stats-section">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            style={{ borderTopColor: stat.color }}
          >
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
            </div>
          </div>
        ))}
      </section>

      <section className="employees-section">
        <div className="section-header">
          <h2>Manage Employees</h2>
          <button
            className="btn-add-employee"
            onClick={() => setShowAddEmployee(!showAddEmployee)}
          >
            + Add Employee
          </button>
        </div>

        {showAddEmployee && (
          <div className="add-employee-form">
            <h3>Add New Employee</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  formData.name &&
                  formData.email &&
                  formData.department &&
                  formData.position
                ) {
                  const newEmployee = {
                    id: employees.length + 1,
                    name: formData.name,
                    email: formData.email,
                    department: formData.department,
                    position: formData.position,
                    joinDate: new Date().toISOString().split("T")[0],
                    status: "Active",
                  };
                  setEmployees([...employees, newEmployee]);
                  setFormData({
                    name: "",
                    email: "",
                    department: "",
                    position: "",
                  });
                  setShowAddEmployee(false);
                }
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="department">Department *</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="HR">HR</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position *</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    placeholder="Enter position"
                    required
                  />
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Add Employee
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowAddEmployee(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="employees-table-wrapper">
          <table className="employees-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Position</th>
                <th>Join Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="employee-name">
                      <div className="name-cell">
                        <img
                          src={`https://i.pravatar.cc/150?img=${employee.id}`}
                          alt={employee.name}
                        />
                        <span>{employee.name}</span>
                      </div>
                    </td>
                    <td>{employee.email}</td>
                    <td>{employee.department}</td>
                    <td>{employee.position}</td>
                    <td>{employee.joinDate}</td>
                    <td>
                      <span
                        className={`status-badge status-${employee.status.toLowerCase()}`}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-edit">Edit</button>
                        <button
                          className="btn-delete"
                          onClick={() =>
                            setEmployees(
                              employees.filter((emp) => emp.id !== employee.id),
                            )
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    No employees found. Add one to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
export default Dashbord;
