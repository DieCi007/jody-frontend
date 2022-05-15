import styles from './HomepageTextMain.module.scss'
import { useTheme } from '@mui/material';

const HomepageTextMain = () => {
    const {palette} = useTheme();

    return (
        <div className={styles.container}>
            <div className={`${styles.contentContainer} ${styles[palette.mode]}`}
                 style={{color: palette.text.primary}}>
                <div className={`${styles.helmet} ${styles[palette.mode]}`}/>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>JODY</div>
                    <div className={styles.titleDescription}>Construction & Services</div>
                </div>
                <div className={styles.description}>
                    <div>Quality & Reliability without compromises.</div>
                    <div className={styles.descriptionTag}>Since 1997.</div>
                </div>
            </div>
        </div>
    )
}

export default HomepageTextMain;
