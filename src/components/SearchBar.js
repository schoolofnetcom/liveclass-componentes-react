import React, { Component } from 'react';

// COMPONENTE DE APRESENTAÇÃO
const SearchBar = ({ handleOnChange, handleClick }) => {
    return (
        <div>
            <input type="text" name="searchTerm" id="searchTerm" onChange={handleOnChange} placeholder="Type to search..." />
            <button type="button" onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchBar;