import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import NotificationItem from "./NotificationItem";

import Motion from "../common/Motion";

import {
  animations,
  transitions,
} from "../../lib/motion";

import {
  notificationsData,
} from "../../data/notificationsData";

const NotificationDropdown = ({
  open,
  setOpen,
}) => {
  const [notifications, setNotifications] =
    useState(notificationsData);

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className="
            fixed
            inset-0
            z-40
          "
          />

          {/* DROPDOWN */}
          <Motion
            variant={animations.fadeDown}
            transition={transitions.smooth}
            className="
            absolute
            top-[76px]
            right-0
            w-[390px]
            max-w-[calc(100vw-20px)]

            rounded-[36px]

            bg-white
            dark:bg-[#0f172a]

            border
            border-white/10

            shadow-[0_20px_80px_rgba(0,0,0,0.55)]

            backdrop-blur-3xl

            ring-1
            ring-white/10

            z-50
            overflow-hidden
          "
          >
            {/* TOP GLOW */}
            <div
              className="
              absolute
              top-[-120px]
              right-[-100px]
              w-[240px]
              h-[240px]
              bg-cyan-500/20
              blur-[100px]
              rounded-full
            "
            />

            {/* HEADER */}
            <div
              className="
              relative
              z-10

              px-6
              py-5

              border-b
              border-slate-200
              dark:border-white/10

              bg-white
              dark:bg-[#111c31]

              flex
              items-center
              justify-between
            "
            >
              <div>
                <h2
                  className="
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
                >
                  Notifications
                </h2>

                <p
                  className="
                  mt-1
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
                >
                  {unreadCount} unread updates
                </p>
              </div>

              <button
                onClick={markAllRead}
                className="
                h-[40px]
                px-4
                rounded-xl

                bg-cyan-500/10
                text-cyan-500

                text-sm
                font-medium

                transition
                hover:bg-cyan-500
                hover:text-white
              "
              >
                Mark all
              </button>
            </div>

            {/* CONTENT */}
            <div
              className="
              relative
              z-10

              p-4
              space-y-4

              max-h-[500px]
              overflow-y-auto
            "
            >
              {notifications.length > 0 ? (
                notifications.map(
                  (notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      removeNotification={
                        removeNotification
                      }
                    />
                  )
                )
              ) : (
                <div
                  className="
                  py-16
                  text-center
                "
                >
                  <h3
                    className="
                    text-lg
                    font-semibold
                    text-slate-900
                    dark:text-white
                  "
                  >
                    No Notifications
                  </h3>

                  <p
                    className="
                    mt-2
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                  >
                    You're all caught up.
                  </p>
                </div>
              )}
            </div>
          </Motion>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationDropdown;