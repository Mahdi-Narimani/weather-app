import React, { useEffect, useState } from 'react';
import { weatherDayIcons, weatherNightIcons } from '../../API/weatherIcons-api';
import classes from './Weather.module.css';

export const WeatherInfo = ({ weatherData }) =>
{
    const [weatherIcon, setWeatherIcon] = useState('');

    let temp_Celsius, temp_Min_Celsius, temp_Max_Celsius;

    if (weatherData.main !== undefined)
    {
        // TODO Calculate Temperature 
        const temp = weatherData.main.temp;
        const temp_min = weatherData.main.temp_min;
        const temp_max = weatherData.main.temp_max;

        temp_Celsius = (temp - 273).toFixed();
        temp_Min_Celsius = (temp_min - 273).toFixed();
        temp_Max_Celsius = (temp_max - 273).toFixed();
    }

    useEffect(() =>
    {
        if (weatherData.weather !== undefined)
        {
            setWeatherIcon('');
            // ! Start Description and icon Data fot setting Icon in UI
            const weather = weatherData.weather.at(0);
            const title = weather.description;
            const icon = weather.icon.at(2);
            const isNight = (icon === 'n');
            if (isNight)
            {
                setWeatherIcon(weatherNightIcons.find(icon => icon.title === title)?.url);
            }

            else
            {
                setWeatherIcon(weatherDayIcons.find(icon => icon.title === title)?.url);
            }
            // ! End Description and icon Data fot setting Icon in UI
        }

    }, [weatherData, weatherIcon]);


    return (
        <div className={classes['weather-info']}>
            <div className={classes['badge-day']}>Today</div>
            <div className={classes['weather-box']}>
                <img src={`${weatherIcon}`} alt='weather icon' />
                <span className={classes['temperature']}>{temp_Celsius}<sup>℃</sup></span>
                <div className={classes['author-temp']}>
                    <span>{temp_Min_Celsius}<sup>℃ </sup></span>
                    -
                    <span> {temp_Max_Celsius}<sup>℃</sup></span>
                </div>
            </div>
        </div>
    );
};
