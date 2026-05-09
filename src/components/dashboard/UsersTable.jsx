import { useState } from "react";

import {
  FiSearch,
  FiMoreHorizontal,
} from "react-icons/fi";

import { usersTableData } from "../../data/dashboardData";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import AppButton from "../ui/AppButton";

import {
  animations,
  transitions,
} from "../../lib/motion";

const UsersTable = () => {
  const [search, setSearch] =
    useState("");

  const filteredUsers =
    usersTableData.filter((user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <Motion
      variant={animations.fadeUp}
      transition={transitions.smooth}
    >
      <AppCard className="overflow-hidden">
        {/* HEADER */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
        "
        >
          <div>
            <p
              className="
              text-sm
              font-medium
              text-slate-600
              dark:text-slate-400
            "
            >
              User Management
            </p>

            <h2
              className="
              mt-2
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
            >
              Active Customers
            </h2>
          </div>

          {/* SEARCH */}
          <div
            className="
            h-[50px]
            w-full
            lg:w-[280px]

            rounded-2xl

            bg-black/5
            dark:bg-white/5

            border
            border-black/5
            dark:border-white/10

            flex
            items-center

            px-4
          "
          >
            <FiSearch className="text-slate-400" />

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
              bg-transparent
              outline-none

              px-3

              w-full

              text-sm

              text-slate-900
              dark:text-white

              placeholder:text-slate-400
            "
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr
                className="
                border-b
                border-black/5
                dark:border-white/10
              "
              >
                {[
                  "Customer",
                  "Plan",
                  "Status",
                  "Revenue",
                  "",
                ].map((item) => (
                  <th
                    key={item}
                    className="
                    text-left

                    py-4

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

            <tbody>
              {filteredUsers.map(
                (user) => (
                  <tr
                    key={user.id}
                    className="
                    border-b
                    border-black/5
                    dark:border-white/10

                    hover:bg-black/[0.02]
                    dark:hover:bg-white/[0.03]

                    transition
                  "
                  >
                    {/* USER */}
                    <td className="py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://i.pravatar.cc/150?img=${user.id}`}
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
                            {user.name}
                          </h3>

                          <p
                            className="
                            text-sm
                            text-slate-500
                            dark:text-slate-400
                          "
                          >
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* PLAN */}
                    <td>
                      <StatusBadge status="Enterprise">
                        {user.plan}
                      </StatusBadge>
                    </td>

                    {/* STATUS */}
                    <td>
                      <StatusBadge
                        status={
                          user.status
                        }
                      >
                        {user.status}
                      </StatusBadge>
                    </td>

                    {/* REVENUE */}
                    <td
                      className="
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                    >
                      {user.revenue}
                    </td>

                    {/* ACTION */}
                    <td>
                      <AppButton
                        variant="ghost"
                        className="
                        w-10
                        h-10

                        p-0
                      "
                        icon={
                          <FiMoreHorizontal />
                        }
                      />
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

export default UsersTable;