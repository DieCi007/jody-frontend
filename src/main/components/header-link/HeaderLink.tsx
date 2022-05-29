import styles from './HeaderLink.module.scss';
import { useTheme } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

export type HeaderLinkProps = {
    title: string,
    redirect: string
}
const HeaderLink = ({title, redirect}: HeaderLinkProps) => {
    const {palette} = useTheme();
    const {pathname} = useLocation();

    return (
        <NavLink to={redirect} className={`${styles.link} `
        + (pathname === redirect ? styles.active : '')}
                 style={{color: palette.secondary.main}}>
            {title}
        </NavLink>
    )
}

export default HeaderLink;
