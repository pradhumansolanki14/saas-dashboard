import Motion from "../common/Motion";

import AppButton from "../ui/AppButton";

import {
  animations,
  transitions,
} from "../../lib/motion";

const BillingSettings = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: 0.1,
      }}
    >
      <div
        className="
        relative
        overflow-hidden

        rounded-[32px]

        bg-gradient-to-br
        from-cyan-500
        to-blue-600

        p-6

        text-white

        shadow-2xl
      "
      >
        {/* GLOW */}
        <div
          className="
          absolute
          top-[-100px]
          right-[-100px]

          w-[240px]
          h-[240px]

          bg-white/20

          blur-[100px]

          rounded-full
        "
        />

        {/* CONTENT */}
        <div className="relative z-10">
          <p className="text-white/70">
            Current Plan
          </p>

          <h2
            className="
            mt-3

            text-4xl
            font-bold
          "
          >
            Enterprise
          </h2>

          <p
            className="
            mt-4

            leading-relaxed

            text-white/80
          "
          >
            Unlimited users, analytics, AI
            insights, and advanced integrations.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-3">
            {[
              "Unlimited team members",
              "Advanced analytics",
              "AI-powered insights",
              "Priority support",
            ].map((item) => (
              <div
                key={item}
                className="
                flex
                items-center
                gap-3
              "
              >
                <div
                  className="
                  w-2.5
                  h-2.5

                  rounded-full

                  bg-white
                "
                />

                <p className="text-sm text-white/90">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* ACTION */}
          <AppButton
            variant="glass"
            className="
            mt-8

            h-[54px]
            px-6

            bg-white
            text-black

            hover:scale-[1.02]
          "
          >
            Upgrade Plan
          </AppButton>
        </div>
      </div>
    </Motion>
  );
};

export default BillingSettings;