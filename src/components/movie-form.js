import React, { useState } from 'react';

function MovieForm(props) {

  const [ title, setTitle ] = useState(props.movie.title);
  const [ description, setDescription ] = useState(props.movie.description);

  const updateClicked = () => {
    console.log('update here')
  }

  return (
    <React.Fragment>
      {props.movie ? (
        <div>
          <label for="title">Title</label><br />
          <input id="title" type="text" placeholder="title" value={title}
          onChange={ e => setTitle(e.target.value)}
          /><br />
          <label for="description">Description</label><br />
          <textarea id="description" type="text" placeholder="description" 
          value={description} onChange={ e => setDescription(e.target.value)}
          ></textarea><br />
          <button onClick={updateClicked}>Update</button>
        </div>

      ) : null}
    </React.Fragment>
  )
}


export default MovieForm;