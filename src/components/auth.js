import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Auth() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);

  const [token, setToken] = useCookies(['mr-token']);

  useEffect(() => {
    if (token['mr-token']) window.location.href = '/movies'
  }, [token])

  const loginClicked = () => {
    API.loginUser({ username, password })
      .then(resp => setToken('mr-token', resp.token))
      .catch(error => console.log(error))
  }
  const registerClicked = () => {
    API.registerUser({ username, password })
      .then(() => loginClicked())
      .catch(error => console.log(error))
  }

  const isDisabled = username.length === 0 || password.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
      </header>
      <div className="login-container">


        <label htmlFor="username">Username</label><br />
        <input id="username" type="text" placeholder="username" value={username}
          onChange={e => setUsername(e.target.value)}
        /><br />
        <label htmlFor="password">Password</label><br />
        {/* TODO: add autofill for password and maybe username */}
        <input id="password" type="password" placeholder="current-password"
          value={password} onChange={e => setPassword(e.target.value)} /><br />
        {isLoginView ?
          <button onClick={loginClicked} disabled={isDisabled}>Login</button> :
          <button onClick={registerClicked} disabled={isDisabled}>Register</button>}

        <hr></hr>
        {isLoginView ?
          <div>Don't have an account yet?
            <p>
              <Button
                variant="link"
                className='here-button'
                onClick={() => setIsLoginView(false)}
              >Create an account</Button>
            </p>
          </div> :
          <div> You are already have an account?
            <p>
            <Button
              variant="link"
              className='here-button'
              onClick={() => setIsLoginView(true)}
            >Login here</Button>
            </p>
          </div>}


      </div>

    </div>
  )
}

export default Auth;