import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Spinner } from "@blueprintjs/core";

import { useMovieStore } from "../../../store";
import { customDebounce } from "../../../utils";
import "./search.css";
import MovieCard from "../../UI/molecules/movieCard";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [matchMovie, setMatchMovie] = useState([]);

  const [loading, setLoading] = useState(true);

  const searchQueryMovie = searchParams.get("sq");

  const getMovies = useMovieStore((state) => state.movies);

  const searchMovieValues = (value) => {
    setLoading(true);
    let matchedMovies = getMovies.filter((ele) =>
      ele.title.toLowerCase().includes(value)
    );
    setMatchMovie(matchedMovies);
    setLoading(false);
  };

  const handleSearchMovie = useCallback(customDebounce(searchMovieValues), []);

  useEffect(() => {
    handleSearchMovie(searchQueryMovie);
  }, [searchQueryMovie]);

  return (
    <>
      {loading ? (
        <Spinner width={60} />
      ) : (
        <div className="container">
          <div className="searched-movie">
            {matchMovie.map((ele) => (
              <MovieCard {...ele} key={ele.id} />
            ))}{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
