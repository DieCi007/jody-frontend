import styles from './RoundCard.module.scss'
import React, { ForwardedRef } from 'react';
import { useTheme } from '@mui/material';

export type RoundCardProps = {
    style?: {},
    classNames?: string[],
}

const RoundCard = React.forwardRef(({style, classNames}: RoundCardProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {palette} = useTheme();
    return <div style={{...style, backgroundColor: palette.background.paper}}
                className={`${classNames ? classNames.join(' ') : ''} ${styles.container}`}
                ref={ref}>

    </div>
})
export default RoundCard;
