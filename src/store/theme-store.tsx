import { create } from "zustand"

type themeState = {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export const useThemeStore = create<themeState>((set) => ({
    theme: 'light', //nilai default
    toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light'}))
}))