import styles from './Homepage.module.scss'
import Flicking, { MOVE_TYPE, WillChangeEvent } from '@egjs/react-flicking';
import React, { useEffect, useRef, useState } from 'react';
import PaginationDots from './components/pagination-dots/PaginationDots';
import RoundCard from './components/round-card/RoundCard';
import { useTheme } from '@mui/material';
import { AppScene } from './components/scene/AppScene';
import { PROPS } from './SceneKeyframes';

const Homepage = () => {
    const {palette} = useTheme();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const flicking = useRef<Flicking>(null);
    const scene = useRef<AppScene>(null);

    useEffect(() => {
        if (flicking.current && flicking.current.initialized) {
            flicking.current.moveTo(0).catch();
        }
    }, [palette]);

    // Listen for scrolls and change page
    useEffect(() => {
        let {timerId, scrollListener} = handleScroll(flicking);
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
            window.removeEventListener('wheel', scrollListener);
        };
    }, []);

    // Set Flicking viewport to 100% of page
    useEffect(() => {
        if (flicking.current) {
            flicking.current.element.style.width = '100%';
            flicking.current.element.style.height = '100%';
        }
    }, []);

    const onPaginationClick = (index: number) => {
        if (flicking.current) {
            flicking.current.moveTo(index);
            setCurrentPage(index);
        }
    }

    const onFlickingChanged = (e: WillChangeEvent<Flicking>) => {
        setCurrentPage(e.index);
    }


    const onFlickingMove = () => {
        let progress = flicking.current?.camera.progress;
        scene.current?.setTime(progress || 0)
    }

    return (
        <div className={styles.homeWrapper}>
            <PaginationDots click={index => onPaginationClick(index)} current={currentPage} total={4}/>
            <div>
                <AppScene keyframes={PROPS} time={0} ref={scene}>
                    <div className={`${styles.background} shapes`}>
                        <div className={`background2`}
                             style={{
                                 backgroundColor: 'green', transform: 'translateY(100%)', height: '100%',
                                 width: '100%',
                             }}/>
                        <RoundCard style={{
                            width: '40vmax', height: '40vmax', top: '50%', right: '65%',
                            border: '35px solid #fed100'
                        }} classNames={['bottom-left']}/>
                        <RoundCard style={{
                            width: '50vmax', minWidth: '400px', height: '50vmax',
                            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            border: `25px solid ${palette.text.primary}`,
                        }} classNames={['center']}/>
                        <RoundCard style={{
                            width: '50vmax',
                            height: '50vmax', backgroundColor: 'red',
                            top: '55%', left: '50%'
                        }} classNames={['bottom-right']}/>
                        <RoundCard style={{
                            width: '30vmax', height: '30vmax', bottom: '60%', left: '65%',
                            border: '35px solid #fed100'
                        }} classNames={['top-right']}/>
                        <RoundCard style={{
                            width: '50vmax',
                            height: '50vmax', backgroundColor: 'red',
                            bottom: '55%', right: '50%'
                        }} classNames={['top-left']}/>
                    </div>
                </AppScene>
            </div>
            <Flicking ref={flicking} horizontal={false} autoResize={true} duration={500}
                      onWillChange={e => onFlickingChanged(e)}
                      moveType={[MOVE_TYPE.STRICT, {count: 1}]}
                      bounce={10} onMove={onFlickingMove}>
                <div className={styles.page}>diego</div>
                <div className={styles.page}>mario</div>
                <div className={styles.page}>diego</div>
                <div className={styles.page}>diego</div>
            </Flicking>
        </div>
    )
}

export default Homepage;

function handleScroll(flicking: React.RefObject<Flicking>) {
    let timerId: NodeJS.Timeout | null = null;
    let isEnableScroll = true;

    function setScrollTimer() {
        isEnableScroll = false;
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(function () {
            isEnableScroll = true;
        }, 600);
    }

    function scrollListener(e: WheelEvent) {
        if (!isEnableScroll || flicking.current?.animating) {
            return;
        }
        e.preventDefault();
        let delta = e.deltaY;

        if (Math.abs(delta) > 40) {
            setScrollTimer();
            if (!flicking.current) {
                return;
            }
            if (delta > 0 && flicking.current.index < 3) {
                flicking.current.next();
            } else if (delta < 0 && flicking.current.index > 0) {
                flicking.current.prev();
            }
        }
    }

    window.addEventListener("wheel", scrollListener, {
        passive: false,
    });
    return {timerId, scrollListener};
}
