import React from "react";
import "../App.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  console.log(props.movies);

  return (
    <div className="MovieList">
      {props.movies.map((movie) => (
        <div className="MovieList-main d-flex image-container justify-content-start m-3 ">
          <div className="movie-detail">
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt="movie"></img>
          </div>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
