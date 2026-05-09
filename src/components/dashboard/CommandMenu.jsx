import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
} from "framer-motion";

import {
  FiSearch,
  FiArrowRight,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiShoppingBag,
  FiClock,
  FiX,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import AppButton from "../ui/AppButton";

import SectionHeader from "../ui/SectionHeader";

import {
  animations,
  transitions,
} from "../../lib/motion";

import { useCommandMenuStore } from "../../store/useCommandMenuStore";

const navigationItems = [
  {
    title: "Dashboard",
    icon: FiBarChart2,
    path: "/",
    category: "Navigation",
  },

  {
    title: "Analytics",
    icon: FiBarChart2,
    path: "/analytics",
    category: "Navigation",
  },

  {
    title: "Users",
    icon: FiUsers,
    path: "/users",
    category: "Navigation",
  },

  {
    title: "Orders",
    icon: FiShoppingBag,
    path: "/orders",
    category: "Navigation",
  },

  {
    title: "Settings",
    icon: FiSettings,
    path: "/settings",
    category: "Navigation",
  },
];

const aiSuggestions = [
  "Show inactive users",
  "Revenue this month",
  "Open analytics",
  "View enterprise customers",
  "Pending transactions",
];

const CommandMenu = () => {
  const navigate = useNavigate();

  const { open, setOpen } =
    useCommandMenuStore();

  const [query, setQuery] =
    useState("");

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [recentSearches, setRecentSearches] =
    useState(() => {
      const saved = localStorage.getItem(
        "recent-searches"
      );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const filteredItems = useMemo(() => {
    if (!query)
      return navigationItems;

    return navigationItems.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );
  }, [query]);

  // KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;

      if (e.key === "Escape") {
        setOpen(false);
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();

        setSelectedIndex((prev) =>
          prev ===
          filteredItems.length - 1
            ? 0
            : prev + 1
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();

        setSelectedIndex((prev) =>
          prev === 0
            ? filteredItems.length - 1
            : prev - 1
        );
      }

      if (e.key === "Enter") {
        if (
          filteredItems[
            selectedIndex
          ]
        ) {
          const selected =
            filteredItems[
              selectedIndex
            ];

          navigate(selected.path);

          saveRecent(
            selected.title
          );

          setOpen(false);

          setQuery("");
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [
    open,
    filteredItems,
    selectedIndex,
  ]);

  const saveRecent = (value) => {
    const updated = [
      value,
      ...recentSearches.filter(
        (item) =>
          item !== value
      ),
    ].slice(0, 5);

    setRecentSearches(updated);

    localStorage.setItem(
      "recent-searches",
      JSON.stringify(updated)
    );
  };

  const handleNavigate = (
    item
  ) => {
    navigate(item.path);

    saveRecent(item.title);

    setOpen(false);

    setQuery("");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <Motion
            onClick={() =>
              setOpen(false)
            }
            variant={
              animations.fade
            }
            transition={
              transitions.smooth
            }
            className="
            fixed
            inset-0

            bg-black/50
            backdrop-blur-sm

            z-[200]
          "
          />

          {/* COMMAND MENU */}
          <Motion
            variant={
              animations.fadeDown
            }
            transition={
              transitions.smooth
            }
            className="
            fixed
            top-[10%]
            left-1/2
            -translate-x-1/2

            w-[680px]
            max-w-[95vw]

            z-[201]
          "
          >
            <AppCard
              className="
              relative

              overflow-hidden

              p-0
            "
            >
              {/* GLOW */}
              <div
                className="
                absolute
                top-[-120px]
                right-[-120px]

                w-[240px]
                h-[240px]

                bg-cyan-500/20

                blur-[100px]

                rounded-full
              "
              />

              {/* SEARCH HEADER */}
              <div
                className="
                relative
                z-10

                flex
                items-center
                gap-4

                px-6
                h-[78px]

                border-b
                border-black/5
                dark:border-white/10
              "
              >
                <FiSearch
                  className="
                  text-slate-400
                  text-xl
                "
                />

                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) =>
                    setQuery(
                      e.target.value
                    )
                  }
                  placeholder="Search anything..."
                  className="
                  flex-1
                  bg-transparent
                  outline-none

                  text-lg

                  text-slate-900
                  dark:text-white

                  placeholder:text-slate-400
                "
                />

                {/* ESC */}
                <div
                  className="
                  hidden
                  sm:flex

                  items-center
                  justify-center

                  px-3
                  h-9

                  rounded-xl

                  bg-black/5
                  dark:bg-white/5

                  text-sm

                  text-slate-500
                  dark:text-slate-400
                "
                >
                  ESC
                </div>

                {/* CLOSE */}
               <button
  onClick={() =>
    setOpen(false)
  }
  className="
  w-10
  h-10

  rounded-2xl

  bg-black/5
  dark:bg-white/5

  border
  border-black/5
  dark:border-white/10

  flex
  items-center
  justify-center

  text-slate-700
  dark:text-white

  transition-all
  duration-300

  hover:bg-red-500
  hover:text-white
"
>
  <FiX size={18} />
</button>
              </div>

              {/* CONTENT */}
              <div
                className="
                relative
                z-10

                p-4

                max-h-[500px]
                overflow-y-auto
              "
              >
                {/* AI */}
                {!query && (
                  <div>
                    <SectionHeader
                      title="AI Suggestions"
                      titleClassName="
                      text-xs
                      uppercase
                      tracking-wider
                    "
                      className="mb-3 px-3"
                    />

                    <div className="space-y-2">
                      {aiSuggestions.map(
                        (
                          item,
                          index
                        ) => (
                          <button
                            key={index}
                            className="
                            w-full

                            flex
                            items-center
                            justify-between

                            px-4
                            py-3

                            rounded-2xl

                            bg-slate-100
                            dark:bg-[#162033]

                            hover:bg-slate-200
                            dark:hover:bg-[#1d2a40]

                            transition
                          "
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="
                                w-10
                                h-10

                                rounded-2xl

                                bg-cyan-500/10
                                text-cyan-500

                                flex
                                items-center
                                justify-center
                              "
                              >
                                <FiSearch />
                              </div>

                              <span
                                className="
                                text-sm
                                font-medium

                                text-slate-800
                                dark:text-white
                              "
                              >
                                {item}
                              </span>
                            </div>

                            <FiArrowRight
                              className="
                              text-slate-400
                            "
                            />
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* RECENT */}
                {!query &&
                  recentSearches.length >
                    0 && (
                    <div className="mt-6">
                      <SectionHeader
                        title="Recent Searches"
                        titleClassName="
                        text-xs
                        uppercase
                        tracking-wider
                      "
                        className="mb-3 px-3"
                      />

                      <div className="space-y-2">
                        {recentSearches.map(
                          (
                            item,
                            index
                          ) => (
                            <div
                              key={index}
                              className="
                              flex
                              items-center
                              gap-3

                              px-4
                              py-3

                              rounded-2xl

                              bg-slate-100
                              dark:bg-[#162033]
                            "
                            >
                              <div
                                className="
                                w-10
                                h-10

                                rounded-2xl

                                bg-black/5
                                dark:bg-white/5

                                flex
                                items-center
                                justify-center
                              "
                              >
                                <FiClock />
                              </div>

                              <span
                                className="
                                text-sm
                                font-medium

                                text-slate-800
                                dark:text-white
                              "
                              >
                                {item}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* NAVIGATION */}
                <div className="mt-6">
                  <SectionHeader
                    title="Navigation"
                    titleClassName="
                    text-xs
                    uppercase
                    tracking-wider
                  "
                    className="mb-3 px-3"
                  />

                  <div className="space-y-2">
                    {filteredItems.map(
                      (
                        item,
                        index
                      ) => {
                        const Icon =
                          item.icon;

                        return (
                          <button
                            key={
                              item.title
                            }
                            onClick={() =>
                              handleNavigate(
                                item
                              )
                            }
                            className={`
                              w-full

                              flex
                              items-center
                              justify-between

                              px-4
                              py-3

                              rounded-2xl

                              transition-all

                              ${
                                selectedIndex ===
                                index
                                  ? "bg-cyan-500 text-white"
                                  : "bg-slate-100 dark:bg-[#162033] text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-[#1d2a40]"
                              }
                            `}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="
                                w-10
                                h-10

                                rounded-2xl

                                flex
                                items-center
                                justify-center

                                bg-black/5
                                dark:bg-white/5
                              "
                              >
                                <Icon />
                              </div>

                              <span className="font-medium">
                                {
                                  item.title
                                }
                              </span>
                            </div>

                            <FiArrowRight />
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </AppCard>
          </Motion>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;