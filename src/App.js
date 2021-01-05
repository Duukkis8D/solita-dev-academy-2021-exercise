import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './components/List'

const App = ( props ) => {
  const [ names, setNames ] = useState([])

  useEffect(() => {
    axios
      .get( 'http://localhost:3001/names' )
      .then( response => {
        setNames( response.data )
      })
  }, [])

  return (
    <div>
      <h1>Names app</h1>
      <List names={ names }></List>
    </div>
  )
}

export default App