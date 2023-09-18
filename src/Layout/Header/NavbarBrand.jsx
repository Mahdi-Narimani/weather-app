import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export const NavbarBrand = () =>
{
    return (
        <div className={classes['brand-box']}>
            <Link to='/'>Weather</Link>
            <span>App</span>
        </div>
    );
};
