import styles from './DrawerSlide.module.scss'
import Flicking, { MoveEvent, ReadyEvent, SelectEvent } from '@egjs/react-flicking';
import { useTranslation } from 'react-i18next';
import { SvgIcon, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export type DrawerSlideProps = {
    onRedirect: () => void;
}
const DrawerSlide = ({onRedirect}: DrawerSlideProps) => {
    const {palette} = useTheme();
    const {t} = useTranslation()
    const navigate = useNavigate();

    const onSelect = (e: SelectEvent<Flicking>): void => {
        e.panel.focus(300);
    }

    const onReady = (e: ReadyEvent<Flicking>): void => {
        e.currentTarget.element.style.perspective = '160px';
        e.currentTarget.element.style.transformStyle = 'preserve-3d';
        e.currentTarget.element.style.pointerEvents = 'none';
        e.currentTarget.camera.element.style.transformStyle = 'preserve-3d';
    }

    const onMove = (e: MoveEvent<Flicking>) => {
        e.currentTarget.panels?.forEach(panel => {
            const panelEl = panel.element;
            const title = panelEl?.querySelector('.panel-title');
            const progress = panel.progress;
            if (title) {
                (title as HTMLElement).style.opacity = `${1 - Math.abs(progress)}`;
            }
        });
    }

    const redirect = (index: number) => {
        navigate(index === 0 ? '/' : index === 1 ? '/contact' : '/contact/jobs')
        onRedirect();
    }

    return (
        <Flicking
            onReady={e => onReady(e)}
            circular={true}
            onMove={e => onMove(e)}
            interruptable={false}
            onSelect={e => onSelect(e)}>
            {
                [t('mainPage'), t('contactsHeader'), t('jobsHeader')].map((title, i) => {
                    return (
                        <div className={styles.panel} key={i} onClick={() => redirect(i)}>
                            <div className={styles.wrapper}>
                                <div className={styles.planeTop}
                                     style={{borderColor: palette.primary.light}}>
                                    <div className={styles.titleWrapper}>
                                        <div className={`${styles.title} panel-title`}
                                             style={{opacity: i === 0 ? 1 : 0}}>
                                            {title}
                                        </div>
                                    </div>
                                    <div className={styles.icon}>
                                        <SvgIcon sx={{fontSize: 50}}>
                                            {icon(i)}
                                        </SvgIcon>
                                    </div>
                                </div>
                                <div className={styles.planeBottom}
                                     style={{borderColor: palette.primary.light}}>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Flicking>
    )
}

export default DrawerSlide;

const icon = (i: number): JSX.Element => [
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>,
    <path
        d="M21,12.13C20.85,12.14 20.71,12.19 20.61,12.3L19.61,13.3L21.66,15.3L22.66,14.3C22.88,14.09 22.88,13.74 22.66,13.53L21.42,12.3C21.32,12.19 21.18,12.14 21.04,12.13M19.04,13.88L13,19.94V22H15.06L21.12,15.93M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H11V19.11L19.24,10.89C19.71,10.4 20.36,10.13 21.04,10.13C21.38,10.13 21.72,10.19 22.04,10.32V6C22.04,4.88 21.12,4 20,4M20,8L12,13L4,8V6L12,11L20,6"/>,
    <path
        d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z"/>,
    <path/>,
    <path/>,
][i];
