import React from 'react'

const TotalAmount = ({ names }) => {
    const renderTotalAmount = () => {
        const reducer = ( accumulator, currentValue ) => accumulator + currentValue
        const totalAmount = names.map( person => person.amount )
                           .reduce( reducer, 0 )
        return totalAmount
    }

    return (
        <div id='totalAmountContainer'>
            <p>Total amount of all the names</p>
            <p id='totalAmount'>{ renderTotalAmount() }</p>
        </div>
    )
}

export default TotalAmount