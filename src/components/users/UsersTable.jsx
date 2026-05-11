import {
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
  FiTrash2,
} from "react-icons/fi";

import { useMemo, useState } from "react";

import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import AppButton from "../ui/AppButton";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const ITEMS_PER_PAGE = 7;

const avatarFallbacks = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
];

const UsersTable = ({
  users,
  onSelectUser,
}) => {
  const [filter, setFilter] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [selectedUsers, setSelectedUsers] =
    useState([]);

  // FILTER USERS
  const filteredUsers = useMemo(() => {
    if (filter === "All")
      return users;

    if (filter === "Enterprise") {
      return users.filter(
        (user) =>
          user.plan === "Enterprise"
      );
    }

    return users.filter(
      (user) =>
        user.status === filter
    );
  }, [users, filter]);

  // PAGINATION
  const totalPages = Math.ceil(
    filteredUsers.length /
      ITEMS_PER_PAGE
  );

  const paginatedUsers =
    filteredUsers.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,
      currentPage *
        ITEMS_PER_PAGE
    );

  // SELECT
  const toggleSelect = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id)
        ? prev.filter(
            (item) => item !== id
          )
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (
      selectedUsers.length ===
      paginatedUsers.length
    ) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(
        paginatedUsers.map(
          (user) => user.id
        )
      );
    }
  };

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
        relative
        overflow-hidden
        p-0
      "
      >
        {/* TOP GLOW */}
        <div
          className="
          absolute
          top-[-150px]
          right-[-100px]

          w-[300px]
          h-[300px]

          bg-cyan-500/10

          blur-[120px]

          rounded-full
        "
        />

        {/* HEADER */}
        <div
          className="
          relative
          z-10

          p-2
          sm:p-6

          border-b
          border-black/5
          dark:border-white/10
          
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between

          gap-5
        "
        >
          {/* TITLE */}
          <div>
            <h2
              className="
              text-2xl
              md:text-3xl

              font-bold
              tracking-tight

              text-slate-900
              dark:text-white
            "
            >
              Users Management
            </h2>

            <p
              className="
              mt-1
              text-sm

              text-slate-500
              dark:text-slate-400
            "
            >
              Manage enterprise
              customers.
            </p>
          </div>

          {/* ACTIONS */}
          <div
            className="
            flex
            flex-col
            sm:flex-row

            items-stretch
            sm:items-center
           
            gap-2
  
            w-full
            xl:w-auto
          "
          >
            {/* FILTERS */}
            <div
              className="
             flex
items-center

