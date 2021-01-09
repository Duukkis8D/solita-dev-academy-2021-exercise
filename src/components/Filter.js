import React from 'react'

const Filter = ({ searchPhrase, handleSearch }) => {
    return (
        <div id='filterContainer'>
            <p>Give a name for which you want to see the occurrence</p>
            <input value={ searchPhrase } onChange={ handleSearch }></input>
        </div>
    )
}

export default Filter