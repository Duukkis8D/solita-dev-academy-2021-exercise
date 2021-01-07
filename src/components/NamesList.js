import React from 'react'

const NamesList = ({ names, sortType }) => {
    const sortNames = () => {
        if ( sortType === 'amount' ) {
            names.sort(( a, b ) => b.amount - a.amount )
            return names.map( name =>
                <li key={ name.name }>{ name.name }<br></br>amount: { name.amount }</li>
            )
        }

        if ( sortType === 'alphabet' ) {
            names.sort(( a, b ) => {
                const nameA = a.name
                const nameB = b.name
    
                if ( nameA < nameB ) return -1
                if ( nameA > nameB ) return 1
                return 0
            })
            return names.map( name =>
                <li key={ name.name }>{ name.name }<br></br>amount: { name.amount }</li>
            )
        }

        else return
    }

    return (
        <ul>{ sortNames() }</ul>
    )
}

export default NamesList