import React from 'react';
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import moment from 'moment/moment';
import classes from './Weather.module.css';


export const SunInfo = ({ weatherData }) =>
{
    let Sunrise, Sunset;
    if (weatherData.main !== undefined)
    {
        // TODO Calculate Sunrise and Sunset
        const { sunrise, sunset } = weatherData.sys;
        Sunrise = moment.utc(sunrise, 'X').add(weatherData.timezone, 'seconds').format('HH:mm a');
        Sunset = moment.utc(sunset, 'X').add(weatherData.timezone, 'seconds').format('HH:mm a');
    }

    return (
        <div className={classes['sun-info']}>
            <span className={classes['sunrise']}><BsFillSunriseFill /></span>
            <span>{Sunrise}</span>
            <span className={classes['sunset']}><BsFillSunsetFill /></span>
            <span>{Sunset}</span>
        </div>
    );
};
