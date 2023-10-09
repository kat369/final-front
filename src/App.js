import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

import { UserProvider } from "./UserContext";
import CreateProject from "./components/admin/createProject/CreateProject";
import AdminDashBoard from "./components/admin/adminDashboard/AdminDashBoard";
import Employees from "./components/admin/employees/Employees";
import LiveProjects from "./components/admin/liveProjects/LiveProjects";
import CompletedProjects from "./components/admin/completedProjects/CompletedProjects";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeDashBoard from "./components/user/employeeDashboard/EmployeeDashBoard";
import ProjectInfo from "./components/admin/projectInfo/ProjectInfo";
import CreateTask from "./components/admin/createTask/CreateTask";
import EditTask from "./components/admin/editTask/EditTask";
import CreateEmployees from "./components/admin/createEmployees/CreateEmployees";
import UserTasks from "./components/user/userTasks/UserTasks";
import EditUserTask from "./components/user/editUserTask/EditUserTask";

function App() {
  

  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserProvider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="userdashboard" element={<EmployeeDashBoard />} />
            <Route path="admindashboard" element={<AdminDashBoard />} />
            <Route path="mytasks" element={<UserTasks />} />
            <Route path="employees" element={<Employees />} />
            <Route path="createproject" element={<CreateProject />} />
            <Route path="liveprojects" element={<LiveProjects />} />
            <Route path="completedProjects" element={<CompletedProjects />} />
            <Route
              path="liveprojects/viewproject/:id/:status"
              element={<ProjectInfo />}
            />
            <Route
              path="completedprojects/viewproject/:id/:status"
              element={<ProjectInfo />}
            />
            <Route
              path="liveprojects/viewproject/edittask/:id/:taskid"
              element={<EditTask />}
            />
             <Route
              path="mytasks/edittask/:id/:taskid"
              element={<EditUserTask/>}
            />
            <Route path="createtask/:id" element={<CreateTask />} />
            <Route path="employees/createuser" element={<CreateEmployees />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
