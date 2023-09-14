import React from 'react'
import Navigation from '../component/Navigationbar.jsx';
import Sidebarcode from '../component/Sidebar.jsx';
import Contentcode from '../component/Content.jsx';
import '../css/Bot_request.css';
import '../css/Content.css';

export default function Bot_request() {
  return (
  <div class='fullpage'>
     <div  >
       <Sidebarcode/>
     </div>
    <div class='bars'>
      <div>
      <Navigation/>
      </div>
      <div>
        <Contentcode/> 
      </div>
    </div>
  </div>
   
  )
}
