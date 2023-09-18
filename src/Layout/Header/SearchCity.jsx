import { useEffect, useRef, useState } from 'react';
import { useWeatherData } from '../../hooks/useFetchingWeatherData'
import SearchList from '../../components/Search/SearchList';
import classes from './Header.module.css';

export const SearchCity = ({ onError, onSelectedID, focusInput, onFocusInput }) =>
{
    const [query, setQuery] = useState('');

    const inputRef = useRef(null);

    const { data, isLoading } = useWeatherData(query, onError);

    useEffect(() =>
    {
        if (focusInput)
        {
            inputRef.current.focus();
        }
    })

    const closeSearchList = () =>
    {
        setQuery('');
    };


    return (
        <div className={classes.search}>
            <input
                ref={inputRef}
                className={`${classes.searchInput} ${focusInput ? classes.searchFocus : ''}`}
                onChange={(e) => setQuery(e.target.value)}
                value={focusInput ? query : ''}
                type="text"
                placeholder="&#xf041;"
            />
            {focusInput && query.length >= 3 && (
                <SearchList
                    weather={data}
                    onSelectedID={onSelectedID}
                    onClose={closeSearchList}
                    isLoading={isLoading}
                    onFocusInput={onFocusInput} />
            )}
        </div>
    );
};
