import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'

import './Login.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import UserContext from '../../UserContext';

function Login() {
    const userContext = useContext(UserContext)
    let navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })







    const handleLogin = async (e) => {
       
        e.preventDefault()

        const data = new FormData(e.target)
        const values = Object.fromEntries(data.entries())


        try {
            let userData = await axios.post('http://localhost:3100/login', values);
            const datum = JSON.stringify(userData.data)
            window.localStorage.setItem("user", datum)
            if (userData.status == 200) {

               

                if (userData.data.isAdmin === true) {
                    navigate("/home/admindashboard")
                } else {
                    navigate("/home/userdashboard")
                }

                window.localStorage.setItem("app-token", userData.data.token)
            }
         
            console.log(userData)
            userContext.setUser(userData.data)
            console.log(userContext.user)
            
            
        } catch (error) {
            console.log(error)
        }

    }

    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            


                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a

                                        className="logo d-flex align-items-center w-auto"
                                    >
                                        <img src={logo} alt="" />
                                        <span className="d-none d-lg-block">NiceAdmin</span>
                                    </a>
                                </div>
                                {/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Login to Your Account
                                            </h5>
                                            <p className="text-center small">
                                                Enter your username &amp; password to login
                                            </p>
                                        </div>
                                        <form className="row g-3 needs-validation" onSubmit={handleLogin}>
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">
                                                    Username
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">
                                                        @
                                                    </span>
                                                    <input

                                                        class="form-control"
                                                        name="email"
                                                        onChange={onChange}
                                                        type="email"
                                                        placeholder="email"
                                                        required

                                                    />

                                                </div>

                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">
                                                    Password
                                                </label>

                                                <input

                                                    class="form-control"
                                                    name="password"
                                                    onChange={onChange}
                                                    type="password"
                                                    placeholder="password"
                                                    required
                                                />

                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">
                                                    Login
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    Issue with Login?{" "}
                                                    <a >Contact Admin</a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Login




