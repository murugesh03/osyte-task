import axios from "axios";

export const getMovies = (page = 1) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );
};
