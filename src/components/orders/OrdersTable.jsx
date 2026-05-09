import {
  FiEye,
  FiMoreHorizontal,
} from "react-icons/fi";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const OrdersTable = ({
  orders,
  setSelectedOrder,
}) => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: 0.1,
      }}
    >
      <AppCard
        className="
        overflow-hidden
        p-0
      "
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            {/* HEAD */}
            <thead>
              <tr
                className="
                border-b
                border-black/5
                dark:border-white/10
              "
              >
                {[
                  "Transaction",
                  "Customer",
                  "Plan",
                  "Amount",
                  "Payment",
                  "Date",
                  "Status",
                  "Actions",
                ].map((item) => (
                  <th
                    key={item}
                    className="
                    px-6
                    py-5

                    text-left

                    text-sm
                    font-medium

                    text-slate-500
                    dark:text-slate-400
                  "
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {orders.map(
                (order, index) => (
                  <tr
                    key={index}
                    className="
                    border-b
                    border-black/5
                    dark:border-white/10

                    hover:bg-black/[0.02]
                    dark:hover:bg-white/[0.03]

                    transition
                  "
                  >
                    {/* TRANSACTION */}
                    <td
                      className="
                      px-6
                      py-5

                      font-semibold

                      text-slate-900
                      dark:text-white
                    "
                    >
                      {order.id}
                    </td>

                    {/* CUSTOMER */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://i.pravatar.cc/150?img=${
                            index + 10
                          }`}
                          alt=""
                          className="
                          w-12
                          h-12

                          rounded-2xl

                          object-cover
                        "
                        />

                        <div>
                          <h3
                            className="
                            font-semibold

                            text-slate-900
                            dark:text-white
                          "
                          >
                            {
                              order.customer
                            }
                          </h3>

                          <p
                            className="
                            text-sm

                            text-slate-500
                            dark:text-slate-400
                          "
                          >
                            {order.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* PLAN */}
                    <td className="px-6 py-5">
                      <StatusBadge status="Enterprise">
                        {order.plan}
                      </StatusBadge>
                    </td>

                    {/* AMOUNT */}
                    <td
                      className="
                      px-6
                      py-5

                      font-semibold

                      text-slate-900
                      dark:text-white
                    "
                    >
                      {order.amount}
                    </td>

                    {/* PAYMENT */}
                    <td
                      className="
                      px-6
                      py-5

                      text-slate-700
                      dark:text-slate-300
                    "
                    >
                      {order.payment}
                    </td>

                    {/* DATE */}
                    <td
                      className="
                      px-6
                      py-5

                      text-slate-700
                      dark:text-slate-300
                    "
                    >
                      {order.date}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <StatusBadge
                        status={
                          order.status ===
                          "Paid"
                            ? "Active"
                            : order.status ===
                              "Pending"
                            ? "Pending"
                            : order.status ===
                              "Refunded"
                            ? "Pro"
                            : "Failed"
                        }
                      >
                        {order.status}
                      </StatusBadge>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        {/* VIEW */}
                        <button
                          onClick={() =>
                            setSelectedOrder(
                              order
                            )
                          }
                          className="
                          w-10
                          h-10

                          rounded-2xl

                          bg-black/[0.03]
                          dark:bg-white/[0.03]

                          border
                          border-black/5
                          dark:border-white/10

                          flex
                          items-center
                          justify-center

                          text-slate-700
                          dark:text-slate-300

                          transition-all
                          duration-300

                          hover:bg-black/[0.05]
                          dark:hover:bg-white/[0.05]
                        "
                        >
                          <FiEye size={18} />
                        </button>

                        {/* MORE */}
                        <button
                          className="
                          w-10
                          h-10

                          rounded-2xl

                          bg-black/[0.03]
                          dark:bg-white/[0.03]

                          border
                          border-black/5
                          dark:border-white/10

                          flex
                          items-center
                          justify-center

                          text-slate-700
                          dark:text-slate-300

                          transition-all
                          duration-300

                          hover:bg-black/[0.05]
                          dark:hover:bg-white/[0.05]
                        "
                        >
                          <FiMoreHorizontal
                            size={18}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </AppCard>
    </Motion>
  );
};

export default OrdersTable;