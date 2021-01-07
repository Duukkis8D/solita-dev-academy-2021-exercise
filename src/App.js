import React, { useState, useEffect } from 'react'
import NamesList from './components/NamesList'
import nameService from './services/nameService'

const App = ( props ) => {
  const [ names, setNames ] = useState([])
  // sortType = 'amount' OR 'alphabet'
  const [ sortType, setSortType ] = useState('')

  useEffect(() => {
    nameService
      .getNames()
      .then( response => {
        setNames( response.data )
        setSortType( 'alphabet' ) // sort type hardcoded
      })
  }, [])

  return (
    <div>
      <h1>Most common names in Solita</h1>
      <NamesList names={ names } sortType={ sortType }></NamesList>
      <p>Sort names</p>
      <button>show by amount</button>
      <button>show in alphabetical order</button>
      <p>Total amount of all the names</p>
      <button>show total amount</button>
      <p>Give a name for which you want see occurrence</p>
      <form></form>
    </div>
  )
}

export default App