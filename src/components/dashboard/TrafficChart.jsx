import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { trafficData } from "../../data/dashboardData";

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

const TrafficChart = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: 0.1,
      }}
    >
      <AppCard
        className="relative overflow-hidden"
      >
        {/* HEADER */}
        <div className="mb-8">
          <p
            className="
            text-sm
            font-medium
            text-slate-600
            dark:text-slate-400
          "
          >
            Traffic Sources
          </p>

          <h2
            className="
            mt-3
            text-3xl
            font-bold
            text-slate-900
            dark:text-white
          "
          >
            48.2K
          </h2>
        </div>

        {/* CHART */}
        <div className="h-[250px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={trafficData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {trafficData.map(
                  (entry, index) => (
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
        <div className="mt-6 space-y-4">
          {trafficData.map(
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
                        COLORS[index],
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

export default TrafficChart;