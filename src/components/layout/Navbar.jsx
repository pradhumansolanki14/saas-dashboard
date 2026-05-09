import {
  FiBell,
  FiSearch,
  FiMenu,
  FiMoon,
  FiSun,
  FiLogOut,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiCreditCard,
} from "react-icons/fi";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

import NotificationDropdown from "../notifications/NotificationDropdown";

import { useSidebarStore } from "../../store/useSidebarStore";

import { useThemeStore } from "../../store/useThemeStore";

import { useAuthStore } from "../../store/useAuthStore";

import { useCommandMenuStore } from "../../store/useCommandMenuStore";

import Motion from "../common/Motion";

import {
  animations,
  transitions,
} from "../../lib/motion";

const Navbar = () => {
  const { openSidebar } =
    useSidebarStore();

  const { theme, toggleTheme } =
    useThemeStore();

  const { logout } = useAuthStore();

  const { setOpen } =
    useCommandMenuStore();

  const navigate = useNavigate();

  const [openProfile, setOpenProfile] =
    useState(false);

  const [
    openNotifications,
    setOpenNotifications,
  ] = useState(false);

  const profileRef = useRef(null);

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  // CLOSE PROFILE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target
        )
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // CTRL + K
  useEffect(() => {
    const down = (e) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();

        setOpen(true);
      }
    };

    window.addEventListener(
      "keydown",
      down
    );

    return () =>
      window.removeEventListener(
        "keydown",
        down
      );
  }, [setOpen]);

  return (
    <Motion
      variant={animations.fadeDown}
      transition={transitions.smooth}
      className="
      relative
      z-[100]
      min-h-[80px]
      rounded-[28px]
      bg-white/70
      dark:bg-white/5
      backdrop-blur-xl
      border
      border-black/5
      dark:border-white/10
      shadow-[0_8px_40px_rgba(0,0,0,0.12)]
      px-3
      sm:px-4
      lg:px-6
      flex
      items-center
      justify-between
      transition-all
      duration-300
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* MOBILE MENU */}
        <button
          onClick={openSidebar}
          className="
          lg:hidden
          w-11
          h-11
          rounded-2xl
          bg-black/5
          dark:bg-white/5
          border
          border-black/5
          dark:border-white/10
          flex
          items-center
          justify-center
          text-slate-900
          dark:text-white
          transition
          hover:bg-black/[0.06]
          dark:hover:bg-white/[0.06]
        "
        >
          <FiMenu size={20} />
        </button>

        {/* TITLE */}
        <div>
          {/* DESKTOP */}
          <div className="hidden sm:block">
            <h2
              className="
              text-2xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
            >
              Welcome back
            </h2>

            <p
              className="
              text-sm
              mt-1
              text-slate-600
              dark:text-slate-400
            "
            >
              Here’s what’s happening today.
            </p>
          </div>

          {/* MOBILE */}
          <div className="sm:hidden">
            <h2
              className="
              text-lg
              font-semibold
              tracking-tight
              text-slate-900
              dark:text-white
            "
            >
              SaaSify
            </h2>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 lg:gap-4">
        {/* SEARCH */}
        <button
          onClick={() => {
            console.log(
              "COMMAND MENU OPEN"
            );

            setOpen(true);
          }}
          className="
          hidden
          lg:flex
          items-center
          justify-between
          w-[240px]
          h-[50px]
          px-4
          rounded-2xl
          bg-black/[0.03]
          dark:bg-white/[0.03]
          border
          border-black/5
          dark:border-white/10
          text-sm
          text-slate-500
          dark:text-slate-400
          transition
          hover:bg-black/[0.05]
          dark:hover:bg-white/[0.05]
        "
        >
          <div className="flex items-center gap-3">
            <FiSearch />

            <span>
              Search anything...
            </span>
          </div>

          <div
            className="
            flex
            items-center
            gap-1
            px-2
            py-1
            rounded-lg
            bg-black/5
            dark:bg-white/5
            text-[11px]
          "
          >
            Ctrl

            <span>K</span>
          </div>
        </button>

        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="
          w-11
          h-11
          rounded-2xl
          bg-black/5
          dark:bg-white/5
          border
          border-black/5
          dark:border-white/10
          flex
          items-center
          justify-center
          text-slate-900
          dark:text-white
          transition
          hover:bg-black/[0.06]
          dark:hover:bg-white/[0.06]
        "
        >
          {theme === "dark" ? (
            <FiSun size={18} />
          ) : (
            <FiMoon size={18} />
          )}
        </button>

        {/* NOTIFICATIONS */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenNotifications(
                !openNotifications
              )
            }
            className="
            relative
            w-11
            h-11
            rounded-2xl
            bg-black/5
            dark:bg-white/5
            border
            border-black/5
            dark:border-white/10
            flex
            items-center
            justify-center
            text-slate-900
            dark:text-white
            transition
            hover:scale-105
          "
          >
            {/* BADGE */}
            <div
              className="
              absolute
              top-1.5
              right-1.5
              w-2.5
              h-2.5
              rounded-full
              bg-red-500
            "
            />

            <FiBell size={18} />
          </button>

          <NotificationDropdown
            open={openNotifications}
            setOpen={
              setOpenNotifications
            }
          />
        </div>

        {/* PROFILE */}
        <div
          ref={profileRef}
          className="relative"
        >
          <button
            onClick={() =>
              setOpenProfile(
                !openProfile
              )
            }
            className="
            flex
            items-center
            gap-2
            sm:gap-3
            bg-black/5
            dark:bg-white/5
            border
            border-black/5
            dark:border-white/10
            rounded-2xl
            px-2
            sm:px-3
            py-2
            transition
            hover:bg-black/[0.06]
            dark:hover:bg-white/[0.06]
          "
          >
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="
              w-10
              h-10
              rounded-xl
              object-cover
            "
            />

            <div className="hidden sm:block text-left">
              <h4
                className="
                text-sm
                font-semibold
                text-slate-900
                dark:text-white
              "
              >
                Alex Morgan
              </h4>

              <p
                className="
                text-xs
                text-slate-600
                dark:text-slate-400
              "
              >
                Product Manager
              </p>
            </div>

            <FiChevronDown
              className={`
                hidden sm:block
                text-slate-500
                dark:text-slate-400
                transition
                ${
                  openProfile
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </button>

          {/* PROFILE DROPDOWN */}
{/* PROFILE DROPDOWN */}
{openProfile && (
  <Motion
    variant={animations.fadeDown}
    transition={transitions.smooth}
    className="
    absolute
    top-[78px]
    right-0

    w-[340px]

    rounded-[32px]

    bg-white
    dark:bg-[#0f172a]

    border
    border-black/5
    dark:border-white/10

    shadow-[0_20px_80px_rgba(0,0,0,0.45)]

    overflow-hidden

    z-[9999]
  "
  >
    {/* GLOW */}
    <div
      className="
      absolute
      top-[-100px]
      right-[-80px]

      w-[220px]
      h-[220px]

      bg-cyan-500/10

      blur-[100px]

      rounded-full
    "
    />

    {/* HEADER */}
    <div
      className="
      relative
      z-10

      p-6

      border-b
      border-black/5
      dark:border-white/10
    "
    >
      <div className="flex items-start gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="
          w-16
          h-16

          rounded-3xl

          object-cover

          ring-2
          ring-cyan-500/20
        "
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3
                className="
                text-lg
                font-bold

                text-slate-900
                dark:text-white
              "
              >
                Alex Morgan
              </h3>

              <p
                className="
                mt-1

                text-sm

                text-slate-500
                dark:text-slate-400
              "
              >
                alex@saasify.com
              </p>
            </div>

            <div
              className="
              px-3
              py-1

              rounded-full

              bg-emerald-500/10
              text-emerald-500

              text-xs
              font-semibold
            "
            >
              PRO
            </div>
          </div>

          <div
            className="
            mt-4

            flex
            items-center
            gap-2
          "
          >
            <div
              className="
              w-2.5
              h-2.5

              rounded-full

              bg-emerald-500
            "
            />

            <span
              className="
              text-sm

              text-slate-500
              dark:text-slate-400
            "
            >
              Active workspace
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* MENU */}
    <div className="relative z-10 p-3">
      {[
        {
          icon: <FiUser size={18} />,
          label: "Profile",
        },

        {
          icon: (
            <FiSettings size={18} />
          ),
          label: "Account Settings",
        },

        {
          icon: (
            <FiCreditCard size={18} />
          ),
          label: "Billing & Plans",
        },
      ].map((item) => (
        <button
          key={item.label}
          className="
          w-full
          h-[56px]

          px-4

          rounded-2xl

          flex
          items-center
          gap-4

          text-slate-700
          dark:text-slate-300

          transition-all

          hover:bg-black/[0.04]
          dark:hover:bg-white/[0.04]
        "
        >
          <div
            className="
            w-10
            h-10

            rounded-2xl

            bg-black/[0.04]
            dark:bg-white/[0.04]

            flex
            items-center
            justify-center
          "
          >
            {item.icon}
          </div>

          <span
            className="
            text-sm
            font-medium
          "
          >
            {item.label}
          </span>
        </button>
      ))}

      {/* DIVIDER */}
      <div
        className="
        my-3

        border-t
        border-black/5
        dark:border-white/10
      "
      />

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="
        w-full
        h-[56px]

        px-4

        rounded-2xl

        flex
        items-center
        gap-4

        text-red-500

        transition-all

        hover:bg-red-500
        hover:text-white
      "
      >
        <div
          className="
          w-10
          h-10

          rounded-2xl

          bg-red-500/10

          flex
          items-center
          justify-center
        "
        >
          <FiLogOut size={18} />
        </div>

        <span
          className="
          text-sm
          font-medium
        "
        >
          Logout
        </span>
      </button>
    </div>
  </Motion>
)}
        </div>
      </div>
    </Motion>
  );
};

export default Navbar;