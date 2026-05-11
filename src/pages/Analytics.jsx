import { useState } from "react";

import RevenueAnalyticsChart from "../components/analytics/RevenueAnalyticsChart";

import TrafficSources from "../components/analytics/TrafficSources";

import RevenueInsights from "../components/analytics/RevenueInsights";

import Motion from "../components/common/Motion";

import SectionHeader from "../components/ui/SectionHeader";

import AppButton from "../components/ui/AppButton";

import AppCard from "../components/ui/AppCard";

import StatusBadge from "../components/ui/StatusBadge";

import {
  animations,
  transitions,
} from "../lib/motion";

import {
  analyticsOverviewData,
  analyticsFilters,
  countriesData,
  aiAnalyticsInsight,
} from "../data/analyticsData";

const Analytics = () => {
  const [activeFilter, setActiveFilter] =
    useState("30 Days");

  const currentData =
    analyticsOverviewData[activeFilter];

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

  <div
    className="
    relative
    z-10

    flex
    flex-col
    lg:flex-row
    lg:items-center
    lg:justify-between

    gap-5
  "
  >
    {/* LEFT */}
    <div>
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
        LIVE INSIGHTS
      </div>

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
        Analytics
      </h1>

      <p
        className="
        mt-2

        text-sm
        sm:text-base

        text-slate-600
        dark:text-slate-400
      "
      >
        Deep platform insights and business intelligence.
      </p>
    </div>

    {/* FILTERS */}
    <div
      className="
      flex
      items-center
      md:gap-2
    

      overflow-x-auto
    justify-between

      [scrollbar-width:none]
      [-ms-overflow-style:none]
    "
    >
      {analyticsFilters.map((filter) => (
        <AppButton
          key={filter}
          onClick={() =>
            setActiveFilter(filter)
          }
          variant={
            activeFilter === filter
              ? "primary"
              : "secondary"
          }
          className="
          h-[44px]
          p-2.5
          text-xs
          md:text-sm
          
          whitespace-nowrap

          shrink-0
        "
        >
          {filter}
        </AppButton>
      ))}
    </div>
  </div>
</AppCard>

      {/* HERO */}
      <Motion
        variant={
          animations.fadeUp
        }
        transition={
          transitions.smooth
        }
        className="
        relative
        overflow-hidden

        rounded-[36px]

        bg-gradient-to-br
        from-cyan-500
        via-blue-500
        to-violet-600

        p-6
        lg:p-8

        shadow-2xl

        text-white
      "
      >
        {/* GLOW */}
        <div
          className="
          absolute
          top-[-80px]
          right-[-80px]

          w-[220px]
          h-[220px]

          bg-white/20

          blur-[100px]

          rounded-full
        "
        />

        <div
          className="
          relative
          z-10

          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between

          gap-8
        "
        >
          {/* LEFT */}
          <div>
            <p className="text-sm text-white/70">
              Analytics Overview
            </p>

            <h1
              className="
              mt-3

              text-3xl
              lg:text-5xl

              font-bold
              leading-tight
            
            "
            >
              {
                currentData.revenue
              }
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StatusBadge status="" className=" border-1 border-gray-300">
                {
                  currentData.growth
                }
              </StatusBadge>

              <p className="text-white/70 text-sm">
                Revenue growth
                this period
              </p>
            </div>
          </div>

          {/* RIGHT STATS */}
        <div
  className="
  flex
  items-stretch
  justify-between
  -mt-2 md:mt-0
  gap-2
  md:gap-4

  w-full
  xl:w-auto
"
>
  {[
    {
      label: "Visitors",
      value: currentData.visitors,
    },

    {
      label: "Avg Session",
      value: currentData.session,
    },

    {
      label: "Countries",
      value: currentData.countries,
    },
  ].map((item) => (
    <div
      key={item.label}
      className="
      flex-1
      xl:flex-none

      xl:min-w-[110px]

      rounded-3xl

      bg-white/10

      backdrop-blur-xl

      border
      border-white/10

      p-2.5
      md:p-4
    "
    >
      <h2
        className="
        text-lg
        md:text-2xl

        font-bold
      "
      >
        {item.value}
      </h2>

      <p
        className="
        mt-1

        text-[11px]
        md:text-xs

        text-white/70
      "
      >
        {item.label}
      </p>
    </div>
  ))}
</div>
        </div>
      </Motion>

      {/* REVENUE INSIGHTS */}
      <RevenueInsights />

      {/* CHART GRID */}
      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-3

        gap-6
      "
      >
        {/* REVENUE CHART */}
        <div className="xl:col-span-2">
          <RevenueAnalyticsChart />
        </div>

        {/* TRAFFIC */}
        <TrafficSources />
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
        {/* COUNTRY PERFORMANCE */}
        <Motion
          variant={
            animations.fadeUp
          }
          transition={
            transitions.smooth
          }
        >
          <AppCard className="xl:col-span-2">
            <div>
              <p
                className="
                text-sm

                text-slate-600
                dark:text-slate-400
              "
              >
                Global Traffic
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
                Top Performing
                Countries
              </h2>
            </div>

            <div className="mt-10 space-y-6">
              {countriesData.map(
                (country) => (
                  <div
                    key={
                      country.name
                    }
                    className="
                    flex
                    items-center
                    justify-between
                  "
                  >
                    <div>
                      <h3
                        className="
                        font-semibold

                        text-slate-900
                        dark:text-white
                      "
                      >
                        {
                          country.name
                        }
                      </h3>

                      <p
                        className="
                        mt-1

                        text-sm

                        text-slate-500
                        dark:text-slate-400
                      "
                      >
                        {
                          country.users
                        }{" "}
                        active users
                      </p>
                    </div>

                    <StatusBadge status="Active">
                      {
                        country.growth
                      }
                    </StatusBadge>
                  </div>
                )
              )}
            </div>
          </AppCard>
        </Motion>

        {/* AI INSIGHT */}
        <Motion
          variant={
            animations.fadeUp
          }
          transition={{
            ...transitions.smooth,
            delay: 0.1,
          }}
          className="
          rounded-[32px]

          bg-gradient-to-br
          from-violet-500
          to-fuchsia-600

          p-6

          text-white

          shadow-2xl

          relative
          overflow-hidden
        "
        >
          <div
            className="
            absolute
            top-[-80px]
            right-[-80px]

            w-[220px]
            h-[220px]

            bg-white/20

            blur-[100px]

            rounded-full
          "
          />

          <div className="relative z-10">
            <p className="text-sm text-white/70">
              AI Analysis
            </p>

            <h2
              className="
              mt-4

              text-3xl
              font-bold
              leading-tight
            "
            >
              {
                aiAnalyticsInsight.title
              }
            </h2>

            <p
              className="
              mt-5

              text-white/80

              leading-relaxed
            "
            >
              {
                aiAnalyticsInsight.description
              }
            </p>

            <AppButton
              variant="default"
              className="
              mt-8
            "
            >
              {
                aiAnalyticsInsight.buttonText
              }
            </AppButton>
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default Analytics;