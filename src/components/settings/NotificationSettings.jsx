import { useState } from "react";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import {
  animations,
  transitions,
} from "../../lib/motion";

const notificationsData = [
  {
    id: 1,
    title: "Email Notifications",
    description:
      "Receive updates directly in your inbox.",
    enabled: true,
  },

  {
    id: 2,
    title: "Push Notifications",
    description:
      "Get instant real-time alerts.",
    enabled: true,
  },

  {
    id: 3,
    title: "Security Alerts",
    description:
      "Receive important security updates.",
    enabled: true,
  },

  {
    id: 4,
    title: "Marketing Emails",
    description:
      "Get product news and feature updates.",
    enabled: false,
  },
];

const NotificationSettings = () => {
  const [notifications, setNotifications] =
    useState(notificationsData);

  const toggleNotification = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              enabled: !item.enabled,
            }
          : item
      )
    );
  };

  return (
    <Motion
      variant={animations.fadeUp}
      transition={transitions.smooth}
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
            Notifications
          </h2>

          <p
            className="
            mt-2

            text-slate-600
            dark:text-slate-400
          "
          >
            Manage how you receive platform
            updates and alerts.
          </p>
        </div>

        {/* SETTINGS */}
        <div className="mt-8 space-y-5">
          {notifications.map((item) => (
            <div
              key={item.id}
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
                onClick={() =>
                  toggleNotification(item.id)
                }
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

export default NotificationSettings;