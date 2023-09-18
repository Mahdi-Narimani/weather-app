import { useEffect, useState } from "react";

const KEY = 'c91deb8f9019b002040e593a9e44e531';

export const useWeatherData = (query, onError) =>
{
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>
    {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchingData = async () =>
        {
            try
            {
                setIsLoading(true);
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}`, { signal: signal });

                if (!res.ok) throw new Error('Something went wrong with fetching weather data');
                const data = await res.json();

                if (data.Response === 'False') throw new Error('City not Found');

                setData(data);
                setIsLoading(false);
            }
            catch (error)
            {
                if (!error.name === 'AbortError')
                    onError(error.message);
            }
        }
        fetchingData();

        return () => controller.abort();
    }, [query, onError])

    return { data, isLoading }

}


export const useWeatherDataWithCityID = (cityID) =>
{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                setIsLoading(true);

                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${KEY}`);
                if (!res.ok) throw new Error('Something went wrong with fetching weather data');

                const data = await res.json();
                if (data.Response === 'False') throw new Error('City not Found');

                setData(data);
                setIsLoading(false);
            }
            catch (error)
            {
                setError(error.message);
            }
        }
        fetchData();
    }, [cityID])

    return { data, isLoading, error }
}

export const useWeatherDataWithCityIdForTimes = (cityID) =>
{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                setIsLoading(true);

                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${KEY}`);
                if (!res.ok) throw new Error('Something went wrong with fetching weather data');

                const data = await res.json();
                if (data.Response === 'False') throw new Error('City not Found');

                setData(data.list);
                setIsLoading(false);
            }
            catch (error)
            {
                setError(error.message);
            }
        }
        fetchData();
    }, [cityID])

    return { data, isLoading, error }
}