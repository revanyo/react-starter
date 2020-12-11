import MovieListEntry from './MovieListEntry.jsx'
import React from 'react';
import movieData from '../lib/movieData.js';
import App from './App.js'


var MovieList = (props) => {
    console.log(props.movieList)
    return (
        
    <div className = 'movieList'>
        <ul>
            {props.movieList.map((props, key) => (
                <MovieListEntry movie = {props} key = {key}/>
            ))}
        </ul>
    </div>
    
    );
}


  export default MovieList;