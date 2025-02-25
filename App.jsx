//Json server acting as a "Dummy Server".
//! Object Way

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import ViewAll from './ViewAll'
import PageNotFound from './PageNotFound'
import UpdateStu from './UpdateStu'
import { Toaster } from 'react-hot-toast'

const routing=createBrowserRouter([
  {
  path:"/",
  element:<Layout/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"/viewAll",
      element:<ViewAll/>
    },
    {
      path:"/edit/:id",
      element:<UpdateStu/>
    },
    {
      path:"*",
      element:<PageNotFound/>
    }
  ]
  }

])

const App = () => {
  return (
    <> 
    <div><Toaster/></div>
    <RouterProvider router={routing}/>
    </>
  )
}

export default App

//! slug-->Extra extention(parameter) given to the path,slug value change dynamically