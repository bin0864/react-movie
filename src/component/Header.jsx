import React from 'react'
import './Header.css'

const Header=()=> {
  return (
    <div className='Header'>
        <h3>명작 모음.zip</h3>
        <h1>MOVIE Diary🎥</h1>
        <p>{new Date().toDateString()}</p>
    </div>
  )
}

export default Header