import styles from './HomepageTextEco.module.scss';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomepageTextEco = () => {
    const {palette} = useTheme();
    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <div className={`${styles.contentContainer} ${styles[palette.mode]}`}
                 style={{color: palette.text.primary}}>
                <div className={`${styles.helmet} ${styles[palette.mode]}`}/>
                <div className={styles.title}>{t('eco.title')}</div>
                <div className={styles.services}>
                    <ul>
                        <li>{t('eco.cleaning')}</li>
                        <li>{t('eco.vehicles')}</li>
                        <li>{t('eco.oils')}</li>
                        <li>{t('eco.maintenance')}</li>
                        <li>{t('eco.sanitation')}</li>
                        <li>{t('eco.waste')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomepageTextEco;
