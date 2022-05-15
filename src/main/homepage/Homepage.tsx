import styles from './Homepage.module.scss'
import Flicking, { MOVE_TYPE, WillChangeEvent } from '@egjs/react-flicking';
import React, { useEffect, useRef, useState } from 'react';
import PaginationDots from './components/pagination-dots/PaginationDots';
import RoundCard from './components/round-card/RoundCard';
import { useTheme } from '@mui/material';
import { AppScene } from './components/scene/AppScene';
import { PROPS } from './SceneKeyframes';
import plantBitumen from '../../assets/images/bitumen-plant.jpeg';
import plantAsphalt from '../../assets/images/asphalt-plant.jpeg';
import imgMain1 from '../../assets/images/home-1.jpeg';
import imgMain2 from '../../assets/images/home-2.jpeg';
import imgMain3 from '../../assets/images/home-3.jpeg';
import srDay from '../../assets/images/sr-day.jpeg';
import srNight from '../../assets/images/sr-night.jpeg';
import vs1 from '../../assets/images/vs/v-sign-1.jpeg';
import vs3 from '../../assets/images/vs/v-sign-3.jpeg';
import vs4 from '../../assets/images/vs/v-sign-8.jpeg';
import vs5 from '../../assets/images/vs/v-sign-9.jpeg';
import horizontalSign from '../../assets/images/horizontal-sign-main.jpeg';
import horizontalMarking from '../../assets/images/horizontal-marking-main.jpeg';
import HomepageTextMain from './components/homepage-text-main/HomepageTextMain';
import HomepageTextServices from './components/homepage-text-services/HomepageTextServices';
import HomepageTextEco from './components/homepage-text-eco/HomepageTextEco';
import HomepageTextContact from './components/homepage-text-contact/HomepageTextContact';

const Homepage = () => {
    const {palette, shadows} = useTheme();
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
                        <div className={`background2 ${styles.thirdPage}`}
                             style={{backgroundImage: palette.mode === 'light' ? `url(${srDay})` : `url(${srNight})`}}/>
                        <RoundCard index={1} style={{
                            width: '40vmax', height: '40vmax', top: '50%', right: '60%',
                            border: '35px solid #fed100', boxShadow: shadows[shadows.length - 1]
                        }} classNames={['bottom-left']} images={[horizontalMarking]}/>
                        <RoundCard index={2} style={{
                            width: '50vmax', minWidth: '400px', height: '50vmax',
                            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            border: `25px solid ${palette.text.primary}`, boxShadow: shadows[shadows.length - 1]
                        }} classNames={['center']} images={[imgMain1, imgMain2, imgMain3]}/>
                        <RoundCard index={3} style={{
                            width: '50vmax', height: '50vmax', border: `10px solid ${palette.background.paper}`,
                            top: '55%', left: '50%', boxShadow: shadows[shadows.length - 1]
                        }} classNames={['bottom-right']} images={[horizontalSign]}/>
                        <RoundCard index={4} style={{
                            width: '30vmax', height: '30vmax', bottom: '60%', left: '65%',
                            border: '35px solid #fed100', boxShadow: shadows[shadows.length - 1]
                        }} classNames={['top-right']} images={[vs1, vs3, vs4, vs5]}/>
                        <RoundCard index={5} style={{
                            width: '50vmax', height: '50vmax', border: `10px solid ${palette.background.paper}`,
                            bottom: '55%', right: '50%', boxShadow: shadows[shadows.length - 1]
                        }} classNames={['top-left']} images={[plantBitumen, plantAsphalt]}/>
                    </div>
                </AppScene>
            </div>
            <Flicking ref={flicking} horizontal={false} autoResize={true} duration={700}
                      onWillChange={e => onFlickingChanged(e)}
                      moveType={[MOVE_TYPE.STRICT, {count: 1}]}
                      bounce={10} onMove={onFlickingMove}>
                <div className={styles.page}><HomepageTextMain/></div>
                <div className={styles.page}><HomepageTextServices/></div>
                <div className={styles.page}><HomepageTextEco/></div>
                <div className={styles.page}><HomepageTextContact/></div>
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
