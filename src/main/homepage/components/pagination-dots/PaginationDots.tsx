import styles from './PaginationDots.module.scss'
import { useTheme } from '@mui/material';

export type PaginationDotsProps = {
    current: number,
    total: number,
    click: (i: number) => void
}
const PaginationDots = ({current, total, click}: PaginationDotsProps) => {
    const {palette} = useTheme();
    return (
        <div className={`${styles.pagination}`}>
            {
                Array.from(Array(total).keys()).map(i => (
                    <div key={i} className={`${styles.dot} ${palette.mode === 'dark' ? styles.light : ''}`}
                         style={{
                             backgroundColor: i === current ? palette.secondary.dark
                                 : palette.text.primary
                         }} onClick={() => click(i)}/>
                ))
            }
        </div>
    )
}

export default PaginationDots;
