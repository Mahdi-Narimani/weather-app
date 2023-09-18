import React from 'react';
import classes from './SearchItem.module.css';
import { LoadingItem } from '../Utility/LoadingItem';

const SearchItem = ({ item, onSelectedID, onClose, isLoading, onFocusInput }) =>
{
    const id = item?.id;
    const cityName = item?.name;
    const country = item?.sys.country;
    const temperature = ((item?.main.temp) - 273).toFixed();

    const clickedHandler = (id) =>
    {
        onSelectedID(id);
        onClose();
        onFocusInput(true);
    }



    return (
        <>
            {isLoading && <LoadingItem />}
            {
                !isLoading && <li className={classes['search-item']} onClick={() => clickedHandler(id)}>
                    <span className={classes['badge-country']}>{country}</span>
                    <span className={classes['badge-city']}>{cityName}</span>
                    <span className={classes['badge-temp']}>{temperature}<sup>℃</sup></span>
                </li>
            }
        </>
    )
}

export default SearchItem