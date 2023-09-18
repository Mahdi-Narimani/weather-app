import React from 'react';
import moment from 'moment/moment';
import classes from './Weather.module.css';
import { SunInfo } from './SunInfo';
import { WindInfo } from './WindInfo';

export const CityInfo = ({ weather }) =>
{
    let cityName;

    if (weather !== undefined)
    {
        cityName = weather.name;
    }

    // ! Start Date Data
    const weekDay = moment().format('dddd');
    const date = moment().format('ll');
    // ! End Date Data
    return (
        <div className={classes['city-info']}>
            <p className={classes['city-name']}>{cityName}</p>
            <div className={classes.date}>
                <span>{weekDay}</span>,<span>{date}</span>
            </div>
            <div className={classes.authorInfo}>
                <WindInfo weatherData={weather} />
                <SunInfo weatherData={weather} />
            </div>
        </div>
    );
};
