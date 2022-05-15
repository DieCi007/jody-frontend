import styles from './HomepageTextEco.module.scss';
import { useTheme } from '@mui/material';

const HomepageTextEco = () => {
    const {palette} = useTheme();
    return (
        <div className={styles.container}>
            <div className={`${styles.contentContainer} ${styles[palette.mode]}`}
                 style={{color: palette.text.primary}}>
                <div className={`${styles.helmet} ${styles[palette.mode]}`}/>
                <div className={styles.title}>Ecological & Environmental Services</div>
                <div className={styles.services}>
                    <ul>
                        <li>Sewer and Drain Cleaning Services</li>
                        <li>Intervetions with a fleet of different size machines for every use case</li>
                        <li>Boat waste and oil treatment & discharge</li>
                        <li>Sewer pipe treatment and maintenance for Institutions and Condominiums</li>
                        <li>Sanitation, disinfestation</li>
                        <li>Inert waste collection</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomepageTextEco;
