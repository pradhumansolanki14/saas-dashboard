import { activityData } from "../../data/dashboardData";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import AppButton from "../ui/AppButton";

import {
  animations,
  transitions,
} from "../../lib/motion";

const RecentActivity = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={transitions.smooth}
    >
      <AppCard>
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <p
              className="
              text-sm
              font-medium
              text-slate-600
              dark:text-slate-400
            "
            >
              Recent Activity
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
              Live Updates
            </h2>
          </div>

          <div
            className="
            w-3
            h-3

            rounded-full

            bg-emerald-500

            animate-pulse
          "
          />
        </div>

        {/* LIST */}
        <div className="mt-8 space-y-5">
          {activityData.map(
            (item, index) => {
              const Icon =
                item.icon;

              return (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  justify-between
                "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                      w-12
                      h-12

                      rounded-2xl

                      bg-cyan-500/10
                      text-cyan-500

                      flex
                      items-center
                      justify-center
                    "
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3
                        className="
                        font-medium
                        text-slate-900
                        dark:text-white
                      "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                      "
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>

                  <AppButton
                    variant="ghost"
                    className="
                    h-[38px]
                    px-3
                    text-cyan-500
                  "
                  >
                    View
                  </AppButton>
                </div>
              );
            }
          )}
        </div>
      </AppCard>
    </Motion>
  );
};

export default RecentActivity;