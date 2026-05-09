import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";
import Login from "../pages/Login";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* PROTECTED DASHBOARD */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route path="users" element={<Users />} />

          <Route path="orders" element={<Orders />} />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;