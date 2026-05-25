import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';


 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader:()=>fetch('appsData.json'),
            path: "/",
            Component: Home
        },
        {
          path: "/allApps",
          loader: ()=>fetch('appsData.json'),
          Component: AllApps
        },
        {
          path: "/appDetails/:id",
           loader: ()=>fetch('appsData.json'), Component: AppDetails
        }
        
    ]
  },
]);