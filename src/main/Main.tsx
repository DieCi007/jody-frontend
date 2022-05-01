import styles from './Main.module.scss';
import { useTheme } from '@mui/material';
import Header from './components/header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './homepage/Homepage';


const Main = () => {
    const {palette, breakpoints} = useTheme();

    return (
        <div className={styles.mainContainer}>
            <div>
                <Header/>
            </div>
            <div className={styles.routes}>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='*' element={<Navigate to='/home'/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main;
