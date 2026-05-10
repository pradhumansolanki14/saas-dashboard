import {
  lazy,
  Suspense,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";

/* LAZY PAGES */
const Dashboard = lazy(() =>
  import("../pages/Dashboard")
);

const Analytics = lazy(() =>
  import("../pages/Analytics")
);

const Users = lazy(() =>
  import("../pages/Users")
);

const Orders = lazy(() =>
  import("../pages/Orders")
);

const Settings = lazy(() =>
  import("../pages/Settings")
);

const Login = lazy(() =>
  import("../pages/Login")
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense
      fallback={
  <div
    className="
    fixed
    inset-0

    flex
    items-center
    justify-center

    overflow-hidden

    bg-slate-50
    dark:bg-[#020817]
  "
  >
    {/* GLOW */}
    <div
      className="
      absolute
      w-[320px]
      h-[320px]

      rounded-full

      bg-cyan-500/20

      blur-[120px]

      animate-pulse
    "
    />

    {/* CONTENT */}
    <div
      className="
      relative
      z-10

      flex
      flex-col
      items-center
    "
    >
      {/* SPINNER */}
      <div
        className="
        relative

        w-20
        h-20
      "
      >
        {/* OUTER RING */}
        <div
          className="
          absolute
          inset-0

          rounded-full

          border-[4px]
          border-cyan-500/20
        "
        />

        {/* ANIMATED RING */}
        <div
          className="
          absolute
          inset-0

          rounded-full

          border-[4px]
          border-transparent
          border-t-cyan-500
          border-r-blue-500

          animate-spin
        "
        />

        {/* CENTER */}
        <div
          className="
          absolute
          inset-[18px]

          rounded-full

          bg-gradient-to-br
          from-cyan-500
          to-blue-500

          shadow-lg
          shadow-cyan-500/30
        "
        />
      </div>

      {/* TEXT */}
      <h2
        className="
        mt-8

        text-2xl
        font-bold

        text-slate-900
        dark:text-white
      "
      >
        Loading Dashboard
      </h2>

      <p
        className="
        mt-2

        text-sm

        text-slate-500
        dark:text-slate-400
      "
      >
        Preparing analytics experience...
      </p>
    </div>
  </div>
}
      >
        <Routes>
          {/* LOGIN */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* PROTECTED DASHBOARD */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={<Dashboard />}
            />

            <Route
              path="analytics"
              element={<Analytics />}
            />

            <Route
              path="users"
              element={<Users />}
            />

            <Route
              path="orders"
              element={<Orders />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;