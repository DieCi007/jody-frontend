import styles from './HomepageTextServices.module.scss';
import { useTheme } from '@mui/material';

const HomepageTextServices = () => {
    const {palette} = useTheme();

    return (
        <div className={styles.container}>
            <div className={`${styles.contentContainer} ${styles[palette.mode]}`}
                 style={{color: palette.text.primary}}>
                <div className={`${styles.helmet} ${styles[palette.mode]}`}/>
                <div className={styles.title}>Services, Equipment & more</div>
                <div className={styles.services}>
                    <ul>
                        <li>Road paving, in house production at all stages</li>
                        <li>Asphalt & Bituminous Emulsion production plants</li>
                        <li>Vertical and Horizontal traffic signs</li>
                        <li>Road maintenance</li>
                        <li>Civil and Industrial constructions and reconstruction</li>
                        <li>Full range of construction vehicles and tools</li>
                        <li>Certified in all provided services</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HomepageTextServices;
