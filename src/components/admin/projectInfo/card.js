<div className="col-lg-6">
      
<div
className={
  data.status === "Not Started"
    ? "card mb-4 border-primary"
    : data.status === "Completed"
    ? "card mb-4 border-success"
    : data.status === "In Progress"
    ? "card mb-4 border-warning"
    : "card mb-4 border-danger"
}
>
<div className="card-body">
  <h5 className="card-title">task name</h5>
  <h6 className="card-subtitle mb-1 text-muted ">
    Priority : high
  </h6>
  <p className="card-text">my project</p>
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h6 className="card-subtitle mb-3 ">
          To : kathir
        </h6>
      </div>
      <div className="col-6">
        <h6
          className={
            data.status === "Not Started"
              ? "card-subtitle mb-3 text-primary"
              : data.status === "Completed"
              ? "card-subtitle mb-3 text-success"
              : data.status === "In Progress"
              ? "card-subtitle mb-3 text-warning"
              : "card-subtitle mb-3 text-danger"
          }
        >
          Status : completed
        </h6>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h6 className="card-subtitle mb-1">On : aug27</h6>
      </div>
      <div className="col-6">
        <h6 className="card-subtitle mb-1">Till : aug30</h6>
      </div>
    </div>
  </div>
</div>
<div className={
  data.status === "Not Started"
    ? "card-footer d-flex align-items-center justify-content-between bg-primary"
    : data.status === "Completed"
    ? "card-footer d-flex align-items-center justify-content-between bg-success"
    : data.status === "In Progress"
    ? "card-footer d-flex align-items-center justify-content-between bg-warning"
    : "card-footer d-flex align-items-center justify-content-between bg-danger"
}>


  <div className="small text-white">
    <i className="fas fa-angle-right"></i>
  </div>
</div>
</div>
  {/* End Table with stripped rows */}
</div>
