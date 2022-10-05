import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';



function MovieForm(props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [token] = useCookies(['mr-token']);

  const updateClicked = () => {
    API.updateMovie(props.movie.id, { title, description }, token['mr-token'])
      .then(resp => props.updatedMovie(resp))
      // TODO: display error message
      .catch(error => console.log(error))
  }
  const createClicked = () => {
    API.createMovie({ title, description }, token['mr-token'])
      .then(resp => props.movieCreated(resp))
      // TODO: display error message
      .catch(error => console.log(error))
  }


  useEffect(() => {
    setTitle(props.movie.title);
    setDescription(props.movie.description);
  }, [props.movie])

  // TODO: fill in length to less than
  const isDisabled = title.length === 0 || description.length === 0;

  // TODO: Added refresh page because updating an existing movie wouldn't work until I refreshed the page. Found a working solution but would like to look into a better solution.
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <React.Fragment>
      {props.movie ? (
        <div>
          <label htmlFor="title">Title</label><br />
          <input id="title" type="text" placeholder="title" value={title}
            onChange={e => setTitle(e.target.value)}
          /><br />
          <label htmlFor="description">Description</label><br />
          <textarea id="description" type="text" placeholder="description" value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea><br />
          {props.movie.id ?
            <button onClick={() => {
              updateClicked();
              refreshPage();
            }} disabled={isDisabled}>Update</button> :
            <button 
            onClick={createClicked} disabled={isDisabled}>Create</button>
          }

        </div>

      ) : null}
    </React.Fragment>
  )
}


export default MovieForm;