import './App.css';
import { useState } from "react";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import { data } from "./data.js";

function App() {
const [movies, setMovies] = useState(data);
const [searchTerm, setserchTerm] = useState("");
const [searchResults, setSearchResults]= useState([]);
const addMovie = (newMovies) => {
  setMovies([...movies, newMovies]);
}  ;
const searchHandler =(searchTerm) => {
 setserchTerm(searchTerm);
 if(searchTerm !== ""){
   const newMoviesList = movies.filter((movies) => {
return Object.values(movies)
.join(" ")
.toLowerCase()
.includes(searchTerm.toLowerCase());
   });
   setSearchResults(newMoviesList);
 }else {
   setSearchResults(movies);
 }
};
return (
    <div>
      <Header addMovie={addMovie} />
        <MoviesList movies={movies}
        term={searchTerm}
        searchkeyword={searchHandler}
        />
       
    </div>
  );
}

export default App;
