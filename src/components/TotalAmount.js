import React from 'react'

const TotalAmount = ({ names, totalAmount }) => {
    const renderTotalAmount = () => {
        if ( totalAmount === true ) {
            const reducer = ( accumulator, currentValue ) => accumulator + currentValue
            const totalAmount = names.map( person => person.amount )
                                    .reduce( reducer, 0 )
            return totalAmount
        }

        else return null
    }

    return <p>{ renderTotalAmount() }</p>
}

export default TotalAmount