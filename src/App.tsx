import React, { useMemo, useState } from 'react';
import styles from './App.module.scss';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { getDefaultThemeMode } from './shared/theme/default-theme-mode';
import { getDesignTokens } from './shared/theme/mui-design-tokens';
import Main from './main/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ColorModeContext } from './shared/theme/theme-context';

const LIGHT_THEME = createTheme(getDesignTokens('light'));
const DARK_THEME = createTheme(getDesignTokens('dark'));

function App() {
    // TODO: BIG. Remove react flicking and replace with default like in homepage component
    // THEME
    const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');
    const [themeMode, setThemeMode] = useState<PaletteMode>(getDefaultThemeMode(prefersDarkMode));
    const theme = useMemo(() => themeMode === 'light' ? LIGHT_THEME : DARK_THEME, [themeMode]);
    const themeContext = useMemo(() => ({
        toggleColor: () => {
            setThemeMode(prev => prev === 'light' ? 'dark' : 'light')
        }
    }), []);

    return (
        <div className={styles.app}
             style={{background: theme.palette.background.default, color: theme.palette.text.primary}}>
            <CssBaseline/>
            <ColorModeContext.Provider value={themeContext}>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path='/*' element={<Main/>}/>
                        <Route path='*' element={<Navigate to='/'/>}/>
                    </Routes>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
}

export default App;
