import { PaletteMode, ThemeOptions } from '@mui/material';

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === 'light' ? {
            primary: {
                main: '#3c3c3c',
                light: 'rgb(99, 99, 99)',
                dark: 'rgb(42, 42, 42)',
            },
            secondary: {
                main: '#fed100',
                light: 'rgb(254, 218, 51)',
                dark: 'rgb(177, 146, 0)',
            },
            info: {
                main: '#463c34',
                light: 'rgb(107, 99, 92)',
                dark: 'rgb(49, 42, 36)',
            },
        } : {
            primary: {
                main: '#3c3c3c',
                light: 'rgb(99, 99, 99)',
                dark: 'rgb(42, 42, 42)',
            },
            secondary: {
                main: '#fed100',
                light: 'rgb(254, 218, 51)',
                dark: 'rgb(177, 146, 0)',
            },
            info: {
                main: '#463c34',
                light: 'rgb(107, 99, 92)',
                dark: 'rgb(49, 42, 36)',
            },
        })
    }
});

export { getDesignTokens }
