import React, { useState } from "react";
import MovieList from "./components/MovieList";
import { fetchMoviesBySearch } from "./services/movieApi";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (query.trim()) {
      const results = await fetchMoviesBySearch(query);
      setMovies(results);
    }
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Show movies only after search */}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default App;