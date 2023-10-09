import React from "react";
import "./CreateEmployees.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEmployees() {
  let navigate = useNavigate();
  const [data, setdata] = useState({});

  const [namefocus, setnamefocus] = useState(false);
  const [positionfocus, setpositionfocus] = useState(false);
  const [emailfocus, setemailfocus] = useState(false);
  const [passfocus, setpassfocus] = useState(false);
  const [cpassfocus, setcpassfocus] = useState(false);

  const focuschange = () => {
    setnamefocus(true);
    setpositionfocus(true);
    setemailfocus(true);
    setpassfocus(true);
    setcpassfocus(true)
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    data.status = "live";
    data.isAdmin = false;
    console.log(data)
    try {
      let userData = await axios.post(
        "http://localhost:3100/createuser",
        data
      );

      if (userData.status == 200) {
        navigate(`/home/employees`);
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <main id="main" class="main">
        <div className="awesome">
          <div className="pagetitle">
            <h1>Create-User</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Create</li>
              </ol>
            </nav>
          </div>

          <section className="section">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 ">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Create New User</h5>

                    <form onSubmit={handlesubmit}>
                      <div class="col-12 mb-3">
                        <label for="inputNanme4" class="form-label">
                          User-Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={data.name || ""}
                          required
                          onChange={(e) => {
                            setdata({
                              ...data,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={() => {
                            setnamefocus(true);
                          }}
                          focused={namefocus.toString()}
                          class="form-control"
                          id="inputNanme4"
                        />
                        <span className="span">required</span>
                      </div>

                      <div class="col-12 mb-3">
                        <label for="inputNanme4" class="form-label">
                          Position
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={data.position || ""}
                          required
                          onChange={(e) => {
                            setdata({
                              ...data,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={() => {
                            setpositionfocus(true);
                          }}
                          focused={positionfocus.toString()}
                          class="form-control"
                          id="inputNanme4"
                        />
                        <span className="span">required</span>
                      </div>

                      <div class="col-12 mb-3">
                        <label for="inputNanme4" class="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={data.email || ""}
                          required
                          onChange={(e) => {
                            setdata({
                              ...data,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={() => {
                            setemailfocus(true);
                          }}
                          focused={emailfocus.toString()}
                          class="form-control"
                          id="inputNanme4"
                        />
                        <span className="span">required</span>
                      </div>

                      <div class="col-12 mb-3">
                        <label for="inputNanme4" class="form-label">
                          Password
                        </label>
                        <input
                          type="text"
                          name="password"
                          value={data.password || ""}
                          required
                          onChange={(e) => {
                            setdata({
                              ...data,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={() => {
                            setpassfocus(true);
                          }}
                          focused={passfocus.toString()}
                          class="form-control"
                          id="inputNanme4"
                        />
                        <span className="span">required</span>
                      </div>

                     

                      <div class="text-center">
                        <button
                          type="submit"
                          onClick={focuschange}
                          class="btn btn-primary"
                        >
                          Create
                        </button>
                        &nbsp;
                        {/* <button type="reset" class="btn btn-secondary">Reset</button> */}
                      </div>
                    </form>
                    {/* End General Form Elements */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default CreateEmployees