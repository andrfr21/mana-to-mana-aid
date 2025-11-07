import "./index.css"; // ou "./globals.css" selon ton projet
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "@/context/AuthProvider";

import Index from "@/pages/Index";
import Donor from "@/pages/Donor";
import Beneficiary from "@/pages/Beneficiary";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/donateur", element: <Donor /> },
  { path: "/beneficiaire", element: <Beneficiary /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
