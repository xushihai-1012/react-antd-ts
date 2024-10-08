import React from 'react'
import ReactDOM from 'react-dom/client'
import "normalize.css";
// import App from '@/App'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./router";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
