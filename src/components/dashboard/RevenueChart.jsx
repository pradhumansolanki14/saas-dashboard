import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { revenueData } from "../../data/dashboardData";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const RevenueChart = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={transitions.smooth}
    >
      <AppCard
        glow
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
            Revenue Analytics
          </p>

          <div className="mt-3 flex items-end gap-3">
            <h2
              className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
            >
              $128.4K
            </h2>

            <div className="mb-1">
              <StatusBadge status="Active">
                +18.2%
              </StatusBadge>
            </div>
          </div>
        </div>

        {/* CHART */}
        <div className="h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient
                  id="colorRevenue"
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

              <XAxis
                dataKey="month"
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
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </AppCard>
    </Motion>
  );
};

export default RevenueChart;