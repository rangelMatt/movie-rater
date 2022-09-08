import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [movies, setMovie] = useState(['Movie 1', 'Movie 2', 'Movie 3']);

  useEffect(()=>{
    // todo: look into axios to call API data
    fetch("http://127.0.0.1:8000/api/movies", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 32912ccf989e862597a9e9fff3db1d93f5af2529'
      }
    })
    .then( resp => resp.json())
    .then( resp => setMovie(resp))
    .catch( error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          { movies.map(movie => {
            return <h2>{movie}</h2>
          })}
        </div>
        <div>Movie Details</div>
      </div>

    </div>
  );
}

export default App;
