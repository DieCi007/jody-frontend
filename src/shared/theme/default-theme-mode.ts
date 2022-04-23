import { LS_THEME_MODE } from '../constants';
import { PaletteMode } from '@mui/material';

export const getDefaultThemeMode = (prefersDark: boolean): PaletteMode => {
    const saved = localStorage.getItem(LS_THEME_MODE);
    if (!saved) {
        return prefersDark ? 'dark' : 'light';
    }
    return saved === 'dark' ? 'dark' : 'light';
}
