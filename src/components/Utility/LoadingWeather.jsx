import React from 'react';
import classes from './LoadingWeather.module.css';

export const LoadingWeather = () =>
{

    return (
        <div className={classes.container}>
            <div className={classes.loader}>
                <span></span>
            </div>
        </div>
    );
};
