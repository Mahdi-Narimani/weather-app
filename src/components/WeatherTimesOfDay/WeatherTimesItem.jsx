import React, { useEffect, useState } from 'react';
import { weatherNightIcons, weatherDayIcons } from '../../API/weatherIcons-api'
import classes from './WeatherTimesItem.module.css';
import moment from 'moment';

const WeatherTimesItem = ({ item,weatherStatusList}) =>
{
  const [weatherIcon, setWeatherIcon] = useState('');

  let temp_Celsius, temp_Min_Celsius, temp_Max_Celsius;

  if (item.main !== undefined)
  {
    // TODO Calculate Temperature 
    const temp = item.main.temp;
    const temp_min = item.main.temp_min;
    const temp_max = item.main.temp_max;

    temp_Celsius = (temp - 273).toFixed();
    temp_Min_Celsius = (temp_min - 273).toFixed();
    temp_Max_Celsius = (temp_max - 273).toFixed();
  }



  useEffect(() =>
  {
    if (item.weather !== undefined)
    {
      setWeatherIcon('');
      // ! Start Description and icon Data fot setting Icon in UI
      const weather = item.weather.at(0);
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

  }, [item, weatherIcon])


  const time = item.dt_txt.split(' ').at(1).substr(0, 5);
  const today = moment().format('ddd');
  const nextDays = moment(item.dt_txt.split(' ').at(0)).format('ddd');
  console.log(nextDays);

  
  return (
    <li className={classes['weather-times__item']}>
      <div className={classes['weather-box']}>
        <img src={`${weatherIcon}`} alt='weather icon' />
        <div className={classes['badge-box']}>
          <div className={classes['badge-day']}>{weatherStatusList === 'Today' ? today : nextDays}</div>
          <div className={classes['badge-time']}>{time}</div>
        </div>
        <span className={classes['temperature']}>{temp_Celsius}<sup>℃</sup></span>
        <div className={classes['author-temp']}>
          <span>{temp_Min_Celsius}<sup>℃ </sup></span>
          -
          <span> {temp_Max_Celsius}<sup>℃</sup></span>
        </div>
      </div>
    </li>
  )
}

export default WeatherTimesItem