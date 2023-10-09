import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function LiveProjects() {



  const navigate = useNavigate();


  const [projectdata, setprojectdata] = useState([]);
  useEffect(() => {
    loadData()
  }, [])


  let loadData = async () => {
    try {
      let projectdatum = await axios.get(`http://localhost:3100/liveprojects`);

      console.log(projectdatum)
      setprojectdata(projectdatum.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Total Projects</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Live Projects</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">

            <div className="col-lg-12 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Project Details</h5>
                  {/* Table with stripped rows */}
                  <table className="table table-striped">
                    <thead>
                      <tr>

                        <th scope="col">Project Tittle</th>
                        <th scope="col">description</th>
                        <th scope="col">View</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {
                        projectdata.map((project, i) => {
                          return (
                            <tr>

                              <td>{project.tittle}</td>
                              <td>{project.description}</td>
                              <td><button type="button" onClick={() => navigate(`/home/liveprojects/viewproject/${project._id}/1`)} class="btn btn-success">View</button></td>
                             
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

export default LiveProjects