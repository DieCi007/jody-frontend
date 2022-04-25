import React, { createContext, useMemo, useReducer, useState } from 'react';
import styles from './App.module.scss';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { getDefaultThemeMode } from './shared/theme/default-theme-mode';
import { getDesignTokens } from './shared/theme/mui-design-tokens';
import Main from './main/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { OPTIONS } from './shared/i18n/translations';
import { ColorModeContext, colorModeReducer } from './shared/ColorModeContext'

function App() {
    // THEME
    const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');
    const themePalette = getDefaultThemeMode(prefersDarkMode);
    const [theme, themeDispatch] = useReducer(colorModeReducer, createTheme(getDesignTokens(themePalette)));

    // LOAD LANGUAGE
    i18n.use(initReactI18next).init(OPTIONS);

    return (
        <div className={styles.app} style={{background: theme.palette.background.default}}>
            <CssBaseline/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <ColorModeContext.Provider value={{theme, themeDispatch}}>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path='/home' element={<Main/>}/>
                        <Route path='*' element={<Navigate to='home'/>}/>
                    </Routes>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
}

export default App;
