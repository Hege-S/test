import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PostForm} from './components/PostForm'
import NAMES from './components/data.json'
import { useState } from 'react'

interface data {
  id: number
  firstName: string
  lastName: string
}

function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event:any) => {
    setQuery(event.target.value)
  }
  const filteredNames = NAMES.filter(item => {
    return item.firstName.includes(query) || item.lastName.includes(query)
  })

  return (
    <div className="App">
      <div>
        <PostForm/>
        <input type='text' value={query} onChange={changeHandler}></input>
        {
          filteredNames.map((item) => (
            <p key={item.id}> {item.firstName} {item.lastName} </p>
          ))
        }
      </div>
    </div>
  );
}

export default App;
