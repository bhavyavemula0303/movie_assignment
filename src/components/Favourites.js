import React from "react";
import "../App.css";

const Favourites = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="MovieList">
      {props.movies ? (
        props.movies.map((movie) => (
          <div className=" d-flex image-container justify-content-start m-3 ">
            <img src={movie.Poster} alt="movie"></img>
            <div
              onClick={() =>
                props.handleFavouritesClick(movie, console.log(movie))
              }
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))
      ) : (
        <p>your favorite movies can be seen hear</p>
      )}
    </div>
  );
};

export default Favourites;
