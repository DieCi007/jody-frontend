import styles from './Main.module.scss';
import { useTheme } from '@mui/material';
import Header from './components/header/Header';

const Main = () => {
    const {palette} = useTheme();
    return (
        <div className={styles.mainContainer}>
            <Header/>
        </div>
    )
}

export default Main;
