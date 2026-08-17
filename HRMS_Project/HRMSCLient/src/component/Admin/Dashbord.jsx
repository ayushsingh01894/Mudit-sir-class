function Dashbord() {
  return (
    <>
      <div className="container mt-4">

        <h2>Dashboard</h2>

        <div className="row mt-4">

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Employees</h5>
                <h3>120</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Present Today</h5>
                <h3>105</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">On Leave</h5>
                <h3>10</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Departments</h5>
                <h3>8</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashbord;