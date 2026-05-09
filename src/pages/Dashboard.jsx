import { statsData } from "../data/dashboardData";

import StatsCard from "../components/dashboard/StatsCard";

import RevenueChart from "../components/dashboard/RevenueChart";

import TrafficChart from "../components/dashboard/TrafficChart";

import RecentActivity from "../components/dashboard/RecentActivity";

import AIInsights from "../components/dashboard/AIInsights";

import TeamPerformance from "../components/dashboard/TeamPerformance";

import UsersTable from "../components/dashboard/UsersTable";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1
          className="
          text-3xl
          font-bold
          text-slate-900
          dark:text-white
        "
        >
          Dashboard Overview
        </h1>

        <p
          className="
          mt-2
          text-slate-600
          dark:text-slate-400
        "
        >
          Monitor business performance and analytics.
        </p>
      </div>

      {/* STATS */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
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