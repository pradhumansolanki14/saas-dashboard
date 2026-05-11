const variants = {
  primary: `
    bg-gradient-to-r
    from-cyan-500
    to-blue-500

    text-white

    shadow-lg
    shadow-cyan-500/20
  `,

  secondary: `
    bg-black/[0.04]
    dark:bg-white/[0.04]

    text-slate-700
    dark:text-slate-200

    border
    border-black/5
    dark:border-white/10
  `,

  ghost: `
    bg-transparent

    text-slate-700
    dark:text-slate-300

    hover:bg-black/[0.04]
    dark:hover:bg-white/[0.04]
  `,

  danger: `
    bg-red-500
    text-white
  `,

  default: `
    
    bg-white/80
    backdrop-blur-2xl
    text-slate-800
    border
    border-black/5
    dark:border-white/10

    shadow-lg
  `,
};
const AppButton = ({
  children,
  variant = "primary",
  className = "",
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        h-[50px]
        md:px-5
        



        rounded-2xl

        flex
        items-center
        justify-center
        gap-2

        text-sm
        font-medium

        transition-all
        duration-300

        hover:scale-[1.02]

        ${variants[variant]}
        ${className}
      `}
    >
      {icon && icon}

      {children}
    </button>
  );
};

export default AppButton;