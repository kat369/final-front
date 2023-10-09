import React from 'react'
import './Home.css'
import Topbar from '../navigation/topbar/Topbar'
import Sidebar from '../navigation/sidebar/Sidebar'

import { Outlet } from "react-router-dom";


function Home() {
  return (
   <>
    <Topbar/>
    <Sidebar/>
    <div className="contentSpacex"> 
    
    <Outlet/>

    </div>
   </>
  )
}

export default Home