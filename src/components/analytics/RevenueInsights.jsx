import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { useMemo, useState } from "react";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import AppButton from "../ui/AppButton";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const analyticsData = {
  "24H": [
    { name: "1AM", revenue: 1200 },
    { name: "3AM", revenue: 900 },
    { name: "6AM", revenue: 1800 },
    { name: "9AM", revenue: 2600 },
    { name: "12PM", revenue: 4200 },
    { name: "3PM", revenue: 3900 },
    { name: "6PM", revenue: 5800 },
    { name: "9PM", revenue: 5100 },
  ],

  "7D": [
    { name: "Mon", revenue: 4200 },
    { name: "Tue", revenue: 6100 },
    { name: "Wed", revenue: 5400 },
    { name: "Thu", revenue: 7900 },
    { name: "Fri", revenue: 9200 },
    { name: "Sat", revenue: 7600 },
    { name: "Sun", revenue: 9800 },
  ],

  "30D": [
    { name: "Week 1", revenue: 22000 },
    { name: "Week 2", revenue: 18000 },
    { name: "Week 3", revenue: 34000 },
    { name: "Week 4", revenue: 27000 },
  ],

  "12M": [
    { name: "Jan", revenue: 12000 },
    { name: "Feb", revenue: 18000 },
    { name: "Mar", revenue: 15000 },
    { name: "Apr", revenue: 32000 },
    { name: "May", revenue: 28000 },
    { name: "Jun", revenue: 42000 },
    { name: "Jul", revenue: 39000 },
    { name: "Aug", revenue: 58000 },
    { name: "Sep", revenue: 51000 },
    { name: "Oct", revenue: 70000 },
    { name: "Nov", revenue: 66000 },
    { name: "Dec", revenue: 84000 },
  ],
};

const RevenueInsights = () => {
  const [activeFilter, setActiveFilter] =
    useState("7D");

  const chartData = useMemo(() => {
    return analyticsData[activeFilter];
  }, [activeFilter]);

  const totalRevenue = useMemo(() => {
    return chartData.reduce(
      (acc, item) =>
        acc + item.revenue,
      0
    );
  }, [chartData]);

  // REALISTIC METRICS
  const metrics = [
    {
      label: "MRR",
      value: "$48.2K",
      growth: "+12.4%",
      positive: true,
    },

    {
      label: "Conversion",
      value: "18.6%",
      growth: "-2.1%",
      positive: false,
    },

    {
      label: "Retention",
      value: "92.1%",
      growth: "+4.8%",
      positive: true,
    },

    {
      label: "Churn",
      value: "3.4%",
      growth: "+1.2%",
      positive: false,
    },
  ];

  return (
    <Motion
      variant={animations.fadeUp}
      transition={transitions.smooth}
    >
      <AppCard
        className="
        relative
        overflow-hidden
        p-0
      "
      >
        {/* GLOW */}
        <div
          className="
          absolute
          top-[-120px]
          right-[-80px]

          w-[260px]
          h-[260px]

          bg-cyan-500/10

          blur-[120px]

          rounded-full
        "
        />

        {/* HEADER */}
        <div
          className="
          relative
          z-10

          p-6

          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between

          gap-6
        "
        >
          {/* LEFT */}
          <div>
            <p
              className="
              text-sm
              font-medium

              text-slate-500
              dark:text-slate-400
            "
            >
              Revenue Intelligence
            </p>

            <h2
              className="
              mt-3

              text-4xl
              lg:text-5xl

              font-bold

              text-slate-900
              dark:text-white
            "
            >
              $
              {totalRevenue.toLocaleString()}
            </h2>

            <div
              className="
              mt-4

              flex
              items-center
              gap-3
            "
            >
              <StatusBadge status="Active">
                +18.2%
              </StatusBadge>

              <p
                className="
                text-sm

                text-slate-500
                dark:text-slate-400
              "
              >
                Revenue growth this period
              </p>
            </div>
          </div>

          {/* FILTERS */}
          <div
            className="
            flex
            items-center
            gap-2

            p-1

            rounded-2xl

            bg-black/[0.03]
            dark:bg-white/[0.03]

            border
            border-black/5
            dark:border-white/10
          "
          >
            {[
              "24H",
              "7D",
              "30D",
              "12M",
            ].map((item) => (
              <AppButton
                key={item}
                onClick={() =>
                  setActiveFilter(item)
                }
                variant={
                  activeFilter === item
                    ? "primary"
                    : "secondary"
                }
                className="
                h-[42px]
                px-5

                rounded-xl

                text-sm
              "
              >
                {item}
              </AppButton>
            ))}
          </div>
        </div>

        {/* KPI GRID */}
        <div
          className="
          px-6

          grid
          grid-cols-2
          lg:grid-cols-4

          gap-4
        "
        >
          {metrics.map((item) => (
            <AppCard
              key={item.label}
              className="
              rounded-[28px]

              bg-black/[0.03]
              dark:bg-white/[0.03]
            "
            >
              <p
                className="
                text-sm

                text-slate-500
                dark:text-slate-400
              "
              >
                {item.label}
              </p>

              <h3
                className="
                mt-3

                text-3xl
                font-bold

                text-slate-900
                dark:text-white
              "
              >
                {item.value}
              </h3>

              <div className="mt-3">
                <StatusBadge
                  status={
                    item.positive
                      ? "Active"
                      : "Failed"
                  }
                >
                  {item.growth}
                </StatusBadge>
              </div>
            </AppCard>
          ))}
        </div>

        {/* CHART */}
        <div className="h-[420px] px-2 pt-6">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={chartData}>
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
                    stopOpacity={0.45}
                  />

                  <stop
                    offset="100%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

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
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius:
                    "18px",
                  color: "white",
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

        {/* FOOTER INSIGHTS */}
        <div
          className="
          px-6
          pb-6

          grid
          grid-cols-1
          lg:grid-cols-3

          gap-4
        "
        >
          {[
            {
              title:
                "Top Growth Market",
              value:
                "United States",
            },

            {
              title:
                "Highest Conversion",
              value:
                "Enterprise Plan",
            },

            {
              title:
                "Best Revenue Day",
              value: "Friday",
            },
          ].map((item) => (
            <AppCard
              key={item.title}
              className="
              rounded-[28px]

              bg-black/[0.03]
              dark:bg-white/[0.03]
            "
            >
              <p
                className="
                text-sm

                text-slate-500
                dark:text-slate-400
              "
              >
                {item.title}
              </p>

              <h3
                className="
                mt-3

                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
              >
                {item.value}
              </h3>
            </AppCard>
          ))}
        </div>
      </AppCard>
    </Motion>
  );
};

export default RevenueInsights;