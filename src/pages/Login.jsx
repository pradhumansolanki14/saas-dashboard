import { FiMail, FiLock } from "react-icons/fi";

import Motion from "../components/common/Motion";

import {
  animations,
  transitions,
} from "../lib/motion";

import { useAuthStore } from "../store/useAuthStore";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();

    login();

    navigate("/");
  };

  return (
    <div
      className="
      min-h-screen
      relative
      overflow-hidden
      bg-slate-100
      dark:bg-[#020617]
      flex
      items-center
      justify-center
      px-4
      transition-colors
      duration-300
    "
    >
      {/* GLOW */}
      <div
        className="
        absolute
        top-[-150px]
        left-[-100px]
        w-[400px]
        h-[400px]
        bg-cyan-500/20
        blur-[120px]
        rounded-full
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        right-[-100px]
        w-[400px]
        h-[400px]
        bg-violet-500/20
        blur-[120px]
        rounded-full
      "
      />

      <Motion
        variant={animations.scale}
        transition={transitions.smooth}
        className="
        relative
        z-10
        w-full
        max-w-md
        rounded-[32px]
        bg-white/70
        dark:bg-white/5
        backdrop-blur-2xl
        border
        border-black/5
        dark:border-white/10
        shadow-2xl
        p-8
      "
      >
        {/* LOGO */}
        <div className="mb-10">
          <h1
            className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
          >
            SaaSify
          </h1>

          <p
            className="
            mt-2
            text-slate-600
            dark:text-slate-400
          "
          >
            Welcome back to your dashboard
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          {/* EMAIL */}
          <div>
            <label
              className="
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
            "
            >
              Email
            </label>

            <div
              className="
              mt-2
              h-[56px]
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
              <FiMail className="text-slate-400" />

              <input
                type="email"
                placeholder="admin@example.com"
                className="
                bg-transparent
                outline-none
                px-3
                w-full
                text-slate-900
                dark:text-white
                placeholder:text-slate-400
              "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label
              className="
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
            "
            >
              Password
            </label>

            <div
              className="
              mt-2
              h-[56px]
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
              <FiLock className="text-slate-400" />

              <input
                type="password"
                placeholder="••••••••"
                className="
                bg-transparent
                outline-none
                px-3
                w-full
                text-slate-900
                dark:text-white
                placeholder:text-slate-400
              "
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
            w-full
            h-[56px]
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            text-white
            font-semibold
            text-lg
            shadow-lg
            shadow-cyan-500/20
            hover:scale-[1.01]
            transition
          "
          >
            Sign In
          </button>
        </form>
      </Motion>
    </div>
  );
};

export default Login;