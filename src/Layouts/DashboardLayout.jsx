import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <>
    <div className='container-fluid p-0'>
        <div className='row g-0'>
            <div className='col-md-3 col-lg-2 bg-dark min-vh-100'>
                <Sidebar/>
            </div>
            <div className='col-md-9 col-lg-10'>
                <Navbar/>
                <div className='p-4'>
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DashboardLayout