import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

/**
 *  Connect a React.js app directly to the Database will exposed our database credentials.
 *  Do this is not a good way to do it.
 *  We need a backend App (Node.js, PHP, etc).
 *  The react app communicates with the backend and the backed will communicate with the database.
 */

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovisHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://react-http-25717-default-rtdb.firebaseio.com/movies.json`);
      if(!response.ok) {
        throw new Error (`Something went wrong. Error status: ${response.status}`);
      }
      const data = await response.json();

      const loadedMovies = [];
      for(const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      /*const transformedMovies = data.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });*/
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovisHandler();
  }, [fetchMovisHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(`https://react-http-25717-default-rtdb.firebaseio.com/movies.json`, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;
  if(movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if(error) {
    content = <p>{error}</p>
  }
  if(isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovisHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
