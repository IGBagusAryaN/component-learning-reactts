import { useThemeStore } from "../store/theme-store"

export function ToggleTheme() {
    const { theme, toggleTheme } = useThemeStore()

    return(
        <div style={{
            backgroundColor: theme === "light" ? '#FFFF' : '#1D1D1D',
            color: theme === "light" ? '#1D1D1D' : '#FFFF',
            padding: '20px'
        }}>
            <h1>Mode: {theme.toUpperCase()}</h1>
            <button onClick={toggleTheme} className="border border-gray-400 px-3 py-1 rounded cursor-pointer">
                toggle ke : { theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </div>
    )
}