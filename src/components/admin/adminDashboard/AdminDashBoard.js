import React, { useEffect, useState } from "react";
import "./AdminDashBoard.css";
import { Link } from "react-router-dom";
import axios from "axios";
function AdminDashBoard() {

  const [dashcount, setdashcount] = useState({});
 

  useEffect(() => { 
    loadData();
  }, []);

  let loadData = async () => {
    try {
      let projectdatum = await axios.get(`http://localhost:3100/liveprojects`);


      let count = {
        "notstarted" : 0,
        "inprogress": 0,
        "completed":0,
        "pending":0
      }

      projectdatum.data.map((data) => {
        data.task.map((tasks) => {
          if (tasks.status === "not started") {
            count.notstarted = count.notstarted +1
          } else if (tasks.status === "in progress") {
            count.inprogress = count.inprogress +1
          } else if (tasks.status === "completed") {
            count.completed =count.completed  +1
          } else {
            count.pending =count.pending +1
          }
        });
      });

      setdashcount(count)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">dashboard</li>
            </ol>
          </nav>
        </div>
        <section class="section dashboard">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-xxl-3 col-md-3">
                  <div class="card info-card sales-card">
                    <div class="card-body">
                      <h5 style={{ color: "green" }} class="card-title">
                        Completed Task
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            style={{ color: "green" }}
                            class="bi bi-card-checklist"
                          ></i>
                        </div>
                        <div class="ps-3">
                          <h6>{dashcount.completed}</h6>
                          {/* <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-3 col-md-3">
                  <div class="card info-card sales-card">
                    <div class="card-body">
                      <h5 style={{ color: "red" }} class="card-title">
                        Pending Task
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            style={{ color: "red" }}
                            class="bi bi-exclamation-diamond"
                          ></i>
                        </div>
                        <div class="ps-3">
                          <h6>{dashcount.pending}</h6>
                          {/* <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-3 col-md-3">
                  <div class="card info-card sales-card">
                    <div class="card-body">
                      <h5 style={{ color: "yellow" }} class="card-title">
                        In Progress
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            style={{ color: "yellow" }}
                            class="bi bi-hourglass-split"
                          ></i>
                        </div>
                        <div class="ps-3">
                          <h6>{dashcount.inprogress}</h6>
                          {/* <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-3 col-md-3">
                  <div class="card info-card sales-card">
                    <div class="card-body">
                      <h5 class="card-title">Not Started</h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-card-list"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{dashcount.notstarted}</h6>
                          {/* <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AdminDashBoard;
