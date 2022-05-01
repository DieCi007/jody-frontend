import styles from './Homepage.module.scss'
import Flicking, { ChangedEvent, MOVE_TYPE, PanelChangeEvent, WillChangeEvent } from '@egjs/react-flicking';
import React, { useEffect, useRef, useState } from 'react';
import PaginationDots from './components/pagination-dots/PaginationDots';
import RoundCard from './components/round-card/RoundCard';
import { VisibleChangeEvent } from '@egjs/flicking';
import { useTheme } from '@mui/material';


const Homepage = () => {
    const {palette} = useTheme();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const flicking = useRef<Flicking>(null);
    const roundCard1 = useRef<HTMLDivElement>(null);
    const roundCard2 = useRef<HTMLDivElement>(null);
    const roundCard3 = useRef<HTMLDivElement>(null);
    const roundCard4 = useRef<HTMLDivElement>(null);
    const roundCard5 = useRef<HTMLDivElement>(null);

    const onPaginationClick = (index: number) => {
        if (flicking.current) {
            flicking.current.moveTo(index);
            setCurrentPage(index);
        }
    }
    const onFlickingChanged = (e: WillChangeEvent<Flicking>) => {
        setCurrentPage(e.index);
    }
    useEffect(() => {
        if (flicking.current) {
            flicking.current.element.style.position = 'absolute';
            flicking.current.camera.element.style.position = 'relative';
            flicking.current.element.style.width = '100%';
            flicking.current.camera.element.style.width = '100%';
            flicking.current.element.style.height = '100%';
            flicking.current.camera.element.style.height = '100%';
            flicking.current.element.style.margin = '0';
            flicking.current.element.style.padding = '0';
        }
    }, []);

    return (
        <div className={styles.homeWrapper}>
            <PaginationDots click={index => onPaginationClick(index)} current={currentPage} total={4}/>
            <div>
                <div className="shapes">
                    <RoundCard ref={roundCard1}
                               style={{width: '60vmax', height: '60vmax', bottom: '50%', right: '45%'}}/>
                    <RoundCard ref={roundCard2}
                               style={{
                                   width: '50vmax',
                                   minWidth: '400px',
                                   height: '50vmax',
                                   top: '50%',
                                   left: '50%',
                                   transform: 'translate(-50%, -50%)',
                                   border: `25px solid ${palette.text.primary}`,
                               }}/>
                    <RoundCard ref={roundCard3}
                               style={{width: '60vmax', height: '60vmax', top: '50%', left: '45%'}}/>
                    <RoundCard ref={roundCard4}
                               style={{
                                   width: '30vmax', height: '30vmax', top: '60%', right: '65%',
                                   border: '35px solid #fed100'
                               }}/>
                    <RoundCard ref={roundCard5}
                               style={{
                                   width: '30vmax', height: '30vmax', bottom: '60%', left: '65%',
                                   border: '35px solid #fed100'
                               }}/>
                </div>
                <div className="background background2"/>
            </div>
            <Flicking ref={flicking} horizontal={false} autoResize={true} duration={500}
                      onWillChange={e => onFlickingChanged(e)} renderOnlyVisible={true}
                      moveType={[MOVE_TYPE.SNAP, {count: 1}]}
                      bounce={10}>
                <div className={styles.page}></div>
                <div className={styles.page}></div>
                <div className={styles.page}></div>
                <div className={styles.page}></div>
            </Flicking>
        </div>
    )
}

export default Homepage;
