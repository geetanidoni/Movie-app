import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
  alt={movie.Title}
/>
<h3>{movie.Title}</h3>
<p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;