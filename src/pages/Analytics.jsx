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
      <div
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between

        gap-5
      "
      >
        <SectionHeader
          title="Analytics"
          subtitle="Deep platform insights and business intelligence."
        />

        {/* FILTERS */}
        <div
          className="
          flex
          items-center
          gap-2

          overflow-x-auto
        "
        >
          {analyticsFilters.map(
            (filter) => (
              <AppButton
                key={filter}
                onClick={() =>
                  setActiveFilter(
                    filter
                  )
                }
                variant={
                  activeFilter ===
                  filter
                    ? "primary"
                    : "secondary"
                }
                className="
                h-[46px]
                px-5

                text-sm

                whitespace-nowrap
              "
              >
                {filter}
              </AppButton>
            )
          )}
        </div>
      </div>

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
              <StatusBadge status="Pro">
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
            grid
            grid-cols-3

            gap-4

            w-full
            xl:w-auto
          "
          >
            {[
              {
                label:
                  "Visitors",
                value:
                  currentData.visitors,
              },

              {
                label:
                  "Avg Session",
                value:
                  currentData.session,
              },

              {
                label:
                  "Countries",
                value:
                  currentData.countries,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                min-w-[110px]

                rounded-3xl

                bg-white/10

                backdrop-blur-xl

                border
                border-white/10

                p-4
              "
              >
                <h2
                  className="
                  text-2xl
                  font-bold
                "
                >
                  {item.value}
                </h2>

                <p
                  className="
                  mt-1

                  text-xs

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