import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = (props) => {
  const [ names, setNames ] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/names')
      .then(response => {
        console.log(response.data)
        setNames(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Names app</h1>
    </div>
  )
}

export default App