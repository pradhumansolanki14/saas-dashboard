import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  CartesianGrid,
} from "recharts";

import { revenueChartData } from "../../data/analyticsData";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const RevenueAnalyticsChart = () => {
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

              text-slate-600
              dark:text-slate-400
            "
            >
              Revenue Performance
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
              $824.2K
            </h2>
          </div>

          <StatusBadge status="Active">
            +18.2%
          </StatusBadge>
        </div>

        {/* CHART */}
        <div className="mt-10 h-[350px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart
              data={revenueChartData}
            >
              <defs>
                <linearGradient
                  id="analyticsGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="100%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                strokeOpacity={0.1}
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
              />

              <Tooltip
                contentStyle={{
                  background:
                    "#0f172a",
                  border: "none",
                  borderRadius:
                    "16px",
                  color: "#fff",
                }}
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#06b6d4"
                strokeWidth={4}
                fill="url(#analyticsGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </AppCard>
    </Motion>
  );
};

export default RevenueAnalyticsChart;