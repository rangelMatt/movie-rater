import React from 'react';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons'


function MovieDetails(props) {


  return (
    <div>
      { props.movie ? (
        <div>
          <h1>{props.movie.title}</h1>
          <p>{props.movie.description}</p>
          <FontAwesomeIcon icon={faTheaterMasks} />
        </div>

      ) : null }

    </div>
  )
}

export default MovieDetails;