import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import Layout from "./components/Layout.jsx";
import LogFix from "./pages/logFix/LogFix.jsx";
import DefectFix from "./pages/defectFix/DefectFix.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "log-fix",
        element: <LogFix />,
      },
      {
        path: "defect-fix",
        element: <DefectFix />,
      },
    ],
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
