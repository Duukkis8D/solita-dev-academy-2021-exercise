import React from 'react'

const NamesList = ({
                    names,
                    sortType,
                    showAll,
                    searchPhrase,
                    handleShowByAmount,
                    handleShowInABC
                    }) => {
    const persons =
        showAll ?
            names : 
            names.filter( person => person.name.toUpperCase().includes( searchPhrase.toUpperCase() ))

    const renderNames = () => {
        if ( sortType === 'amount' ) {
            persons.sort(( a, b ) => b.amount - a.amount )
            return persons.map( name => <tr key={ name.name }>
                                            <td key={ name.name }>{ name.name }</td>
                                            <td key={ name.amount }>{ name.amount }</td>
                                        </tr>
            )
        }

        if ( sortType === 'alphabet' ) {
            persons.sort(( a, b ) => {
                if ( a.name < b.name ) return -1
                if ( a.name > b.name ) return 1
                return 0
            })
            return persons.map( name => <tr key={ name.name }>
                                            <td key={ name.name }>{ name.name }</td>
                                            <td key={ name.amount }>{ name.amount }</td>
                                        </tr>
            )
        }

        else return null
    }

    // Change sort names buttons to one dropdown menu
    return (
        <div>
            <p>Sort names</p>
            <button onClick={ handleShowByAmount }>show by amount</button>
            <button onClick={ handleShowInABC }>show in alphabetical order</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    { renderNames() }
                </tbody>
            </table>
        </div>
    )
}

export default NamesList