import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/styles.scss'
//import * as bootstrap from 'bootstrap'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import AboutMePage from "./pages/AboutMePage.jsx"
import PortfolioPage from "./pages/PortfolioPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import ResumePage from "./pages/ResumePage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/aboutme/",
        element: <AboutMePage />,
      },
      {
        path: "/portfolio/",
        element: <PortfolioPage />,
      },
      {
        path: "/contact/",
        element: <ContactPage />,
      },
      {
        path: "/Resume/",
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
