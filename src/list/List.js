import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './list.css';
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavourites from "../components/AddFavourites";
import RemoveFavourites from "../components/RemoveFavourites";


const List= () => {
    const tempMovies = ["movie1","movie2","movie3","movie4","movie5","movie6", ]
    const[movies,setMovies]=useState(tempMovies);
    const [favourites,setFavourites]=useState([]);
    const [searchValue,setSearchValue]=useState('');
        const getMovieRequest=async(searchValue)=>{
            const url= `http://www.omdbapi.com/?s=star wars&apikey=41ed827b`
            const response= await fetch (url);
            const responseJson = await response.json();
            if(responseJson.Search){
                setMovies(responseJson.Search);
           }
        };
        useEffect(()=>{
            getMovieRequest(searchValue);
        }, [searchValue]);

        useEffect(()=>{
            const movieFavourites=JSON.parse(
                localStorage.getItem('react-movie-app-favourites')
            );
            setFavourites(movieFavourites);
        }, []);
        const saveToLocalStorage=(items)=>{
            localStorage.setItem("react-movie-app-favourites",JSON.stringify(items));
        };

        const addFavouriteMovie=(movie)=>{
            const newFavouriteList=[...favourites,movie];
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
        };

        const removeFavouritesMovie=(movie)=>{
            const newFavouriteList=favourites.filter((favourite)=>favourite.imdbID !== movie);
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
        };


        return <div className='container-fluid movie-pp'>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading='Movies'/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className="row">
                <MovieList
                movies={movies}
                handleFavouritesClick={addFavouriteMovie} 
                favouriteComponent={AddFavourites}/>
            </div>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading='Favourites'/>
            </div>
            <div className="row">
                <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouritesMovie} 
                favouriteComponent={RemoveFavourites}/>
            </div>

           
        </div>
};

export default List;