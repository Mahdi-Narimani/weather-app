import React, { useState } from 'react';
import { useScrollingTop, useScrollingWidth } from '../../hooks/useScrolling';
//! import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import WeatherTimesItem from './WeatherTimesItem';
import moment from 'moment/moment';
import { LoadingWeather } from '../Utility/LoadingWeather';
import classes from './WeatherTimesList.module.css';

const WeatherTimesList = ({ weather, isLoading }) =>
{
    const [weatherStatusList, setWeatherStatusList] = useState('Today');
    const [selectTimeForNextDays, setSelectTimeForNextDays] = useState('09:00:00');

    const showWithScrolling = useScrollingTop(600);

    // ! const { scrollRef, scrollX, scrollEnd, slide, scrollCheck } = useScrollingWidth();


    let weatherList = [];

    if (weatherStatusList === 'Today')
    {
        const todaysDate = moment().format('YYYY-MM-DD');
        weather.filter(item => item.dt_txt.split(' ').at(0) === todaysDate ? weatherList.push(item) : null)

        console.log('today\'s weather 👇:');
        console.log(weatherList);
    }

    if (weatherStatusList === 'Weekly')
    {
        weather.filter((item) => item.dt_txt.split(' ').at(1) === selectTimeForNextDays ? weatherList.push(item) : null);
        console.log('the next day\'s weather from 5 Day 👇:');
        console.log(weatherList);
    }


    const classesList = showWithScrolling ? classes['weather-times__list'] : classes.hidden;

    return (
        <div className={classes['main-category__list']}>
            <div className={classes['weather-status__list']}>
                <button className={weatherStatusList === 'Today' && classes.active}
                    onClick={() => setWeatherStatusList('Today')}
                >Today</button>
                <button className={weatherStatusList === 'Weekly' && classes.active}
                    onClick={() => setWeatherStatusList('Weekly')}
                >Weekly</button>

                {
                    weatherStatusList === 'Weekly' && (
                        <select style={{color:'#000'}} className={classes['select-time']} value={selectTimeForNextDays} onChange={(e) => setSelectTimeForNextDays(e.target.value)}>
                            <option value='00:00:00'>00:00</option>
                            <option value='03:00:00'>03:00</option>
                            <option value='06:00:00'>06:00</option>
                            <option value='09:00:00'>09:00</option>
                            <option value='12:00:00'>12:00</option>
                            <option value='15:00:00'>15:00</option>
                            <option value='18:00:00'>18:00</option>
                            <option value='21:00:00'>21:00</option>
                        </select>
                    )
                }

            </div>

            {
                !isLoading && <ul className={classesList} >
                    {
                        weatherList.map(item => <WeatherTimesItem
                            key={item.dt}
                            item={item}
                            weatherStatusList={weatherStatusList}
                        />)
                    }
                </ul>
            }

            
            {/* {
                //! doesn't work scrolling on width
                scrollX !== 0 &&
                <button className={classes['btn-prev']} onClick={() => slide(-500)}><BsArrowLeftCircleFill />
                </button>
            }
            {
                scrollEnd &&
                <button className={classes['btn-next']} onClick={() => slide(+500)}>
                    <BsArrowRightCircleFill />
                </button>
            } */}

        </div>
    )
}

export default WeatherTimesList


