import styles from './DrawerSlide.module.scss'
import Flicking, { MoveEvent, ReadyEvent, SelectEvent } from '@egjs/react-flicking';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';

const DrawerSlide = () => {
    const {palette} = useTheme();
    const {t} = useTranslation()
    const onSelect = (e: SelectEvent<Flicking>): void => {
        e.panel.focus(300);
    }

    const onReady = (e: ReadyEvent<Flicking>): void => {
        e.currentTarget.element.style.perspective = '160px';
        e.currentTarget.element.style.transformStyle = 'preserve-3d';
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

    return (
        <Flicking
            onReady={e => onReady(e)}
            circular={true}
            onMove={e => onMove(e)}
            onSelect={e => onSelect(e)}>
            {
                [t('mainPage'), t('contactsHeader'), t('jobsHeader')].map((title, i) => {
                    return (
                        <div className={styles.panel} key={i}>
                            <div className={styles.wrapper}>
                                <div className={styles.planeTop}
                                     style={{borderColor: palette.primary.light}}>
                                    <div className={styles.titleWrapper}>
                                        <div className={`${styles.title} panel-title`}
                                             style={{opacity: i === 0 ? 1 : 0}}>
                                            {title}
                                        </div>
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
