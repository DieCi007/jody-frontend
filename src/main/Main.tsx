import styles from './Main.module.scss';
import Header from './components/header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './homepage/Homepage';


const Main = () => {
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
