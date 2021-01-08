import React, { useState, useEffect } from 'react'
import NamesList from './components/NamesList'
import TotalAmount from './components/TotalAmount'
import nameService from './services/nameService'

const App = ( props ) => {
  const [ names, setNames ] = useState([])
  // sortType = 'amount' OR 'alphabet' OR totalAmount
  const [ sortType, setSortType ] = useState( 'amount' ) // default sort method is by amount
  const [ totalAmount, setTotalAmount ] = useState( false )

  useEffect(() => {
    nameService
      .getNames()
      .then( response => {
        setNames( response.data )
      })
  }, [])

  const handleShowByAmount = () => {
    setSortType( 'amount' )
  }

  const handleShowInABC = () => {
    setSortType( 'alphabet' )
  }

  const handleShowTotal = () => {
    setTotalAmount( totalAmount === true ? false : true )
  }

  return (
    <div>
      <h1>Most common names in Solita</h1>

      <p>Sort names</p>
      <button onClick={ handleShowByAmount }>show by amount</button>
      <button onClick={ handleShowInABC }>show in alphabetical order</button>
      <NamesList names={ names } sortType={ sortType }></NamesList>

      <p>Total amount of all the names</p>
      <button onClick={ handleShowTotal }>show total amount</button>
      <TotalAmount names={ names } totalAmount={ totalAmount }></TotalAmount>
      
      <p>Give a name for which you want see occurrence</p>
      <form></form>
    </div>
  )
}

export default App