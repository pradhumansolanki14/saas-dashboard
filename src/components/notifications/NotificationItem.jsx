import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi";

const NotificationItem = ({
  notification,
  removeNotification,
}) => {
  const iconStyles = {
    success: {
      icon: <FiCheckCircle />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },

    error: {
      icon: <FiAlertCircle />,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },

    info: {
      icon: <FiInfo />,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  };

  const current =
    iconStyles[notification.type];

  return (
    <div
      className="
      relative

      p-4

      rounded-[28px]

      border
      border-slate-200
      dark:border-white/10

      bg-slate-100
      dark:bg-[#162033]

      transition-all
      duration-300

      hover:bg-slate-200
      dark:hover:bg-[#1b2940]
    "
    >
      {/* UNREAD DOT */}
      {notification.unread && (
        <div
          className="
          absolute
          top-4
          right-4

          w-2.5
          h-2.5

          rounded-full
          bg-cyan-500
        "
        />
      )}

      <div className="flex gap-4">
        {/* AVATAR */}
        <img
          src={notification.avatar}
          alt=""
          className="
          w-12
          h-12
          rounded-2xl
          object-cover
        "
        />

        <div className="flex-1">
          {/* TOP */}
          <div className="flex items-start gap-3">
            <div
              className={`
                w-10
                h-10
                rounded-2xl
                flex
                items-center
                justify-center
                ${current.bg}
                ${current.color}
              `}
            >
              {current.icon}
            </div>

            <div>
              <h3
                className="
                font-semibold
                text-slate-900
                dark:text-white
              "
              >
                {notification.user}
              </h3>

              <p
                className="
                mt-1
                text-sm
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
              >
                {notification.message}
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div
            className="
            mt-4

            flex
            items-center
            justify-between
          "
          >
            <span
              className="
              text-xs
              text-slate-500
              dark:text-slate-400
            "
            >
              {notification.time}
            </span>

            <button
              onClick={() =>
                removeNotification(
                  notification.id
                )
              }
              className="
              text-xs
              font-medium
              text-red-500
              hover:underline
            "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;