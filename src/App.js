import React, { useState, useEffect } from 'react'
import NamesList from './components/NamesList'
import nameService from './services/nameService'

const App = ( props ) => {
  const [ names, setNames ] = useState([])

  useEffect(() => {
    nameService
      .getNames()
      .then( response => {
        setNames( response.data )
      })
  }, [])

  return (
    <div>
      <h1>Names app</h1>
      <NamesList names={ names }></NamesList>
    </div>
  )
}

export default App