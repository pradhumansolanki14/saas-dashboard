const SectionHeader = ({
  title,
  subtitle,
  action,
  className = "",
}) => {
  return (
    <div
      className={`
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between

        gap-4

        ${className}
      `}
    >
      <div>
        <h2
          className="
          text-3xl
          font-bold
          tracking-tight

          text-slate-900
          dark:text-white
        "
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="
            mt-2

            text-slate-600
            dark:text-slate-400
          "
          >
            {subtitle}
          </p>
        )}
      </div>

      {action && action}
    </div>
  );
};

export default SectionHeader;