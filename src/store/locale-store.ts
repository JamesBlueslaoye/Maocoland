import { create } from "zustand";

export type Locale = "zh" | "en";

type LocaleState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

export const useLocaleStore = create<LocaleState>((set, get) => ({
  locale: "zh",
  setLocale: (locale) => set({ locale }),
  toggleLocale: () => set({ locale: get().locale === "zh" ? "en" : "zh" }),
}));
