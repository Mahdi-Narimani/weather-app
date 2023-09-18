import React from 'react';
import Weather from '../components/Weather/weather';
import WeatherTimesOfDay from '../components/WeatherTimesOfDay/WeatherTimesOfDay';

const Home = ({ cityID }) =>
{
  return (
    <div className='home'>
      <Weather cityID={cityID} />
      <WeatherTimesOfDay cityID={cityID} />
    </div>
  )
}

export default Home