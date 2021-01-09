import React from 'react'

const SortNames = ({ handleShowByAmount, handleShowInABC }) => {
    // Change sort names buttons to one dropdown menu
    return (
        <div id='sortNamesContainer'>
            <p>Sort names</p>
            <button onClick={ handleShowByAmount }>show by amount</button>
            <button onClick={ handleShowInABC }>show in alphabetical order</button>
        </div>
    )
}

export default SortNames