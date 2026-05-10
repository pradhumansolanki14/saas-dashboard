import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiShoppingBag,
  FiSettings,
  FiX,
  FiChevronRight,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useSidebarStore } from "../../store/useSidebarStore";

import Motion from "../common/Motion";

import AppButton from "../ui/AppButton";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FiHome size={20} />,
    badge: null,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: <FiBarChart2 size={20} />,
    badge: "NEW",
  },

  {
    name: "Users",
    path: "/users",
    icon: <FiUsers size={20} />,
    badge: "24K",
  },

  {
    name: "Orders",
    path: "/orders",
    icon: <FiShoppingBag size={20} />,
    badge: "12",
  },

  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings size={20} />,
    badge: null,
  },
];

const Sidebar = () => {
  const { isOpen, closeSidebar } =
    useSidebarStore();

  return (
    <>
      {/* DESKTOP */}
      <div
        className="
        hidden
        lg:block

        fixed
        top-0
        left-0

        h-screen
        w-[280px]

        p-3

        z-50
      "
      >
        <SidebarContent />
      </div>

      {/* MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
              className="
              lg:hidden

              fixed
              inset-0

              bg-black/70
              backdrop-blur-md

              z-40
            "
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={transitions.spring}
              className="
              lg:hidden

              fixed
              top-0
              left-0

              h-screen
              w-[285px]

              p-3

              z-50
            "
            >
              <SidebarContent mobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const SidebarContent = ({
  mobile,
}) => {
  const { closeSidebar } =
    useSidebarStore();

  return (
    <Motion
      variant={animations.fade}
      transition={transitions.smooth}
      className="
      relative

      h-full

      rounded-[38px]

      bg-white/70
      dark:bg-[#071120]/80

      backdrop-blur-3xl

      border
      border-black/5
      dark:border-white/10

      shadow-[0_20px_120px_rgba(0,0,0,0.28)]

      overflow-hidden
    "
    >
      {/* BACKGROUND GLOWS */}
      <div
        className="
        absolute
        top-[-120px]
        left-[-80px]

        w-[240px]
        h-[240px]

        bg-cyan-500/10

        blur-[120px]

        rounded-full
      "
      />

      <div
        className="
        absolute
        bottom-[-140px]
        right-[-100px]

        w-[240px]
        h-[240px]

        bg-violet-500/10

        blur-[120px]

        rounded-full
      "
      />

      {/* SCROLL CONTAINER */}
      <div
        className="
        relative
        z-10

        h-full

        overflow-y-auto

        flex
        flex-col

        px-5
        py-6

        [scrollbar-width:none]
        [-ms-overflow-style:none]
      "
      >
        {/* HIDE SCROLLBAR */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* TOP */}
        <div className="flex items-start justify-between">
          <div>
            {/* LOGO */}
            <div
              className="
              flex
              items-center
              gap-3
            "
            >
             <img
  src={logo}
  alt="Logo"
  className="
  w-12
  h-12

  object-contain

  drop-shadow-[0_10px_30px_rgba(6,182,212,0.25)]
"
/>

              <div>
                <h1
                  className="
                  text-[30px]
                  leading-none
                  font-bold
                  tracking-tight

                  text-slate-900
                  dark:text-white
                "
                >
                  SaaSify
                </h1>

                <p
                  className="
                  mt-1

                  text-sm

                  text-slate-500
                  dark:text-slate-400
                "
                >
                  Enterprise Suite
                </p>
              </div>
            </div>
          </div>

         {/* MOBILE CLOSE */}
{mobile && (
  <button
    onClick={closeSidebar}
    className="
    w-11
    h-11

    rounded-2xl

    bg-black/[0.04]
    dark:bg-white/[0.04]

    border
    border-black/5
    dark:border-white/10

    flex
    items-center
    justify-center

    text-slate-700
    dark:text-slate-300

    transition-all
    duration-300

    hover:bg-black/[0.06]
    dark:hover:bg-white/[0.06]
  "
  >
    <FiX size={18} />
  </button>
)}
        </div>

    

        {/* LABEL */}
        <div className="mt-8 mb-4">
          <p
            className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]

            text-slate-400
          "
          >
            Navigation
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeSidebar}
            >
              {({ isActive }) => (
                <Motion
                  variant={
                    animations.fade
                  }
                  transition={
                    transitions.smooth
                  }
                  className={`
                    relative

                    flex
                    items-center
                    justify-between

                    px-4
                    py-3.5

                    rounded-2xl

                    transition-all
                    duration-300

                    group

                    ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                        : "text-slate-700 dark:text-slate-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                    }
                  `}
                >
                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <div
                      className="
                      absolute
                      inset-0

                      rounded-2xl

                      bg-cyan-500/10

                      blur-xl
                    "
                    />
                  )}

                  <div
                    className="
                    relative
                    z-10

                    flex
                    items-center
                    gap-4
                  "
                  >
                    {link.icon}

                    <span
                      className="
                      font-medium
                      text-[15px]
                    "
                    >
                      {link.name}
                    </span>
                  </div>

                  <div
                    className="
                    relative
                    z-10

                    flex
                    items-center
                    gap-2
                  "
                  >
                    {link.badge && (
                      <div
                        className={`
                          px-2
                          py-1

                          rounded-full

                          text-[10px]
                          font-semibold

                          ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-black/[0.05] dark:bg-white/[0.05] text-slate-500 dark:text-slate-300"
                          }
                        `}
                      >
                        {link.badge}
                      </div>
                    )}

                    <FiChevronRight
                      size={16}
                      className="
                      opacity-0
                      -translate-x-1

                      transition-all

                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                    />
                  </div>
                </Motion>
              )}
            </NavLink>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-auto pt-8">
          <div
            className="
            relative

            overflow-hidden

            rounded-[32px]

            p-5

            bg-gradient-to-br
            from-slate-900
            to-slate-800

            border
            border-white/10
          "
          >
            {/* GLOW */}
            <div
              className="
              absolute
              top-[-60px]
              right-[-60px]

              w-[140px]
              h-[140px]

              bg-cyan-500/20

              blur-[80px]

              rounded-full
            "
            />

            <div className="relative z-10">
              <p
                className="
                text-sm

                text-slate-400
              "
              >
                Upgrade to Enterprise
              </p>

              <h3
                className="
                mt-3

                text-[26px]
                leading-tight
                font-bold

                text-white
              "
              >
                Unlock AI-powered insights
              </h3>

              <p
                className="
                mt-3

                text-sm
                leading-relaxed

                text-slate-400
              "
              >
                Advanced analytics,
                team collaboration,
                forecasting, and
                enterprise automation.
              </p>

              <AppButton className="w-full mt-5">
                Upgrade Plan
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  );
};

export default Sidebar;