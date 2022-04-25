import styles from './ThemeToggle.module.scss';
import { createTheme, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../../shared/ColorModeContext';
import { getDesignTokens } from '../../../shared/theme/mui-design-tokens';

const ThemeToggle = () => {
    const {theme, themeDispatch} = useContext(ColorModeContext);
    const onThemeToggle = () => {
        return themeDispatch &&
            themeDispatch(createTheme(getDesignTokens(
                theme?.palette?.mode === 'dark' ? 'light' : 'dark')))
    }
    return (
        <>
            <label htmlFor='theme-toggle' className={`${styles.toggleBtn} 
                   ${theme?.palette?.mode === 'dark' ? styles.dark : ''}`}
                   onClick={() => onThemeToggle()}>
                <input type='checkbox' id='theme-toggle' className={styles.input}/>
            </label>
        </>
    )
}

export default ThemeToggle;
