import { createContext } from 'react';

export const ColorModeContext = createContext<{ toggleColor: () => void }>({
    toggleColor: () => {
    }
});
