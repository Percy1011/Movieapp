import React from 'react';

const MovieDetails = ({ movie }) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={IMGPATH + movie.poster_path} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">{movie.overview}</p>
          <p className="card-text">Release Date: {movie.release_date}</p>
          <p className="card-text">Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;