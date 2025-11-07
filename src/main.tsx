import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("#root introuvable dans index.html");

createRoot(rootEl).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
