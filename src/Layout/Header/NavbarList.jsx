import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

export const NavbarList = () =>
{
    const [pathName, setPathName] = useState('');
    const location = useLocation();

    useEffect(() =>
    {
        setPathName(location.pathname);
    }, [location]);

    return (
        <ul className={classes['navbar-list']}>
            <Link className={pathName === '/' ? classes.active : ''} to='/'>Home</Link>
            <Link className={pathName === '/news' ? classes.active : ''} to='/news'>News</Link>
            <Link className={pathName === '/about' ? classes.active : ''} to='/about'>About</Link>
        </ul>
    );
};
