import React from 'react';
import classes from './StartPage.module.css';
import { FaLocationDot } from "react-icons/fa6";


const StartPage = ({ onFocusInput }) =>
{

    const focusInputHandler = () =>
    {
        setTimeout(() =>
        {
            onFocusInput(true)
        }, 500);
    }

    return (
        <section className={classes['start-page']}>
            <div className={classes['start-page__background']}></div>
            <div className={classes['start-page__btn']}>
                <p>for start clicked button 👇</p>
                <button onClick={focusInputHandler}>
                    <FaLocationDot />
                </button>

            </div>
        </section >
    )
}

export default StartPage