import styles from './Main.module.scss';
import Header from './components/header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Loader from './components/loader/Loader';

const LazyHomepage = React.lazy(() => import('./homepage/Homepage'))
const LazyContactPage = React.lazy(() => import('./contact/Contact'))

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
                    <Route path='/' element={
                        <React.Suspense fallback={<Loader/>}>
                            <LazyHomepage/>
                        </React.Suspense>}/>
                    <Route path='/contact/*' element={
                        <React.Suspense fallback={<Loader/>}>
                            <LazyContactPage/>
                        </React.Suspense>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main;
