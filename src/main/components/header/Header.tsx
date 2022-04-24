import { useTheme } from '@mui/material';
import styles from './Header.module.scss';
import HeaderLink from '../header-link/HeaderLink';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {palette} = useTheme();
    const {t} = useTranslation()

    return (
        <header className={styles.header} style={{
            backgroundColor: palette.primary.main,
            boxShadow: `0 4px 6px 1px ${palette.primary.dark}`
        }}>
            <HeaderLink redirect='/home' title={t('mainPage')}/>
            {/*<HeaderLink redirect='home' title={t('history')}/>*/}
            {/*<HeaderLink redirect='home' title={t('contactsHeader')}/>*/}
            {/*<HeaderLink redirect='home' title={t('jobsHeader')}/>*/}
        </header>
    )
}

export default Header;
