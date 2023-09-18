import React from 'react'
import SearchItem from './SearchItem';
import classes from './SearchList.module.css'

const SearchList = ({ weather, onSelectedID, onClose, isLoading, onFocusInput }) =>
{
  return (
    <ul className={classes['search-list']}>
      <SearchItem
        item={weather}
        onSelectedID={onSelectedID}
        onClose={onClose}
        isLoading={isLoading}
        onFocusInput={onFocusInput}
      />
    </ul>
  )
}



export default SearchList