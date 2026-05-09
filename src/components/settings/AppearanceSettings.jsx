import { useState } from "react";

import Motion from "../common/Motion";

import { useThemeStore } from "../../store/useThemeStore";

import AppCard from "../ui/AppCard";

import {
  animations,
  transitions,
} from "../../lib/motion";

const AppearanceSettings = () => {
  const { theme, toggleTheme } =
    useThemeStore();

  const [compactMode, setCompactMode] =
    useState(false);

  const [glassEffect, setGlassEffect] =
    useState(true);

  const settings = [
    {
      title: "Dark Mode",
      description:
        "Switch between light and dark theme.",
      enabled: theme === "dark",
      onClick: toggleTheme,
    },

    {
      title: "Compact Layout",
      description:
        "Reduce spacing for dense layouts.",
      enabled: compactMode,
      onClick: () =>
        setCompactMode(!compactMode),
    },

    {
      title: "Glassmorphism Effects",
      description:
        "Enable blur and glass UI effects.",
      enabled: glassEffect,
      onClick: () =>
        setGlassEffect(!glassEffect),
    },
  ];

  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: 0.05,
      }}
    >
      <AppCard>
        {/* HEADER */}
        <div>
          <h2
            className="
            text-2xl
            font-bold

            text-slate-900
            dark:text-white
          "
          >
            Appearance
          </h2>

          <p
            className="
            mt-2

            text-slate-600
            dark:text-slate-400
          "
          >
            Customize dashboard visuals and layout
            preferences.
          </p>
        </div>

        {/* SETTINGS */}
        <div className="mt-8 space-y-5">
          {settings.map((item) => (
            <div
              key={item.title}
              className="
              flex
              items-center
              justify-between

              gap-4

              rounded-[28px]

              bg-black/[0.03]
              dark:bg-white/[0.03]

              border
              border-black/5
              dark:border-white/10

              p-5

              transition-all
              duration-300

              hover:bg-black/[0.04]
              dark:hover:bg-white/[0.04]
            "
            >
              {/* LEFT */}
              <div>
                <h3
                  className="
                  font-semibold

                  text-slate-900
                  dark:text-white
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-1

                  text-sm

                  text-slate-500
                  dark:text-slate-400
                "
                >
                  {item.description}
                </p>
              </div>

              {/* TOGGLE */}
              <button
                onClick={item.onClick}
                className={`
                  relative

                  w-[62px]
                  h-[36px]

                  rounded-full

                  transition-all
                  duration-300

                  ${
                    item.enabled
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20"
                      : "bg-slate-300 dark:bg-white/10"
                  }
                `}
              >
                <div
                  className={`
                    absolute
                    top-1

                    w-7
                    h-7

                    rounded-full

                    bg-white

                    shadow-lg

                    transition-all
                    duration-300

                    ${
                      item.enabled
                        ? "translate-x-[30px]"
                        : "translate-x-1"
                    }
                  `}
                />
              </button>
            </div>
          ))}
        </div>
      </AppCard>
    </Motion>
  );
};

export default AppearanceSettings;