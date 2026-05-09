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
      <SectionHeader
        title="Transactions"
        subtitle="Manage subscriptions, payments, and transaction activity."
      />

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