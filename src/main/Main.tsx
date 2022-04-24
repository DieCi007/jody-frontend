import styles from './Main.module.scss';
import { useMediaQuery, useTheme } from '@mui/material';
import Header from './components/header/Header';
import Drawer from './components/drawer/Drawer';


const Main = () => {
    const {palette, breakpoints} = useTheme();
    const isDownMd = useMediaQuery(breakpoints.down('md'));

    return (
        <div className={styles.mainContainer}>
            {
                isDownMd ? <Drawer/> : <Header/>
            }
        </div>
    )
}

export default Main;
