import { teamPerformance } from "../../data/dashboardData";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import {
  animations,
  transitions,
} from "../../lib/motion";

const TeamPerformance = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: 0.15,
      }}
    >
      <AppCard>
        <p
          className="
          text-sm
          font-medium
          text-slate-600
          dark:text-slate-400
        "
        >
          Team Performance
        </p>

        <h2
          className="
          mt-2
          text-2xl
          font-bold
          text-slate-900
          dark:text-white
        "
        >
          Department Progress
        </h2>

        <div className="mt-8 space-y-6">
          {teamPerformance.map(
            (item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <h3
                    className="
                    text-sm
                    font-medium
                    text-slate-700
                    dark:text-slate-300
                  "
                  >
                    {item.name}
                  </h3>

                  <span
                    className="
                    text-sm
                    font-semibold
                    text-slate-900
                    dark:text-white
                  "
                  >
                    {item.progress}%
                  </span>
                </div>

                <div
                  className="
                  mt-3
                  h-3

                  rounded-full

                  bg-black/5
                  dark:bg-white/5

                  overflow-hidden
                "
                >
                  <div
                    className="
                    h-full

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                  "
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </AppCard>
    </Motion>
  );
};

export default TeamPerformance;