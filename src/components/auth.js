import React, { useState, useEffect, useContext } from 'react';
import { API } from '../api-service';
import { TokenContext } from '../index';

function Auth() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {token, setToken} = useContext(TokenContext);

  useEffect( () => {
    console.log(token);
    if(token) window.location.href = '/movies'
  }, [token]) 

  const loginClicked = () => {
    API.loginUser(username, password)
      .then(resp => setToken(resp.token))
      .catch(error => console.log(error))
  }
  return (
    <form>
      <label htmlFor="username">Username</label><br />
      <input id="username" type="text" placeholder="username" value={username}
        onChange={e => setUsername(e.target.value)}
      /><br />
      <label htmlFor="password">Password</label><br />
      {/* TODO: add autofill for password and maybe username */}
      <input id="password" type="password" placeholder="current-password"
        value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={loginClicked}>Login</button>


    </form>
  )
}

export default Auth;