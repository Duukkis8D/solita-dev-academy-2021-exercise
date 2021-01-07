import React from 'react'

const NamesList = ({ names, sortType }) => {
    const renderNames = () => {
        if ( sortType === 'amount' ) {
            names.sort(( a, b ) => b.amount - a.amount )
            return names.map( name =>
                <li key={ name.name }>{ name.name }<br></br>amount: { name.amount }</li>   
            )
        }

        if ( sortType === 'alphabet' ) {
            names.sort(( a, b ) => {
                if ( a.name < b.name ) return -1
                if ( a.name > b.name ) return 1
                return 0
            })
            return names.map( name =>
                <li key={ name.name }>{ name.name }<br></br>amount: { name.amount }</li>
            )
        }

        if ( sortType === 'totalAmount' ) {
            const reducer = ( accumulator, currentValue ) => accumulator + currentValue.amount
            names.reduce( reducer )
            return <li>{ names }</li>
        }

        else return null
    }

    return (
        <ul>{ renderNames() }</ul>
    )
}

export default NamesList