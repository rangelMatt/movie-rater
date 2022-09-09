import React from 'react';

function MovieForm(props) {
  return (
    <h1>Edit: {props.movie && props.movie.title}</h1>
  )
}

export default MovieForm;