import { create } from "zustand";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) return savedTheme;

  return "dark";
};

export const useThemeStore = create((set) => ({
  theme: getInitialTheme(),

  toggleTheme: () =>
    set((state) => {
      const newTheme =
        state.theme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", newTheme);

      return { theme: newTheme };
    }),
}));