w-full

              gap-2

              w-full

              p-1

              rounded-2xl

              bg-black/[0.03]
              dark:bg-white/[0.03]

              border
              border-black/5
              dark:border-white/10
            "
            >
              {[
                "All",
                "Active",
                "Pending",
                "Enterprise",
              ].map((status) => (
                <AppButton
                  key={status}
                  onClick={() =>
                    setFilter(status)
                  }
                  className={`
                    h-[40px]

                    px-3
                    sm:px-5

                    text-xs
                    sm:text-sm

                    flex-1

                    rounded-xl

                    font-medium

                    ${
                      filter === status
                        ? "!bg-gradient-to-r !from-cyan-500 !to-blue-500 !text-white shadow-lg shadow-cyan-500/20"
                        : ""
                    }
                  `}
                  variant={
                    filter === status
                      ? "primary"
                      : "ghost"
                  }
                >
                  {status}
                </AppButton>
              ))}
            </div>

            {/* EXPORT */}
            <AppButton
              className="
              w-full
              sm:w-auto
            "
            >
              <FiDownload />

              Export
            </AppButton>
          </div>
        </div>

        {/* BULK ACTIONS */}
        {selectedUsers.length >
          0 && (
          <div
            className="
            px-4
            sm:px-6

            py-4

            border-b
            border-black/5
            dark:border-white/10

            bg-cyan-500/5

            flex
            items-center
            justify-between
          "
          >
            <p
              className="
              text-sm
              font-medium

              text-cyan-600
              dark:text-cyan-400
            "
            >
              {
                selectedUsers.length
              }{" "}
              users selected
            </p>

            <AppButton variant="danger">
              <FiTrash2 />

              Delete
            </AppButton>
          </div>
        )}

        {/* MOBILE CARDS */}
        <div className="block md:hidden mt-5 space-y-4">
          {paginatedUsers.map(
            (user, index) => (
              <div
                key={user.id}
                onClick={() =>
                  onSelectUser(user)
                }
                className="
                p-3

                rounded-[28px]

                bg-black/[0.03]
                dark:bg-white/[0.03]

                border
                border-black/5
                dark:border-white/10

                space-y-4
              "
              >
                {/* TOP */}
                <div className="flex items-center gap-4">
                  <img
                    src={
                      user.avatar ||
                      avatarFallbacks[
                        index %
                          avatarFallbacks.length
                      ]
                    }
                    alt=""
                    className="
                    w-14
                    h-14

                    rounded-2xl

                    object-cover
                  "
                  />

                  <div className="flex-1 min-w-0">
                    <h3
                      className="
                      font-semibold

                      truncate

                      text-slate-900
                      dark:text-white
                    "
                    >
                      {user.name}
                    </h3>

                    <p
                      className="
                      text-sm

                      truncate

                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      {user.email}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(
                      user.id
                    )}
                    onChange={(e) => {
                      e.stopPropagation();

                      toggleSelect(
                        user.id
                      );
                    }}
                  />
                </div>

                {/* GRID */}
                <div
                  className="
                  grid
                  grid-cols-2

                  gap-4
                "
                >
                  <div>
                    <p
                      className="
                      text-xs

                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      Role
                    </p>

                    <h4
                      className="
                      mt-1

                      font-medium

                      text-slate-900
                      dark:text-white
                    "
                    >
                      {user.role}
                    </h4>
                  </div>

                  <div>
                    <p
                      className="
                      text-xs

                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      Revenue
                    </p>

                    <h4
                      className="
                      mt-1

                      font-semibold

                      text-slate-900
                      dark:text-white
                    "
                    >
                      {user.revenue}
                    </h4>
                  </div>

                  <div>
                    <p
                      className="
                      text-xs

                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      Plan
                    </p>

                    <div className="mt-2">
                      <StatusBadge status="Enterprise">
                        {user.plan}
                      </StatusBadge>
                    </div>
                  </div>

                  <div>
                    <p
                      className="
                      text-xs

                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      Status
                    </p>

                    <div className="mt-2">
                      <StatusBadge
                        status={
                          user.status
                        }
                      >
                        {user.status}
                      </StatusBadge>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* DESKTOP TABLE */}
        <div
          className="
          hidden
          md:block

          overflow-x-auto
        "
        >
          <table className="w-full">
            {/* HEAD */}
            <thead
              className="
              sticky
              top-0

              bg-white/90
              dark:bg-[#0f172a]/90

              backdrop-blur-xl

              z-10
            "
            >
              <tr
                className="
                border-b
                border-black/5
                dark:border-white/10
              "
              >
                <th className="px-6 py-5 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedUsers.length ===
                        paginatedUsers.length &&
                      paginatedUsers.length >
                        0
                    }
                    onChange={
                      toggleSelectAll
                    }
                  />
                </th>

                {[
                  "User",
                  "Role",
                  "Plan",
                  "Revenue",
                  "Status",
                ].map((item) => (
                  <th
                    key={item}
                    className="
                    px-6
                    py-5

                    text-left

                    text-xs
                    font-bold
                    uppercase
                    tracking-wider

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
              {paginatedUsers.map(
                (user, index) => (
                  <tr
                    key={user.id}
                    onClick={() =>
                      onSelectUser(user)
                    }
                    className="
                    border-b
                    border-black/5
                    dark:border-white/10

                    cursor-pointer

                    transition-all

                    hover:bg-black/[0.03]
                    dark:hover:bg-white/[0.03]
                  "
                  >
                    {/* CHECKBOX */}
                    <td className="px-6 py-5">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(
                          user.id
                        )}
                        onChange={(e) => {
                          e.stopPropagation();

                          toggleSelect(
                            user.id
                          );
                        }}
                      />
                    </td>

                    {/* USER */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={
                            user.avatar ||
                            avatarFallbacks[
                              index %
                                avatarFallbacks.length
                            ]
                          }
                          onError={(e) => {
                            e.target.src =
                              avatarFallbacks[
                                index %
                                  avatarFallbacks.length
                              ];
                          }}
                          alt=""
                          className="
                          w-12
                          h-12

                          rounded-2xl

                          object-cover

                          ring-2
                          ring-white/10
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
                            mt-1
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

                    {/* ROLE */}
                    <td
                      className="
                      px-6
                      py-5

                      text-slate-700
                      dark:text-slate-300
                    "
                    >
                      {user.role}
                    </td>

                    {/* PLAN */}
                    <td className="px-6 py-5">
                      <StatusBadge status="Enterprise">
                        {user.plan}
                      </StatusBadge>
                    </td>

                    {/* REVENUE */}
                    <td
                      className="
                      px-6
                      py-5

                      font-semibold

                      text-slate-900
                      dark:text-white
                    "
                    >
                      {user.revenue}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <StatusBadge
                        status={
                          user.status
                        }
                      >
                        {user.status}
                      </StatusBadge>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* EMPTY */}
        {paginatedUsers.length ===
          0 && (
          <div
            className="
            py-20
            text-center
          "
          >
            <h3
              className="
              text-xl
              font-semibold

              text-slate-900
              dark:text-white
            "
            >
              No users found
            </h3>

            <p
              className="
              mt-2

              text-slate-500
              dark:text-slate-400
            "
            >
              Try another filter.
            </p>
          </div>
        )}

        {/* FOOTER */}
       <div
  className="
  px-4
  sm:px-6

  py-5

  border-t
  border-black/5
  dark:border-white/10

  flex
  flex-col
  sm:flex-row

  items-end
  sm:items-center

  gap-4

  justify-between
"
>
         <p
  className="
  text-sm

  text-right
  sm:text-left

  text-slate-500
  dark:text-slate-400
"
>
            Showing{" "}
            {
              paginatedUsers.length
            }{" "}
            of{" "}
            {
              filteredUsers.length
            }{" "}
            users
          </p>

          {/* PAGINATION */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              disabled={
                currentPage === 1
              }
              onClick={() =>
                setCurrentPage(
                  (prev) =>
                    prev - 1
                )
              }
              className="
              w-11
              h-11

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
            "
            >
              <FiChevronLeft />
            </button>

            <div
              className="
              px-4

              text-sm
              font-medium

              text-slate-700
              dark:text-slate-300
            "
            >
              {currentPage} /{" "}
              {totalPages}
            </div>

            <button
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                setCurrentPage(
                  (prev) =>
                    prev + 1
                )
              }
              className="
              w-11
              h-11

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
            "
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </AppCard>
    </Motion>
  );
};

export default UsersTable;