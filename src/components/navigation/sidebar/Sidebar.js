import React, { useContext } from 'react'
import './Sidebar.css'
import UserContext from '../../../UserContext'
import { Link } from 'react-router-dom'

function Sidebar() {
  const userContext = useContext(UserContext)
  const userdata = localStorage.getItem("user")
  const datum = JSON.parse(userdata)
  return (
    <>
    {datum.isAdmin === true ?
  
  <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <Link to={"/home/admindashboard"} className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </Link>
      <Link to={"/home/employees"} className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Team Members</span>
      </Link>
      <Link to={"/home/createproject"} className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Create New Projects</span>
      </Link>
      <Link to={"/home/liveprojects"} className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Live Projects</span>
      </Link>
      <Link to={"/home/completedprojects"} className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Completed Projects</span>
      </Link>
    </li> </ul>
    
</aside> : <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
    <Link to={"/home/userdashboard"} className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>My Dashboard</span>
      </Link>
      <Link to={"/home/mytasks"} className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Tasks</span>
      </Link>
    </li> </ul>
    
</aside>
  
  }
 


  </>
  )
}

export default Sidebar