import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from '../Error-Folder/Error'
import DashboardLayout from '../Layouts/DashboardLayout'
import PurchaseList from '../Purchase/PurchaseList'

function Router() {
    const routes = createBrowserRouter([{
        path:"/",
        element : <DashboardLayout/>,
        errorElement : <Error/>,
        children : [
          {
            index:true,
            element : <PurchaseList/>
          }
        ]

    }])
  return (
    <>
    </>
  )
}

export default routes