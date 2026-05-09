import Sidebar from "../components/layout/Sidebar";

import Navbar from "../components/layout/Navbar";

import { Outlet } from "react-router-dom";

import CommandMenu from "../components/dashboard/CommandMenu";

const MainLayout = () => {
  return (
    <div
      className="
      relative

      min-h-screen

      overflow-hidden

      bg-slate-100
      dark:bg-[#020617]

      transition-colors
      duration-300
    "
    >
      {/* BACKGROUND GRID */}
      <div
        className="
        absolute
        inset-0

        opacity-[0.03]
        dark:opacity-[0.05]

        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        [background-size:60px_60px]

        pointer-events-none
      "
      />

      {/* TOP GLOW */}
      <div
        className="
        absolute
        top-[-220px]
        left-[-120px]

        w-[520px]
        h-[520px]

        bg-cyan-500/10

        blur-[140px]

        rounded-full

        pointer-events-none
      "
      />

      {/* BOTTOM GLOW */}
      <div
        className="
        absolute
        bottom-[-240px]
        right-[-140px]

        w-[520px]
        h-[520px]

        bg-violet-500/10

        blur-[140px]

        rounded-full

        pointer-events-none
      "
      />

      {/* CENTER GLOW */}
      <div
        className="
        absolute
        top-[35%]
        left-[40%]

        w-[300px]
        h-[300px]

        bg-blue-500/5

        blur-[120px]

        rounded-full

        pointer-events-none
      "
      />

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main
        className="
        relative
        z-10

        lg:ml-[292px]

        min-h-screen

        px-3
        sm:px-4
        lg:px-5

        pt-3
        pb-6
      "
      >
        {/* CONTAINER */}
        <div
          className="
          w-full
          max-w-[1800px]

          mx-auto
        "
        >
          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <div
            className="
            mt-5

            animate-in
            fade-in
            duration-500
          "
          >
            <Outlet />
          </div>
        </div>
      </main>

      {/* COMMAND MENU */}
      <CommandMenu />
    </div>
  );
};

export default MainLayout;