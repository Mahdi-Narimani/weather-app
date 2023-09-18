import classes from './Header.module.css';
import { NavbarBrand } from './NavbarBrand';
import { NavbarList } from './NavbarList';
import { SearchCity } from './SearchCity';
import { ThemeMode } from './ThemeMode';

const Header = ({ onError, onSelectedID, darkMode, setDarkMode, focusInput, onFocusInput }) =>
{
    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <NavbarBrand darkMode={darkMode} />
                <NavbarList darkMode={darkMode} />
                <SearchCity
                    focusInput={focusInput}
                    onFocusInput={onFocusInput}
                    onSelectedID={onSelectedID}
                    onError={onError}
                />
                <ThemeMode darkMode={darkMode} onDarkMode={setDarkMode} />
            </nav>
        </header>
    )
}

export default Header