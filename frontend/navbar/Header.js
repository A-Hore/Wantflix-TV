import React from 'react'
import './Header.css'
import logo from "./utils/logo.jpeg"
function Header() {
    
  return (
    
    <div className='header'>
    <img className='header_logo' src={logo} alt=''/>
    {/*logo*/}
    <div className='header_search'>
      <input className='header_searchInput'
        type="text" 
        placeholder='Search'
      />
    </div>
    <div className='signin_but'>
       <button className='but'>
       Sign in
       </button>
    </div>
    </div>
  )
}

export default Header