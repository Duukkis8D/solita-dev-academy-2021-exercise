import React from 'react'

const Filter = ({ searchPhrase, handleSearch }) => {
    return (
        <div id='filterContainer'>
            <p>Search for a name</p>
            <input value={ searchPhrase } onChange={ handleSearch }></input>
        </div>
    )
}

export default Filter