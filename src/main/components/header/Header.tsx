import { useMediaQuery, useTheme } from '@mui/material';
import styles from './Header.module.scss';
import HeaderLink from '../header-link/HeaderLink';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import LanguageSelect from '../language-select/LanguageSelect';
import Drawer from '../drawer/Drawer';

const Header = () => {
    const {palette, breakpoints} = useTheme();
    const {t} = useTranslation()
    const isDownMd = useMediaQuery(breakpoints.down('md'));

    return (
        <header className={`${styles.header} ${isDownMd ? styles.mobile : ''}`} style={{
            backgroundColor: palette.primary.main,
            boxShadow: `0 4px 6px 1px ${palette.primary.dark}`
        }}>
            {
                isDownMd ? <Drawer/> :
                    <>
                        <HeaderLink redirect='/' title={t('mainPage')}/>
                        <HeaderLink redirect='/contact' title={t('contactsHeader')}/>
                        <HeaderLink redirect='/contact/jobs' title={t('jobsHeader')}/>
                    </>

            }
            <div className={styles.toggle}>
                <ThemeToggle/>
            </div>
            <LanguageSelect/>
        </header>
    )
}

export default Header;
