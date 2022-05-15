import styles from './RoundCard.module.scss'
import React from 'react';
import { useTheme } from '@mui/material';
import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking from '@egjs/react-flicking';

export type RoundCardProps = {
    style?: {},
    classNames?: string[],
    images: string[],
    index: number
}

const RoundCard = ({style, classNames, images, index}: RoundCardProps) => {
    const plugin = new AutoPlay({duration: 4000 + index * 500, direction: 'NEXT', stopOnHover: true});
    const {palette} = useTheme();

    return <div style={{backgroundColor: palette.background.paper, ...style}}
                className={`${classNames ? classNames.join(' ') : ''} ${styles.container}`}>
        <Flicking plugins={[plugin]} circular={true} duration={700}>
            {
                images.map(imgName => (
                    <div key={imgName} className={styles.image}
                         style={{backgroundImage: `url(${imgName}`}}/>
                ))
            }
        </Flicking>
    </div>
}
export default RoundCard;
