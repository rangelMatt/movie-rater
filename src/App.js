import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie';
import { useFetch } from './hooks/useFetch';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  const [token, setToken, deleteToken] = useCookies(['mr-token']);
  const [data, loading, error] = useFetch();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  useEffect(() => {
    setMovies(data);
  }, [data])

  useEffect(() => {
    if (!token['mr-token']) window.location.href = '/';
  }, [token])

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
    updatedMovie(movie);
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const updatedMovie = movie => {
    const newMovies = movies.map(mov => {
      if (movies.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovies(newMovies)
  }
  const newMovie = () => {
    setEditedMovie({ title: '', description: '' });
    setSelectedMovie(null);
  }
  const movieCreated = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }
  const removeClicked = movie => {
    const newMovies = movies.filter(mov => {
      if (mov.id === movie.id) {
        return false;
      }
      return true;
    })
    setMovies(newMovies);
  }

  const logoutUser = () => {
    deleteToken(['mr-token']);
  }

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error loading movies</h1>

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm} />
          <span>Movie Rater</span>
        </h1>
        <div>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            onClick={logoutUser}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            title="Logout" />
          {/* {isHovering ? "Logout" : null} */}
        </div>

      </header>
      <div className="layout">
        <div>
          <MovieList
            movies={movies}
            movieClicked={loadMovie}
            editClicked={editClicked}
            removeClicked={removeClicked}
          />
          <button
            onClick={newMovie}
            title="Add Movie">New Movie</button>
        </div>

        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editedMovie ?
          < MovieForm
            movie={editedMovie}
            updatedMovie={updatedMovie}
            movieCreated={movieCreated}
          />
          : null}

      </div>
    </div>
  );
}

export default App;
