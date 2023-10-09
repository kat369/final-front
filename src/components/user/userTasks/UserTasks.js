import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import UserContext from '../../../UserContext'
function UserTasks() {
    const { id, status } = useParams()
    const navigate = useNavigate();
    const userContext = useContext(UserContext)
    const [projectdata, setprojectdata] = useState([]);
    const [taskdata, settaskdata] = useState([]);


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
                    <h1>All Projects</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">My Tasks</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row">

                        {
                            projectdata.map((project) => {
                                return (
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{project.tittle}</h5>
                                                {/* Table with stripped rows */}
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Task Tittle</th>
                                                            <th scope="col">Description</th>
                                                            <th scope="col">Created At</th>
                                                            <th scope="col">Deadline</th>

                                                            <th scope="col">Status</th>
                                                           

                                                            <th scope="col">Edit</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {

                                                            project.task.map((task, i) => {
                                                                

                                                                      if(userContext.user._id == task.asigned_id ){
                                                                        return (  <tr>
                                                                        <td>{task.task_name}</td>
                                                                        <td>{task.description}</td>
                                                                        <td>{task.from}</td>
                                                                        <td>{task.to}</td>

                                                                        <td>{task.status}</td>
                                                                       
                                                                        <td><button type="button" onClick={() => navigate(`/home/mytasks/edittask/${project._id}/${task.task_id}`)} class="btn btn-warning">Edit</button></td>
                                                                    </tr>
                                                                     )
                                                                      }else{

                                                                      }


                                                                   

                                                               
                                                            })
                                                        }



                                                    </tbody>
                                                </table>
                                                {/* End Table with stripped rows */}
                                            </div>
                                        </div>

                                    </div>

                                )
                            })
                        }

                    </div>
                </section>


            </main>
        </>
    )
}

export default UserTasks