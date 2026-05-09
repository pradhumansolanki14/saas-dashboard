import {
  AnimatePresence,
} from "framer-motion";

import {
  FiX,
} from "react-icons/fi";

import Motion from "../common/Motion";

import AppButton from "../ui/AppButton";

import AppCard from "../ui/AppCard";

import StatusBadge from "../ui/StatusBadge";

import {
  animations,
  transitions,
} from "../../lib/motion";

const UserDetailsDrawer = ({
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <AnimatePresence>
      {selectedUser && (
        <>
          {/* OVERLAY */}
          <Motion
            variant={animations.fade}
            transition={
              transitions.smooth
            }
            onClick={() =>
              setSelectedUser(null)
            }
            className="
            fixed
            top-0
            left-0

            w-screen
            h-dvh

            bg-black/50

            backdrop-blur-xl

            supports-[backdrop-filter]:bg-black/40

            z-[100]
          "
          />

          {/* DRAWER */}
          <Motion
            variant={
              animations.fadeLeft
            }
            transition={
              transitions.smooth
            }
            className="
            fixed
            top-0
            right-0

            h-screen
            w-full
            sm:w-[430px]

            bg-white/75
            dark:bg-[#071018]/75

            backdrop-blur-3xl

            border-l
            border-black/5
            dark:border-white/10

            z-[101]

            overflow-y-auto
            overscroll-contain

            shadow-2xl

            [scrollbar-width:none]
            [-ms-overflow-style:none]
          "
          >
            {/* HIDE SCROLLBAR */}
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {/* HEADER */}
            <div
              className="
              sticky
              top-0
              z-20

              px-6
              py-5

              border-b
              border-black/5
              dark:border-white/10

              bg-white/70
              dark:bg-[#071018]/80

              backdrop-blur-xl

              flex
              items-center
              justify-between
            "
            >
              <div>
                <h2
                  className="
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
                >
                  User Details
                </h2>

                <p
                  className="
                  mt-1
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
                >
                  Manage customer
                  information
                </p>
              </div>

              {/* CLOSE BUTTON */}
            <button
  onClick={() =>
    setSelectedUser(null)
  }
  className="
  w-11
  h-11

  rounded-2xl

  bg-black/5
  dark:bg-white/5

  border
  border-black/5
  dark:border-white/10

  flex
  items-center
  justify-center

  text-slate-700
  dark:text-white

  transition

  hover:rotate-90
"
>
  <FiX size={20} />
</button>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              {/* PROFILE */}
              <AppCard
                className="
                bg-black/[0.03]
                dark:bg-white/[0.03]
              "
              >
                <div className="flex items-center gap-5">
                  <img
                    src={`https://i.pravatar.cc/150?img=${selectedUser.id}`}
                    alt=""
                    className="
                    w-24
                    h-24

                    rounded-3xl

                    object-cover

                    shadow-xl
                  "
                  />

                  <div>
                    <h2
                      className="
                      text-3xl
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                    >
                      {
                        selectedUser.name
                      }
                    </h2>

                    <p
                      className="
                      mt-2
                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      {
                        selectedUser.email
                      }
                    </p>

                    <div className="mt-4">
                      <StatusBadge
                        status={
                          selectedUser.status
                        }
                      >
                        {
                          selectedUser.status
                        }
                      </StatusBadge>
                    </div>
                  </div>
                </div>
              </AppCard>

              {/* INFO GRID */}
              <div
                className="
                mt-6

                grid
                grid-cols-1
                sm:grid-cols-2

                gap-4
              "
              >
                {[
                  {
                    label: "Role",
                    value:
                      selectedUser.role,
                  },

                  {
                    label:
                      "Subscription",
                    value:
                      selectedUser.plan,
                  },

                  {
                    label: "Revenue",
                    value:
                      selectedUser.revenue,
                  },

                  {
                    label: "Activity",
                    value:
                      selectedUser.activity,
                  },
                ].map((item) => (
                  <AppCard
                    key={item.label}
                    className="
                    bg-black/[0.03]
                    dark:bg-white/[0.03]

                    rounded-[28px]
                  "
                    padding="p-5"
                  >
                    <p
                      className="
                      text-sm
                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      {item.label}
                    </p>

                    <h3
                      className="
                      mt-3
                      text-xl
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                    >
                      {item.value}
                    </h3>
                  </AppCard>
                ))}
              </div>

              {/* RECENT ACTIVITY */}
              <AppCard
                className="
                mt-6

                bg-black/[0.03]
                dark:bg-white/[0.03]
              "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
                >
                  Recent Activity
                </h3>

                <div className="mt-6 space-y-5">
                  {[
                    "Logged into dashboard",
                    "Updated billing information",
                    "Created new workspace",
                    "Invited 3 team members",
                  ].map(
                    (
                      item,
                      index
                    ) => (
                      <div
                        key={index}
                        className="
                        flex
                        items-center
                        gap-4
                      "
                      >
                        <div
                          className="
                          w-3
                          h-3

                          rounded-full

                          bg-cyan-500
                        "
                        />

                        <p
                          className="
                          text-sm
                          text-slate-700
                          dark:text-slate-300
                        "
                        >
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </AppCard>

              {/* FOOTER BUTTONS */}
              <div className="mt-6 flex gap-4">
                <AppButton className="flex-1">
                  Edit User
                </AppButton>

                <AppButton
                  variant="secondary"
                  onClick={() =>
                    setSelectedUser(
                      null
                    )
                  }
                  className="flex-1"
                >
                  Close
                </AppButton>
              </div>
            </div>
          </Motion>
        </>
      )}
    </AnimatePresence>
  );
};

export default UserDetailsDrawer;