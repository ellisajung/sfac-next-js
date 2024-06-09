import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Publish from "./pages/Publish";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/publish",
    element: <Publish />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
