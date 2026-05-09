import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const StatsCard = ({
  title,
  value,
  growth,
  icon: Icon,
  index,
}) => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: index * 0.08,
      }}
    >
      <AppCard
        hover
        glow
        className="relative overflow-hidden"
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          <div>
            <p
              className="
              text-sm
              font-medium
              text-slate-600
              dark:text-slate-400
            "
            >
              {title}
            </p>

            <h2
              className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
            >
              {value}
            </h2>
          </div>

          <div
            className="
            w-14
            h-14

            rounded-2xl

            bg-gradient-to-br
            from-cyan-500
            to-blue-500

            flex
            items-center
            justify-center

            text-white

            shadow-lg
            shadow-cyan-500/20
          "
          >
            <Icon size={24} />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex items-center justify-between">
          <StatusBadge status="Active">
            {growth}
          </StatusBadge>

          {/* MINI GRAPH */}
          <div className="flex items-end gap-[5px] h-[35px]">
            <div className="w-2 h-[40%] rounded-full bg-cyan-500/30" />

            <div className="w-2 h-[65%] rounded-full bg-cyan-500/40" />

            <div className="w-2 h-[55%] rounded-full bg-cyan-500/50" />

            <div className="w-2 h-[80%] rounded-full bg-cyan-500/70" />

            <div className="w-2 h-full rounded-full bg-cyan-500" />
          </div>
        </div>
      </AppCard>
    </Motion>
  );
};

export default StatsCard;