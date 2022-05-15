import styles from './Main.module.scss';
import Header from './components/header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './homepage/Homepage';
import { useMediaQuery, useTheme } from '@mui/material';


const Main = () => {
    const {breakpoints} = useTheme();
    const isDownMd = useMediaQuery(breakpoints.down('md'));

    return (
        <div className={styles.mainContainer}>
            <div>
                <Header/>
            </div>
            <div className={styles.routes} style={{height: `calc(100% - ${isDownMd ? '3rem' : '4rem'})`}}>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='*' element={<Navigate to='/home'/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main;
