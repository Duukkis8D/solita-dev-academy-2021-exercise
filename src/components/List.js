import React from 'react'

const List = ( { names } ) => {
    const sortByAmount = () => {
        names.sort(( a, b ) => b.amount - a.amount )
        return names
    }

    return (
        <ul>
            { sortByAmount().map( name =>
                <li key={ name.name }>{ name.name }<br></br>amount: { name.amount }</li>
            )}
        </ul>
    )
}

export default List