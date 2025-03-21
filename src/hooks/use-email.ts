import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { produce } from "immer";

type EmailSettings = { 
  senderEmail: string; 
  senderAppPassword: string;
  receiverEmail: string;
};

type EmailStore = {
  settings: EmailSettings;
  setSettings: (settings: Partial<EmailSettings>) => void;
};

export const useEmail = create(
  persist<EmailStore>(
    (set, get) => ({
      settings: { senderEmail: "", senderAppPassword: "", receiverEmail: "" },
      setSettings: (settings: Partial<EmailSettings>) => {
        set(
          produce((state: EmailStore) => {
            state.settings = { ...state.settings, ...settings };
          })
        );
      },
    }),
    {
      name: "email",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
