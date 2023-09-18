import React from 'react';
import { TbWind } from "react-icons/tb";
import { TiWeatherWindy } from "react-icons/ti";
import classes from './Weather.module.css';


export const WindInfo = ({ weatherData }) =>
{
    let speed, deg;
    if (weatherData.wind !== undefined)
    {
        // * Start Wind Data
        speed = (weatherData.wind.speed).toFixed(1);
        deg = weatherData.wind.deg;
        // *  End Wind Data
    }

    return (
        <div className={classes['wind-info']}>
            <span className={classes['wind-icon']}><TbWind /></span>
            <span>Wind {speed}km/h</span>
            <span className={classes['wind-icon']}><TiWeatherWindy /></span>
            <span>Wind {deg}°</span>
        </div>
    );
};
