import React, { createContext } from 'react';
import { Theme } from '@mui/material';

export interface IColorModeContext {
    theme: Theme | null,
    themeDispatch: React.Dispatch<Theme> | null
}

const ColorModeContext = createContext<IColorModeContext>({
    theme: null,
    themeDispatch: null
});

const colorModeReducer = (old: Theme, updated: Theme) => {
    return updated;
}

export { ColorModeContext, colorModeReducer }
