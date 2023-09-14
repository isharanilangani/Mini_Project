import React from 'react'
import '../css/Navigationbar.css';
import Searchicon from '../images/Searchicon.svg';
import liblogo from '../images/logo.svg';

export default function  Navigationbar() {
  return (
    <div class='navigation'>
      <img src={Searchicon} alt='search' class='Searchicon'/>
      <h1 class='topic'>Welcome ChatLib</h1> 
      <img src={liblogo} alt='logo' class='logo'/>  
    </div>
  )
}

