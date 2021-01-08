import React from 'react'

const TotalAmount = ({ names, totalAmount, handleShowTotal }) => {
    const renderTotalAmount = () => {
        if ( totalAmount === true ) {
            const reducer = ( accumulator, currentValue ) => accumulator + currentValue
            const totalAmount = names.map( person => person.amount )
                                     .reduce( reducer, 0 )
            return totalAmount
        }

        else return null
    }

    return (
        <div>
            <p>Total amount of all the names</p>
            <button onClick={ handleShowTotal }>show/hide total amount</button>
            <p>{ renderTotalAmount() }</p>
        </div>
    )
}

export default TotalAmount