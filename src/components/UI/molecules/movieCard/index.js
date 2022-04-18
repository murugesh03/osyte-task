import React from "react";

const MovieCard = (props) => {
  const { poster_path_full, title, vote_average } = props;
  return (
    <div className="movie-card">
      <img
        className="card-img"
        loading="lazy"
        src={poster_path_full}
        alt={title}
      />
      <div className="movie-info">
        <p>{title}</p>
        <p>Rating - {vote_average}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;
