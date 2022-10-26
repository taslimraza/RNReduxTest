import { TOGGLE_THEME } from "../constant"

export const setIsDarkThemeAction = (value) => {
    return {
        type: TOGGLE_THEME,
        isDark: value
    }
}