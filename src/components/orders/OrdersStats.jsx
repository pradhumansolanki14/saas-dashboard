import { orderStats } from "../../data/ordersData";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const OrdersStats = () => {
  return (
    <div
      className="
      grid
      grid-cols-2
      xl:grid-cols-4

      gap-4
      lg:gap-6
    "
    >
      {orderStats.map(
        (item, index) => (
          <Motion
            key={item.title}
            variant={
              animations.fadeUp
            }
            transition={{
              ...transitions.smooth,
              delay:
                index * 0.08,
            }}
          >
            <AppCard
              className="
              p-4
              sm:p-6
            "
            >
              <p
                className="
                text-xs
                sm:text-sm

                text-slate-600
                dark:text-slate-400
              "
              >
                {item.title}
              </p>

              <div
                className="
                mt-4

                flex
                flex-col
                sm:flex-row

                sm:items-end

                gap-2
                sm:gap-3
              "
              >
                <h2
                  className="
                  text-[28px]
                  sm:text-4xl

                  font-bold
                  tracking-tight

                  text-slate-900
                  dark:text-white
                "
                >
                  {item.value}
                </h2>

                <div className="sm:mb-1">
                  <StatusBadge
                    status={
                      item.growth.includes(
                        "-"
                      )
                        ? "Failed"
                        : "Active"
                    }
                  >
                    {item.growth}
                  </StatusBadge>
                </div>
              </div>
            </AppCard>
          </Motion>
        )
      )}
    </div>
  );
};

export default OrdersStats;