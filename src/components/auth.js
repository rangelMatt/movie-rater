import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './alert'
import Footer from './footer'


function Auth() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);
  // TODO: 1. Get registerSuccess working properly
  const [registered, setRegistered] = useState(false);
  const [userError, setUserError] = useState(false);
  const [regError, setRegError] = useState(false)

  const [token, setToken] = useCookies(['mr-token']);

  useEffect(() => {
    if (token['mr-token']) window.location.href = '/movies';
  }, [token])

  const loginClicked = () => {
    API.loginUser({ username, password })
      .then(resp => checkToken(resp))
  }

  const checkToken = resp => {
    if (resp.token) {
      setToken('mr-token', resp.token);
    } else {
      setUserError(true)
    }
  }

  const registerClicked = () => {
    API.registerUser({ username, password })
      .then(() => loginClicked())
      // TODO: 1. Get registerSuccess working properly
      .then(() => setRegistered())
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if (isLoginView) {
      setRegError(false)
    } else {
      setUserError(false)
    }
  }, [isLoginView])

  // TODO: 1. Get registerSuccess working properly
  const registerSuccess = () => <Alert type="success">Congrats</Alert>;

  const isDisabled = username.length === 0 || password.length === 0;

  const handleSubmit = () => {
    if (username && password) {
    console.log('form submitted')
    loginClicked()
  };
}



  const handleKeyPress = e => {
    const key = e.keyCode;
    if (key === 13 || e.which === 13) {
      handleSubmit();
    }
  }

  return (

    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome To Movie Rater!</h1>

        </div>

        {isLoginView ? <h1>Login</h1>
          : <h1>Register</h1>}
      </header>
      <div className="login-container">


        <label htmlFor="username">Username</label><br />
        <input
          id="username"
          type="text" placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        /><br />
        <label htmlFor="password">Password</label><br />
        {/* TODO: add autofill for password and maybe username */}
        <input
          id="password"
          type="password" placeholder="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        /><br />

        {regError ? <p style={{ color: "red" }}>A user with that <br />name already exists.</p> : null}
        {userError ? <p style={{ color: "red" }}>Username or<br /> Password Incorrect.</p> : null}
        {isLoginView ?
          <button
            title="Login"
            onClick={loginClicked}
            disabled={isDisabled}
            >Login</button> :
          <button
            title="Register"
            onClick={registerClicked}
            disabled={isDisabled}
            >Register</button>}
        {/* TODO: 1. Get registerSuccess working properly */}
        <h4>
          {registered ? registerSuccess : null}
        </h4>
        {isLoginView ?
          <div>Don't have an account yet?
            <p>
              <Button
                title="Create Account"
                variant="link"
                className='here-button'
                onClick={() => setIsLoginView(false)}
              >Create an account</Button>
            </p>
          </div> :
          <div> You already have an account?
            <p>
              <Button
                title="Login"
                variant="link"
                className='here-button'
                onClick={() => setIsLoginView(true)}
              >Login here</Button>
            </p>
          </div>}
      </div>
      <div>
        {isLoginView ? <><p className="intro container">
          Save your Movies and rate them!
          <br /> Ever wonder if you watched a movie and what you thought of it?<br />
          Behold, Movie Rater! A place where you can store movies and their description.
        </p></> : <><p className="intro container">
          Register to gain access to Movie Rater!
          <br /> From there you will be able to create a movie with a description as well as ranking the movie. <br />
          A movie can be updated as well by clicking the edit button to change the name and/or description, or delete it all together!<br />
          Have Fun!
        </p></>}
      </div>
      <Footer/>  

    </div>
  )
}

export default Auth;