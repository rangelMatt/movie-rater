const API_SERVER = process.env.REACT_APP_API_URL;

export class API {
  
  static loginUser(body) {
    return fetch(`${API_SERVER}/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(resp => resp.json())
  }
  static registerUser(body) {
    return fetch(`${API_SERVER}/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(resp => resp.json())
  }

  static getMovies(token) {
    // TODO: look into axios to call API data
    return fetch(`${API_SERVER}/api/movies/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    }).then(resp => resp.json())
  }
  static updateMovie(mov_id, body, token) {
    return fetch(`${API_SERVER}/api/movies/${mov_id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify(body),
    }).then(resp => resp.json())
  }
  static createMovie(body, token) {
    return fetch(`${API_SERVER}/api/movies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify(body),
    }).then(resp => resp.json())
  }
  static deleteMovie(mov_id, token) {
    return fetch(`${API_SERVER}/api/movies/${mov_id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
  }
}
