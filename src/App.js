import './App.css';
import { useState } from "react";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import { data } from "./data.js";

function App() {
const [movies, setMovies] = useState(data);
const addMovie = (newMovies) => {
  setMovies([...movies, newMovies]);
}  ;
return (
    <div>
      <Header addMovie={addMovie}/>
        <MoviesList movies={movies}/>

    </div>
  );
}

export default App;
