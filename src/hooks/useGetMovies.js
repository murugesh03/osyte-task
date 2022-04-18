import { useQuery } from "react-query";

import { getMovies } from "../api";

export const useGetMovies = (currentPage) => {
  return useQuery(["repoData", currentPage], () => getMovies(currentPage), {
    keepPreviousData: true,
    enabled: false,
  });
};
