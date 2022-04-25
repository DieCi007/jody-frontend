import styles from './ThemeToggle.module.scss';
import { useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../../App';
import { LS_THEME_MODE } from '../../../shared/constants';

const ThemeToggle = () => {
    const {palette} = useTheme();
    const context = useContext(ColorModeContext);

    const onChange = () => {
        localStorage.setItem(LS_THEME_MODE, palette.mode === 'light' ? 'dark' : 'light')
        context.toggleColor()
    }
    return (
        <>
            <label htmlFor='theme-toggle' className={`${styles.toggleBtn} 
                   ${palette.mode === 'dark' ? styles.dark : ''}`}
                   onClick={() => onChange()}>
                <input type='checkbox' id='theme-toggle' className={styles.input}/>
            </label>
        </>
    )
}

export default ThemeToggle;
