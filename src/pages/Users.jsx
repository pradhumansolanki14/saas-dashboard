import { useState } from "react";

import { FiSearch } from "react-icons/fi";

import {
  usersTableData,
} from "../data/usersData";

import UserStats from "../components/users/UserStats";

import UsersTable from "../components/users/UsersTable";

import UserDetailsDrawer from "../components/users/UserDetailsDrawer";


import AppCard from "../components/ui/AppCard";

import StatusBadge from "../components/ui/StatusBadge";

import Motion from "../components/common/Motion";

import {
  animations,
  transitions,
} from "../lib/motion";

const Users = () => {
  const [search, setSearch] =
    useState("");

  const [selectedUser, setSelectedUser] =
    useState(null);

  // SEARCH FILTER
  const filteredUsers =
    usersTableData.filter((user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

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
      USER CONTROL CENTER
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
      Users Management
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
      Manage customers, subscriptions,
      activity, and engagement.
    </p>
  </div>
</AppCard>

      {/* STATS */}
      <Motion
        variant={animations.fadeUp}
        transition={transitions.smooth}
      >
        <UserStats />
      </Motion>

      {/* SEARCH */}
      <Motion
        variant={animations.fadeUp}
        transition={{
          ...transitions.smooth,
          delay: 0.05,
        }}
      >
        <div
          className="
          flex
          items-center
          justify-between

          gap-4
        "
        >
          {/* SEARCH BAR */}
          <div
            className="
            h-[62px]
            w-full
            max-w-[420px]

            px-5

            rounded-[24px]

            bg-white/70
            dark:bg-white/[0.03]

            backdrop-blur-2xl

            border
            border-black/5
            dark:border-white/10

            shadow-lg

            flex
            items-center
            gap-4
          "
          >
            <FiSearch
              className="
              text-slate-400
              text-xl
            "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search users..."
              className="
              flex-1

              bg-transparent
              outline-none

              text-[15px]

              text-slate-900
              dark:text-white

              placeholder:text-slate-400
            "
            />
          </div>

          {/* USERS COUNT */}
          <AppCard
            className="
            hidden
            lg:flex

            items-center
            gap-3

            px-5

            h-[62px]
          "
          >
            <span
              className="
              text-sm
              font-medium

              text-slate-600
              dark:text-slate-300
            "
            >
              Total Results
            </span>

            <StatusBadge status="Enterprise">
              {filteredUsers.length}
            </StatusBadge>
          </AppCard>
        </div>
      </Motion>

      {/* TABLE */}
      <UsersTable
        users={filteredUsers}
        onSelectUser={
          setSelectedUser
        }
      />

      {/* DRAWER */}
      <UserDetailsDrawer
        selectedUser={selectedUser}
        setSelectedUser={
          setSelectedUser
        }
      />
    </div>
  );
};

export default Users;