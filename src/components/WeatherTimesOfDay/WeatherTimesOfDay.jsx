import WeatherTimesList from './WeatherTimesList';
import { useWeatherDataWithCityIdForTimes } from '../../hooks/useFetchingWeatherData'
import classes from './WeatherTimesOfDay.module.css';
import { useScrollingTop } from '../../hooks/useScrolling';

const WeatherTimesOfDay = ({ cityID }) =>
{
    const showWithScrolling = useScrollingTop(400)

    const { data, isLoading, error } = useWeatherDataWithCityIdForTimes(cityID);

    const classesTitle = showWithScrolling ? classes['show-title'] : classes.hidden

    return (
        <section className={classes.weathers}>
            <div className={classesTitle}>
                <h1>{error ? `⛔${error}` : 'The Weather At Different Hours Today'}</h1>
            </div>
            <WeatherTimesList weather={data} isLoading={isLoading} />
        </section>
    )
}

export default WeatherTimesOfDay