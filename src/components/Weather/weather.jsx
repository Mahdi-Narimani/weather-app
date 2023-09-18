import { useWeatherDataWithCityID } from '../../hooks/useFetchingWeatherData';
import classes from './Weather.module.css';
import { LoadingWeather } from '../Utility/LoadingWeather';
import { CityInfo } from './CityInfo';
import { WeatherInfo } from './WeatherInfo';


const Weather = ({ cityID }) =>
{
    const { data, isLoading, error } = useWeatherDataWithCityID(cityID)


    //TODO (Later, instead of this photo, an API is used to make the city's photos of the desired city 👇)
    const Background = '/Naghsh-e-Jahan-Isfahan-5.jpg';

    const BackgroundStyling = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    const weatherClasses = `${classes.weather} ${!isLoading && classes.backdropImage}`;

    const weatherStyling = !isLoading ? BackgroundStyling : { background: 'transparent' };

    return (
        <section className={weatherClasses} style={weatherStyling}>
            {!error && isLoading && <LoadingWeather />}
            {error && <p className='error-message'>⛔{error}</p>}
            {!isLoading && !error && <>
                <CityInfo weather={data} />
                <WeatherInfo weatherData={data} />
            </>}
        </section>
    )
}

export default Weather