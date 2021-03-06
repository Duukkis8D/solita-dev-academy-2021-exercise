import React, { useState, useEffect } from 'react'
import SortNames from './components/SortNames'
import TotalAmount from './components/TotalAmount'
import Filter from './components/Filter'
import NamesList from './components/NamesList'
import nameService from './services/nameService'
import './css/App.css'
import './css/SortNames.css'
import './css/TotalAmount.css'
import './css/Filter.css'
import './css/NamesList.css'

const App = () => {
  const [ names, setNames ] = useState( [] )
  // sortType = 'amount' OR 'alphabet' (defaults to 'amount')
  const [ sortType, setSortType ] = useState( 'amount' )
  const [ searchPhrase, setSearchPhrase ] = useState( '' )
  const [ showAll, setShowAll ] = useState( true )

  useEffect(() => {
    nameService
      .getNames()
      .then( response => {
        setNames( response.data )
      })
  }, [])

  const handleSortType = () => {
    setSortType( sortType === 'amount' ? 'alphabet' : 'amount' )
  }

  const handleSearch = ( event ) => {
    setShowAll( false )
    setSearchPhrase( event.target.value )
    if ( event.target.value === '' ) setShowAll( true )
  }

  return (
    <div id='appContainer'>
      <h1>Most common names in Solita</h1>
      <SortNames handleSortType={ handleSortType}></SortNames>
      <Filter searchPhrase={ searchPhrase } handleSearch={ handleSearch }></Filter>
      <NamesList names={ names }
                 sortType={ sortType }
                 showAll={ showAll }
                 searchPhrase={ searchPhrase }
                 handleSortType={ handleSortType }></NamesList>
      <TotalAmount names={ names }></TotalAmount>
    </div>
  )
}

export default App