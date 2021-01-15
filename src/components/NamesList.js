import React from 'react'

const NamesList = ({
                    names,
                    sortType,
                    showAll,
                    searchPhrase
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
                                        </tr> )
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
                                        </tr> )
        }

        else return null
    }

    const renderNamesList = () => {
        if ( persons.length > 0 ) {
            return (
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
            )
        }

        if ( names.length === 0 ) {
            return <p>Loading...</p>
        }

        else return <p>No names found! Try another name.</p>
    }

    return (
        <div id='namesListContainer'>{ renderNamesList() }</div>
    )
}

export default NamesList