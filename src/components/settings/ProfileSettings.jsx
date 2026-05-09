import Motion from "../common/Motion";

import AppCard from "../ui/AppCard";

import AppButton from "../ui/AppButton";

import {
  animations,
  transitions,
} from "../../lib/motion";

const ProfileSettings = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={transitions.smooth}
    >
      <AppCard>
        {/* HEADER */}
        <div>
          <h2
            className="
            text-2xl
            font-bold

            text-slate-900
            dark:text-white
          "
          >
            Profile Settings
          </h2>

          <p
            className="
            mt-2

            text-slate-600
            dark:text-slate-400
          "
          >
            Manage your account information and
            profile details.
          </p>
        </div>

        {/* PROFILE */}
        <div className="mt-8 flex items-center gap-5">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="
            w-24
            h-24

            rounded-3xl

            object-cover

            ring-4
            ring-cyan-500/10
          "
          />

          <div>
            <AppButton
              variant="primary"
              className="
              h-[48px]
              px-5
            "
            >
              Upload New
            </AppButton>

            <p
              className="
              mt-3

              text-sm

              text-slate-500
              dark:text-slate-400
            "
            >
              Recommended size 400x400px.
            </p>
          </div>
        </div>

        {/* FORM */}
        <div
          className="
          mt-10

          grid
          grid-cols-1
          md:grid-cols-2

          gap-5
        "
        >
          {[
            {
              label: "Full Name",
              value: "Alex Morgan",
            },

            {
              label: "Email Address",
              value: "alex@saasify.com",
            },

            {
              label: "Company",
              value: "SaaSify Inc.",
            },

            {
              label: "Role",
              value: "Product Manager",
            },
          ].map((item) => (
            <div key={item.label}>
              <label
                className="
                text-sm
                font-medium

                text-slate-700
                dark:text-slate-300
              "
              >
                {item.label}
              </label>

              <input
                type="text"
                defaultValue={item.value}
                className="
                mt-2

                w-full
                h-[54px]

                rounded-2xl

                bg-black/[0.03]
                dark:bg-white/[0.03]

                border
                border-black/5
                dark:border-white/10

                px-4

                outline-none

                text-slate-900
                dark:text-white

                transition-all

                focus:border-cyan-500/40
                focus:ring-4
                focus:ring-cyan-500/10
              "
              />
            </div>
          ))}
        </div>

        {/* ACTION */}
        <AppButton
          variant="primary"
          className="
          mt-8

          h-[54px]
          px-6
        "
        >
          Save Changes
        </AppButton>
      </AppCard>
    </Motion>
  );
};

export default ProfileSettings;