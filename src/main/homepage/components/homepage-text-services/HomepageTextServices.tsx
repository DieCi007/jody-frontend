import styles from './HomepageTextServices.module.scss';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomepageTextServices = () => {
    const {palette} = useTheme();
    const {t} = useTranslation();
    return (
        <div className={styles.container}>
            <div className={`${styles.contentContainer} ${styles[palette.mode]}`}
                 style={{color: palette.text.primary}}>
                <div className={`${styles.helmet} ${styles[palette.mode]}`}/>
                <div className={styles.title}>{t('services.title')}</div>
                <div className={styles.services}>
                    <ul>
                        <li>{t('services.paving')}</li>
                        <li>{t('services.plants')}</li>
                        <li>{t('services.signs')}</li>
                        <li>{t('services.maintenance')}</li>
                        <li>{t('services.constructions')}</li>
                        <li>{t('services.tools')}</li>
                        <li>{t('services.certifications')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HomepageTextServices;
