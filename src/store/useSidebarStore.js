import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: false,

  openSidebar: () => set({ isOpen: true }),

  closeSidebar: () => set({ isOpen: false }),
}));