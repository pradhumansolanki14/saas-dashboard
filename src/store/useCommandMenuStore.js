import { create } from "zustand";

export const useCommandMenuStore =
  create((set) => ({
    open: false,

    setOpen: (value) =>
      set({
        open: value,
      }),
  }));