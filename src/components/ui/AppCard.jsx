const AppCard = ({
  children,
  className = "",
  hover = false,
  glow = false,
  padding = "p-6",
}) => {
  return (
    <div
      className={`
        relative
        overflow-hidden

        rounded-[32px]

        bg-white/70
        dark:bg-white/[0.03]

        backdrop-blur-3xl

        border
        border-black/5
        dark:border-white/10

        shadow-[0_20px_80px_rgba(0,0,0,0.15)]

        transition-all
        duration-300

        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-[0_20px_100px_rgba(0,0,0,0.2)]"
            : ""
        }

        ${padding}
        ${className}
      `}
    >
      {/* GLOW */}
      {glow && (
        <div
          className="
          absolute
          top-[-120px]
          right-[-100px]

          w-[240px]
          h-[240px]

          bg-cyan-500/10

          blur-[100px]

          rounded-full
        "
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AppCard;