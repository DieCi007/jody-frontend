import styles from './HomepageTextMain.module.scss'
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomepageTextMain = () => {
    const {palette} = useTheme();
    const {t} = useTranslation()

    return (
        <div className={styles.container}>
            <div className={`${styles.contentContainer} ${styles[palette.mode]}`}
                 style={{color: palette.text.primary}}>
                <div className={`${styles.helmet} ${styles[palette.mode]}`}/>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>JODY</div>
                    <div className={styles.titleDescription}>{t('companyDescription')}</div>
                </div>
                <div className={styles.description}>
                    <div>{t('companyMoto')}</div>
                    <div className={styles.descriptionTag}>{t('companySince')}</div>
                </div>
            </div>
        </div>
    )
}

export default HomepageTextMain;
