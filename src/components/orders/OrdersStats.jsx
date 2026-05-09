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
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4

      gap-6
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
            <AppCard>
              <p
                className="
                text-sm

                text-slate-600
                dark:text-slate-400
              "
              >
                {item.title}
              </p>

              <div className="mt-4 flex items-end gap-3">
                <h2
                  className="
                  text-4xl
                  font-bold
                  tracking-tight

                  text-slate-900
                  dark:text-white
                "
                >
                  {item.value}
                </h2>

                <div className="mb-1">
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