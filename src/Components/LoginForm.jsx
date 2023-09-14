import React, { useState } from 'react';
import './LoginForm.css';
import logo from '../Assest/logo.jpeg';
import left from '../Assest/left.jpeg';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className='left-image'>
        <img className="left" src={left} alt='logo'></img>
      </div>

    <div className='right-form'>
    <img  className="logo" src={logo}></img>
      <h1 className='admin'>ADMIN</h1>
      <div>
        <input
          type="text"
          value={username} placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password} placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      </div>
    </form>

  );
}

export default LoginForm;
