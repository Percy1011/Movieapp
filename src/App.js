import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieList from './Componenets/MovieList';
import MovieListHeading from './Componenets/MovieListHeading';
import SearchBox from './Componenets/SearchBox';
import MovieDetail from './Componenets/MovieDetail'; // Step 1: Import the MovieDetails component

import axios from "axios";

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null); // Step 2: Add state for selected movie

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const getSearchedMovies = () => {
    axios.get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  }

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='MovieFlix' />
        <SearchBox searchValue={search} setSearchValue={setSearch} />
      </div>
      <div className='row'>
        <MovieList movies={movies} onMovieClick={handleMovieClick} /> 
        {selectedMovie && <MovieDetail movie={selectedMovie} />} 
      </div>
    </div>
  );
}

export default App;
