import React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder = 'Search', handleChange}) => {
    return  <input
            className='search-box'
            type="search"
            placeholder= {placeholder}
            onChange={handleChange} />
}