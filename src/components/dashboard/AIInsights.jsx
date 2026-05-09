import Motion from "../common/Motion";

import AppButton from "../ui/AppButton";

import {
  animations,
  transitions,
} from "../../lib/motion";

const AIInsights = () => {
  return (
    <Motion
      variant={animations.fadeUp}
      transition={{
        ...transitions.smooth,
        delay: 0.1,
      }}
      className="
      relative
      overflow-hidden

      rounded-[32px]

      bg-gradient-to-br
      from-cyan-500
      to-blue-600

      p-6

      shadow-2xl

      text-white
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

        bg-white/20

        blur-[100px]

        rounded-full
      "
      />

      <p className="text-sm font-medium text-white/70">
        AI Insights
      </p>

      <h2
        className="
        mt-4

        text-3xl
        font-bold
        leading-tight
      "
      >
        Revenue is expected to grow
        24% this month
      </h2>

      <p
        className="
        mt-4

        text-white/80
        leading-relaxed
      "
      >
        AI analytics detected strong
        conversion improvements from
        your latest campaign.
      </p>

     <AppButton
  variant="default"
  className="
  mt-8
"
>
  View Report
</AppButton>
    </Motion>
  );
};

export default AIInsights;