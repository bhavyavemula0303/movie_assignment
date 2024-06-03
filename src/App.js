import './App.css';
import Login from "./login/Login";
import Signup from "./signup/Signup";
import List from './list/List';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { RouterProvider,createBrowserRouter } from 'react-router-dom';


function App() {
  // const route=createBrowserRouter ([
  //    {
  //     path:"/",
  //     element: <Signup />,
  //    },
  //    {
  //     path:"/login",
  //     element: <Login />,
  //    },
  //    {
  //     path:"/list",
  //     element: <List />,
  //    }
  // ])
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={route}></RouterProvider> */}
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import MovieList from './components/MovieList';
// import MovieListHeading from './components/MovieListHeading';
// import SearchBox from './components/SearchBox';
// import AddFavourites from './components/AddFavourites';
// import RemoveFavourites from './components/RemoveFavourites';

// const App = () => {
// 	const [movies, setMovies] = useState([]);
// 	const [favourites, setFavourites] = useState([]);
// 	const [searchValue, setSearchValue] = useState('');

// 	const getMovieRequest = async (searchValue) => {
// 		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

// 		const response = await fetch(url);
// 		const responseJson = await response.json();

// 		if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}
// 	};

// 	useEffect(() => {
// 		getMovieRequest(searchValue);
// 	}, [searchValue]);

// 	useEffect(() => {
// 		const movieFavourites = JSON.parse(
// 			localStorage.getItem('react-movie-app-favourites')
// 		);

// 		if (movieFavourites) {
// 			setFavourites(movieFavourites);
// 		}
// 	}, []);

// 	const saveToLocalStorage = (items) => {
// 		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
// 	};

// 	const addFavouriteMovie = (movie) => {
// 		const newFavouriteList = [...favourites, movie];
// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	};

// 	const removeFavouriteMovie = (movie) => {
// 		const newFavouriteList = favourites.filter(
// 			(favourite) => favourite.imdbID !== movie.imdbID
// 		);

// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	};

// 	return (
// 		<div className='container-fluid movie-app'>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Movies' />
// 				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
// 			</div>
// 			<div className='row'>
// 				<MovieList
// 					movies={movies}
// 					handleFavouritesClick={addFavouriteMovie}
// 					favouriteComponent={AddFavourites}
// 				/>
// 			</div>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Favourites' />
// 			</div>
// 			<div className='row'>
// 				<MovieList
// 					movies={favourites}
// 					handleFavouritesClick={removeFavouriteMovie}
// 					favouriteComponent={RemoveFavourites}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default App;
