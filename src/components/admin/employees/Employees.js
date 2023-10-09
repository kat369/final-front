import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Employees() {

  const navigate = useNavigate();


  const [empdata, setempdata] = useState([]);
  useEffect(() => {
    loadData()
  }, [])


  let loadData = async () => {
    try {
      let empdatum = await axios.get(`http://localhost:3100/allusers`);

      console.log(empdatum)
      setempdata(empdatum.data);
    } catch (error) {
      console.log(error)
    }
  }
  const handledelete = async (id) => {



    try {
      let projectData = await axios.post(`http://localhost:3100/setdeleteuser/${id}`);

      if (projectData.status == 200) {
        loadData()
        navigate(`/home/employees`)


      }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Team Members</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Team Details</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <button type="button" onClick={() => navigate('/home/employees/createuser')} class="btn btn-primary"><i class="bi bi-person-plus"></i> &nbsp;Add Team Members</button>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Details</h5>
                  {/* Table with stripped rows */}
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Position</th>

                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>

                      {

                        empdata.map((user,i) => {
                          return (
                            <tr>
                              <th scope="row">{i+1}</th>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.position}</td>
                              <td><button onClick={() => { handledelete(user._id) }}  type="button" class="btn btn-danger">Delete</button></td>
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

export default Employees