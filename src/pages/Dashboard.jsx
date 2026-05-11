import { statsData } from "../data/dashboardData";

import StatsCard from "../components/dashboard/StatsCard";

import RevenueChart from "../components/dashboard/RevenueChart";

import TrafficChart from "../components/dashboard/TrafficChart";

import RecentActivity from "../components/dashboard/RecentActivity";

import AIInsights from "../components/dashboard/AIInsights";

import TeamPerformance from "../components/dashboard/TeamPerformance";

import UsersTable from "../components/dashboard/UsersTable";
import AppCard from "../components/ui/AppCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
  
 {/* HEADER */}
<AppCard
  glow
  className="
    relative
    overflow-hidden

    p-5
    sm:p-6
  "
>
  {/* GLOW */}
  <div
    className="
    absolute
    top-[-80px]
    right-[-80px]

    w-[180px]
    h-[180px]

    bg-cyan-500/10

    blur-[90px]

    rounded-full
  "
  />

  <div className="relative z-10">
    {/* BADGE */}
    <div
      className="
      inline-flex

      px-3
      py-1

      rounded-full

      bg-cyan-500/10

      text-cyan-500

      text-[11px]
      font-semibold
      tracking-wide
    "
    >
      LIVE ANALYTICS
    </div>

    {/* TITLE */}
    <h1
      className="
      mt-2

      text-2xl
      sm:text-3xl

      font-bold
      tracking-tight

      text-slate-900
      dark:text-white
    "
    >
      Dashboard Overview
    </h1>

    {/* SUBTITLE */}
    <p
      className="
      mt-2

      text-sm
      sm:text-base

      text-slate-600
      dark:text-slate-400
    "
    >
      Monitor business performance and analytics.
    </p>
  </div>
</AppCard>

      {/* STATS */}
      <div
        className="
        grid
        grid-cols-2
xl:grid-cols-4
        md:gap-5
        gap-2

      "
      >
        {statsData.map((item, index) => (
          <StatsCard
            key={item.title}
            {...item}
            index={index}
          />
        ))}
      </div>

      {/* ANALYTICS */}
      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
      "
      >
        {/* REVENUE */}
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        {/* TRAFFIC */}
        <TrafficChart />
      </div>


      {/* LOWER GRID */}
<div
  className="
  grid
  grid-cols-1
  xl:grid-cols-3
  gap-6
"
>
  {/* ACTIVITY */}
  <RecentActivity />

  {/* AI */}
  <AIInsights />

  {/* TEAM */}
  <TeamPerformance />
</div>

{/* USERS TABLE */}
<UsersTable />
    </div>
  );
};

export default Dashboard;