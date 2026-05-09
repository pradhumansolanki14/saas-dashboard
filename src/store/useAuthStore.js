import { create } from "zustand";

const storedAuth =
  localStorage.getItem("isAuthenticated") === "true";

export const useAuthStore = create((set) => ({
  isAuthenticated: storedAuth,

  login: () => {
    localStorage.setItem("isAuthenticated", "true");

    set({
      isAuthenticated: true,
    });
  },

  logout: () => {
    localStorage.removeItem("isAuthenticated");

    set({
      isAuthenticated: false,
    });
  },
}));