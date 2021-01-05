import React from 'react'

const List = ( { names } ) => {
    const sortByAmount = () => {
        // names-taulukkoa pitäisi ehkä käydä läpi foreach-loopissa ja tehdä uusi järjestetty taulukko.
        names.sort(( a, b ) => a - b )
        console.log( names )
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