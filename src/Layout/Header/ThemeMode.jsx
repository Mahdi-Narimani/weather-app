import { useEffect } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import classes from './Header.module.css';

export const ThemeMode = ({ darkMode, onDarkMode }) =>
{
    const modeHandler = () =>
    {
        onDarkMode(mode => !mode);
    };

    useEffect(() =>
    {
        if (darkMode)
        {
            document.body.classList.add('dark');
        }
        if (!darkMode)
        {
            document.body.classList.remove('dark');
        }

    }, [darkMode]);

    return (
        <button onClick={modeHandler} className={darkMode ? 'dark' : ''}>
            {!darkMode && <MdDarkMode className={classes['dark-mode']} />}
            {darkMode && <MdLightMode className={classes['light-mode']} />}
        </button>
    );
};
