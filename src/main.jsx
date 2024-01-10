import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Statistics from './NavComponent/Statistics/Statistics';
import Applied from './NavComponent/AppliedJobs/Applied';
import Blogs from './NavComponent/Blogs/Blogs';
import Details from './Component/FeaturedJobsDetails/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied-jobs",
        loader: ()=> fetch("/jobs.json"),
        element: <Applied></Applied>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/details/:detailId",
        loader: ()=> fetch("/jobs.json") ,
        element: <Details></Details>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
