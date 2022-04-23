import React, { createContext, useMemo, useState } from 'react';
import styles from './App.module.scss';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { getDefaultThemeMode } from './shared/theme/default-theme-mode';
import { getDesignTokens } from './shared/theme/mui-design-tokens';
import Main from './main/Main';

function App() {
    const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');
    const [themeMode, setThemeMode] = useState<PaletteMode>(getDefaultThemeMode(prefersDarkMode));
    const theme = useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);
    const themeContext = useMemo(() => ({
        toggleColor: () => setThemeMode(prev => prev === 'light' ? 'dark' : 'light')
    }), []);
    const ColorModeContext = createContext(themeContext);

    return (
        <div className={styles.app} style={{background: theme.palette.background.default}}>
            <CssBaseline/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <ColorModeContext.Provider value={themeContext}>
                <ThemeProvider theme={theme}>
                    <Main/>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
}

export default App;
