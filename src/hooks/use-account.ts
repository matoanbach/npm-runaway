// store/useUserView.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserView = "supplier" | "company";

type UserViewStore = {
  view: UserView;
  switchView: () => void;
  setView: (view: UserView) => void;
};

export const useUserView = create(
  persist<UserViewStore>(
    (set, get) => ({
      view: "company", // default view
      switchView: () => {
        set({ view: get().view === "company" ? "supplier" : "company" });
      },
      setView: (view: UserView) => {
        set({ view });
      }
    }),
    {
      name: "user-view",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
