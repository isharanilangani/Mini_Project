import React from 'react';
import LoginForm from "./Components/LoginForm";

import './App.css';

// Navigation from './component/Navigationbar';
//import Loginpage from './pages/Loginpage';
//import Bot_requestcode from './pages/Bot_request';
//import Sidebarcode from './component/Sidebar';
//import Content from './component/Content';
//import Bookpage from './pages/Book';
import Bookupdatepage from './pages/Book_update';


function App() {
  return (
    
    <div className="App">
    <Bookupdatepage/> 
    <LoginForm/>
    </div>
  );
}

export default App;
