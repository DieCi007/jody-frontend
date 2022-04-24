import styles from './HeaderLink.module.scss';
import { useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

export type HeaderLinkProps = {
    title: string,
    redirect: string
}
const HeaderLink = ({title, redirect}: HeaderLinkProps) => {
    const {palette} = useTheme();

    return (
        <NavLink to={redirect} className={({isActive}) =>
            `${styles.link} ` + (isActive ? styles.active : '')}
                 style={{color: palette.secondary.main}}>
            {title}
        </NavLink>
    )
}

export default HeaderLink;
