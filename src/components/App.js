import React from 'react';
import MovieList from './MovieList.jsx';
import movieData from '../lib/movieData.js';
import Css from '../main.css';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: movieData,
      searchValue: '',
    }
  }


  searchMovieList(props) {
    this.setState({
      searchValue: props,
      movies: this.searchMovies(props)
      
    })
  }

  searchMovies(props) {
    var result = []
    for (var i =0; i <movieData.length; i++) {
      var currentTitle = movieData[i].title
      if (currentTitle.indexOf(props) >= 0) {
        result.push({title: currentTitle})
      }
    }
    return result;
    
  }

  handleAddMovie(props) {
    movieData.push({title: props})
    this.setState({
      movies: movieData
    })
  }
   
  render(){
    return(
    <div>
      <div>
        <div className = 'addMovie'>
        <AddMovie handleAddMovie = {this.handleAddMovie.bind(this)} />
        </div>
        <div>
        <button>Watched</button>
        <button>To Watch</button>
        <div className = 'searchBar'>
        <Search handSearchInputChange = {this.searchMovieList.bind(this)} />
        </div>
        </div>
      </div>
      <div className = 'movieList'>
        <MovieList movieList ={this.state.movies} />
      </div>
    </div>
  )}
}

export default App;
