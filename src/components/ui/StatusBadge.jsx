const styles = {
  Active: `
    bg-emerald-500/10
    text-emerald-500
  `,

  Pending: `
    bg-amber-500/10
    text-amber-500
  `,

  Inactive: `
  bg-white/5
  text-slate-400
`,
  Failed: `
    bg-red-500/10
    text-red-500
  `,

  Enterprise: `
    bg-cyan-500/10
    text-cyan-500
  `,

  Pro: `
    bg-violet-500/10
    text-violet-500
  `,
};

const StatusBadge = ({
  children,
  status = "Active",
  className = "",
}) => {
  return (
    <div
      className={`
        inline-flex
        items-center

        px-3
        py-1.5

        rounded-full

        text-xs
        font-semibold

        ${styles[status]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default StatusBadge;