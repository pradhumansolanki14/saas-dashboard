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
        className="relative overflow-hidden p-2 sm:p-6"
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          <div>
            <p
              className="
              text-xs
              md:text-sm
              font-medium
              text-slate-600
              dark:text-slate-400
            "
            >
              {title}
            </p>

            <h2
              className="
              mt-1
              md:mt-3
              text-xl
              md:text-3xl
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
           md:w-14
            md:h-14
          p-1.5
           ml-0.9
              
              p-1
              md:p-0

            rounded-xl
            md:rounded-2xl

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
            <Icon size={24}  />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-5 md:mt-8 flex items-center justify-between gap-3 md:gap-0">
         <div className="mt-2 md:mt-0">
           <StatusBadge status="Active">
            {growth}
          </StatusBadge>
         </div>
         

          {/* MINI GRAPH */}
          <div className="flex items-end gap-[5px] h-[35px] ">
            <div className="w-1.5 md:w-2 h-[40%] rounded-full bg-cyan-500/30" />

            <div className="w-1.5 md:w-2 h-[65%] rounded-full bg-cyan-500/40" />

            <div className="w-1.5 md:w-2 h-[55%] rounded-full bg-cyan-500/50" />

            <div className="w-1.5 md:w-2 h-[80%] rounded-full bg-cyan-500/70" />

            <div className="w-1.5 md:w-2 h-full rounded-full bg-cyan-500" />
          </div>
        </div>
      </AppCard>
    </Motion>
  );
};

export default StatsCard;