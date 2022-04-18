import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let movieStore = (set) => ({
  movies: [],
  storeNewMovies: (movie) => set((state) => ({ movies: movie })),
});

movieStore = devtools(movieStore);
movieStore = persist(movieStore, { name: "user_settings" });

export const useMovieStore = create(movieStore);
