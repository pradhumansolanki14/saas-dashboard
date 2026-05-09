import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { trafficChannels } from "../../data/analyticsData";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import {
  animations,
  transitions,
} from "../../lib/motion";

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#10b981",
];

const TrafficSources = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: 0.1,
      }}
    >
      <AppCard>
        <p
          className="
          text-sm

          text-slate-600
          dark:text-slate-400
        "
        >
          Traffic Sources
        </p>

        <h2
          className="
          mt-2

          text-3xl
          font-bold

          text-slate-900
          dark:text-white
        "
        >
          248K Visitors
        </h2>

        {/* CHART */}
        <div className="mt-8 h-[260px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={trafficChannels}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {trafficChannels.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />
                  )
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LEGEND */}
        <div className="space-y-4">
          {trafficChannels.map(
            (item, index) => (
              <div
                key={item.name}
                className="
                flex
                items-center
                justify-between
              "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background:
                        COLORS[
                          index
                        ],
                    }}
                  />

                  <span
                    className="
                    text-sm

                    text-slate-700
                    dark:text-slate-300
                  "
                  >
                    {item.name}
                  </span>
                </div>

                <span
                  className="
                  text-sm
                  font-semibold

                  text-slate-900
                  dark:text-white
                "
                >
                  {item.value}%
                </span>
              </div>
            )
          )}
        </div>
      </AppCard>
    </Motion>
  );
};

export default TrafficSources;