import { useState } from "react";

import {
  ordersTableData,
} from "../data/ordersData";

import OrdersStats from "../components/orders/OrdersStats";

import OrdersTable from "../components/orders/OrdersTable";

import SectionHeader from "../components/ui/SectionHeader";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] =
    useState(null);

  return (
    <div className="space-y-6">
    {/* HEADER */}
<div
  className="
  relative
  overflow-hidden

  rounded-[32px]

  bg-white/70
  dark:bg-white/[0.03]

  backdrop-blur-2xl

  border
  border-black/5
  dark:border-white/10

  p-5
  sm:p-6
"
>
  {/* GLOW */}
  <div
    className="
    absolute
    top-[-100px]
    right-[-80px]

    w-[220px]
    h-[220px]

    bg-cyan-500/10

    blur-[100px]

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
      PAYMENT CONTROL
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
      Transactions
    </h1>

    {/* SUBTITLE */}
    <p
      className="
      mt-2

      text-sm
      sm:text-base

      leading-relaxed

      text-slate-600
      dark:text-slate-400
    "
    >
      Manage subscriptions,
      payments, and transaction
      activity.
    </p>
  </div>
</div>

      {/* STATS */}
      <OrdersStats />

      {/* TABLE */}
      <OrdersTable
        orders={ordersTableData}
        setSelectedOrder={
          setSelectedOrder
        }
      />
    </div>
  );
};

export default Orders;