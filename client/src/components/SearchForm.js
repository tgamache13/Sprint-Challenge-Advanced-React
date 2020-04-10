import React, { useState } from 'react';
import SearchInput from './SearchInput';

const SearchForm = ({search, handleSubmit, setSearch}) => {
    const [searchInput, setSearchInput, handleSearchInput] = SearchInput();

    

    return(
        <div className="search-form">
            <form  onSubmit={handleSubmit}>
                <input type="text" name="searchInput" value={searchInput} placeholder="Enter player to search for" onChange={event => handleSearchInput(event.target.value)} />
                <button type="submit" >Submit</button>
                <button onClick={event => {
                    setSearch('');
                    setSearchInput('');
                    event.preventDefault();
                }} 
                >Clear</button>
            </form>
        </div>
    )
}
 export default SearchForm;
