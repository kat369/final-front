import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ProjectInfo() {
  const { id, status } = useParams()
  const navigate = useNavigate();

  const [projectdata, setprojectdata] = useState({});
  const [taskdata, settaskdata] = useState([]);
  useEffect(() => {
    loadData()
  }, [])


  let loadData = async () => {
    try {
      let projectdatum = await axios.get(`http://localhost:3100/getproject/${id}`);

      console.log(projectdatum.data)
      setprojectdata(projectdatum.data);
      settaskdata(projectdatum.data.task);

    } catch (error) {
      console.log(error)
    }
  }

  const handledelete = async () => {



    try {
      let projectData = await axios.post(`http://localhost:3100/setdeleteproject/${projectdata._id}`);

      if (projectData.status == 200) {
        navigate(`/home/liveprojects`)


      }

    } catch (error) {
      console.log(error)
    }
  };

  const handlesubmit = async () => {



    try {
      let projectData = await axios.post(`http://localhost:3100/setcompleteproject/${projectdata._id}`);

      if (projectData.status == 200) {
        navigate(`/home/liveprojects`)


      }

    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Project Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">View Project</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-8 mb-3">
              <button type="button" onClick={() => navigate(`/home/createtask/${projectdata._id}`)} class="btn btn-primary"><i class="bi bi-plus"></i> &nbsp;Add Task</button>
            </div>
            {
              status == 1 ? <div className="col-lg-4 mb-3">
                <button type="button" onClick={() => { handlesubmit() }} class="btn btn-success"><i class="bi bi-plus"></i> &nbsp;Completed</button>
                <button type="button" onClick={() => { handledelete() }} class="btn btn-danger"><i class="bi bi-plus"></i> &nbsp;Delete</button>
              </div> : <div className="col-lg-4 mb-3">
                <button type="button" onClick={() => { handledelete() }} class="btn btn-danger"><i class="bi bi-plus"></i> &nbsp;Delete</button>
              </div>
            }
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{projectdata.tittle}</h5>
                  {/* Table with stripped rows */}
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Task Tittle</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Deadline</th>

                        <th scope="col">Status</th>
                        <th scope="col">Assigned to</th>

                        <th scope="col">Edit</th>

                      </tr>
                    </thead>
                    <tbody>


                      {

                        taskdata.map((data, i) => {
                          return (
                            <tr>
                              <td>{data.task_name}</td>
                              <td>{data.from}</td>
                              <td>{data.to}</td>

                              <td>{data.status}</td>
                              <td>{data.asigned_to}</td>
                              <td><button type="button" onClick={() => navigate(`/home/liveprojects/viewproject/edittask/${projectdata._id}/${data.task_id}`)} class="btn btn-warning">Edit</button></td>
                            </tr>

                          )
                        })
                      }


                    </tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>

            </div>


          </div>
        </section>


      </main>
    </>
  )
}

export default ProjectInfo