import React from 'react'

const SortNames = ({ sortType, handleSortType }) => {
    return (
        <div id='sortNamesContainer'>
            <label for='names'>Sort names</label>
            <select name='names' id='selectSortType' onChange={ handleSortType } value={ sortType }>
                <option value='byAmount'>by amount, most popular first</option>
                <option value='inABC'>in alphabetical order</option>
            </select>
        </div>
    )
}

export default SortNames