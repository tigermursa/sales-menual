import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SalesManual from "./Components/SalesManual/SalesManual.jsx";
import List from "./Components/SalesManual/List/List.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SalesManual />,
  },
  {
    path: "/list",
    element: <List></List>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
