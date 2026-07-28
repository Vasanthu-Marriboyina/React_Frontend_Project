import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from '../Error-Folder/Error'

function Router() {
    const routes = createBrowserRouter([{
        path:"/",
        element : <App/>,
        errorElement : <Error/>

    }])
  return (
    <>
    </>
  )
}

export default routes